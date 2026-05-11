import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  Router,
  inject
} from "./chunk-6KLI64HZ.js";

// src/app/core/guards/auth.guard.ts
var evaluateAccess = (route, requiredRoles) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigate(["/auth/login"], {
      queryParams: { returnUrl: route.url.join("/") }
    });
    return false;
  }
  if (requiredRoles && requiredRoles.length > 0 && !authService.hasAnyRole(requiredRoles)) {
    router.navigate(["/unauthorized"]);
    return false;
  }
  return true;
};
var authGuard = (route) => {
  const requiredRoles = route.data["roles"];
  return evaluateAccess(route, requiredRoles);
};
var guestGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    router.navigate(["/dashboard"]);
    return false;
  }
  return true;
};
var adminGuard = (route) => {
  return evaluateAccess(route, ["ROLE_ADMIN"]);
};

export {
  authGuard,
  guestGuard,
  adminGuard
};
//# sourceMappingURL=chunk-AAWOEB7B.js.map
