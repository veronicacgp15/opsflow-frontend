import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, tap, throwError } from 'rxjs';
import { AuthService } from '@features/auth/infrastructure/session/auth.service';
import { SessionActivityService } from '@features/auth/infrastructure/session/session-activity.service';
import { isJwtExpired } from '@features/auth/infrastructure/session/jwt.util';
import {
  normalizeUnauthorizedError,
  SESSION_EXPIRED_MESSAGE
} from '@platform/http/api-error.util';

const AUTH_RETRY_HEADER = 'X-Auth-Retry';

function isAuthPublicUrl(url: string): boolean {
  const u = url.toLowerCase();
  return (
    u.includes('/auth/login') ||
    u.includes('/auth/signup') ||
    u.includes('/auth/verify') ||
    u.includes('/auth/refresh') ||
    u.includes('/auth/forgot-password') ||
    u.includes('/auth/reset-password') ||
    u.includes('/auth/logout') ||
    u.includes('/auth/check-username')
  );
}

function addTokenToRequest(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}

function sendAuthenticated(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  sessionActivity: SessionActivityService
) {
  const token = authService.getToken();
  if (!token) {
    return throwError(
      () =>
        new HttpErrorResponse({
          status: 401,
          error: { message: SESSION_EXPIRED_MESSAGE }
        })
    );
  }
  return next(addTokenToRequest(req, token)).pipe(
    tap(() => sessionActivity.touch())
  );
}

function retryAfterRefresh(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  sessionActivity: SessionActivityService
) {
  return authService.refreshToken().pipe(
    switchMap(() => {
      const retried = req.clone({
        setHeaders: { [AUTH_RETRY_HEADER]: '1' }
      });
      return sendAuthenticated(retried, next, authService, sessionActivity);
    }),
    catchError(refreshError =>
      throwError(() =>
        refreshError instanceof HttpErrorResponse
          ? normalizeUnauthorizedError(refreshError)
          : new HttpErrorResponse({
              status: 401,
              error: {
                message:
                  refreshError instanceof Error
                    ? refreshError.message
                    : SESSION_EXPIRED_MESSAGE
              }
            })
      )
    )
  );
}

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  const sessionActivity = inject(SessionActivityService);

  if (isAuthPublicUrl(req.url)) {
    return next(req);
  }

  const token = authService.getToken();
  if (!token) {
    return throwError(
      () =>
        new HttpErrorResponse({
          status: 401,
          error: { message: SESSION_EXPIRED_MESSAGE }
        })
    );
  }

  let authedReq = addTokenToRequest(req, token);

  if (isJwtExpired(token)) {
    return retryAfterRefresh(authedReq, next, authService, sessionActivity);
  }

  return next(authedReq).pipe(
    tap(() => sessionActivity.touch()),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !req.headers.has(AUTH_RETRY_HEADER)) {
        return retryAfterRefresh(authedReq, next, authService, sessionActivity);
      }

      return throwError(() =>
        error.status === 401 ? normalizeUnauthorizedError(error) : error
      );
    })
  );
};
