import {
  authGuard,
  guestGuard
} from "./chunk-AAWOEB7B.js";
import {
  AuthService
} from "./chunk-BSOZ4HA7.js";
import {
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  switchMap,
  throwError,
  withComponentInputBinding,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-6KLI64HZ.js";

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "verify",
    loadComponent: () => import("./chunk-GBP55KAS.js").then((m) => m.VerifyEmailComponent)
  },
  {
    path: "reset-password",
    loadComponent: () => import("./chunk-NWLIONOR.js").then((m) => m.ResetPasswordComponent)
  },
  {
    path: "",
    canActivate: [guestGuard],
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-G5X22FMH.js").then((m) => m.LoginComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./chunk-2OOOKA7S.js").then((m) => m.RegisterComponent)
      },
      {
        path: "forgot-password",
        redirectTo: "login",
        pathMatch: "full"
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }
    ]
  }
];

// src/app/app.routes.ts
var routes = [
  {
    path: "auth",
    /** Rutas síncronas: evita que la primera carga caiga en `**` → login antes de resolver lazy `loadChildren`. */
    children: AUTH_ROUTES
  },
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadChildren: () => import("./chunk-QTHNDTBY.js").then((m) => m.DASHBOARD_ROUTES)
  },
  {
    path: "unauthorized",
    loadComponent: () => import("./chunk-OEQDITNQ.js").then((m) => m.UnauthorizedComponent)
  },
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "auth/login"
  }
];

// src/app/core/interceptors/auth.interceptor.ts
function isAuthPublicUrl(url) {
  const u = url.toLowerCase();
  return u.includes("/auth/login") || u.includes("/auth/signup") || u.includes("/auth/verify") || u.includes("/auth/refresh") || u.includes("/auth/forgot-password") || u.includes("/auth/reset-password");
}
function shouldSuppressLoginRedirect(router) {
  const path = router.url.split("?")[0].toLowerCase();
  return path.includes("/auth/reset-password") || path.includes("/auth/verify");
}
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (isAuthPublicUrl(req.url)) {
    return next(req);
  }
  const token = authService.getToken();
  if (token) {
    req = addTokenToRequest(req, token);
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401 && !req.url.includes("/refresh")) {
      return authService.refreshToken().pipe(switchMap((response) => {
        const newReq = addTokenToRequest(req, response.accessToken);
        return next(newReq);
      }), catchError((refreshError) => {
        authService.logout();
        if (!shouldSuppressLoginRedirect(router)) {
          void router.navigate(["/auth/login"]);
        }
        return throwError(() => refreshError);
      }));
    }
    return throwError(() => error);
  }));
};
function addTokenToRequest(req, token) {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "opsflow-frontend";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: `<router-outlet />`, styles: ["/* angular:styles/component:scss;189b4b61fdb5160d2334e130ea0b07376c066e6c4f53324082f9858a80e3631d;C:/Cursos/Java/opsflow/opsflow-frontend/src/app/app.component.ts */\n:host {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
