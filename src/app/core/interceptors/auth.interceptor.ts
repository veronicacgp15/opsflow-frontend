import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

function isAuthPublicUrl(url: string): boolean {
  const u = url.toLowerCase();
  return (
    u.includes('/auth/login') ||
    u.includes('/auth/signup') ||
    u.includes('/auth/verify') ||
    u.includes('/auth/refresh') ||
    u.includes('/auth/forgot-password') ||
    u.includes('/auth/reset-password')
  );
}


function shouldSuppressLoginRedirect(router: Router): boolean {
  const path = router.url.split('?')[0].toLowerCase();
  return path.includes('/auth/reset-password') || path.includes('/auth/verify');
}

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (isAuthPublicUrl(req.url)) {
    return next(req);
  }

  const token = authService.getToken();
  
  if (token) {
    req = addTokenToRequest(req, token);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !req.url.includes('/refresh')) {
        return authService.refreshToken().pipe(
          switchMap(response => {
            const newReq = addTokenToRequest(req, response.accessToken);
            return next(newReq);
          }),
          catchError(refreshError => {
            authService.logout();
            if (!shouldSuppressLoginRedirect(router)) {
              void router.navigate(['/auth/login']);
            }
            return throwError(() => refreshError);
          })
        );
      }
      
      return throwError(() => error);
    })
  );
};

function addTokenToRequest(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}
