import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '@features/auth/infrastructure/session/auth.service';

const evaluateAccess = (route: ActivatedRouteSnapshot, requiredRoles?: string[]): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/auth/login'], {
      queryParams: { returnUrl: route.url.join('/') }
    });
    return false;
  }

  if (requiredRoles && requiredRoles.length > 0 && !authService.hasAnyRole(requiredRoles)) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const requiredRoles = route.data['roles'] as string[] | undefined;
  return evaluateAccess(route, requiredRoles);
};

export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    router.navigate(['/dashboard/inicio']);
    return false;
  }

  return true;
};

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  return evaluateAccess(route, ['ROLE_ADMIN']);
};

export const managerGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  return evaluateAccess(route, ['ROLE_ADMIN', 'ROLE_MANAGER']);
};
