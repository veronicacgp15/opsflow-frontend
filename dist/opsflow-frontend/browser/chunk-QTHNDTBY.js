import {
  adminGuard
} from "./chunk-AAWOEB7B.js";
import "./chunk-BSOZ4HA7.js";
import "./chunk-6KLI64HZ.js";

// src/app/features/dashboard/dashboard.routes.ts
var DASHBOARD_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-PDP7HYWQ.js").then((m) => m.DashboardLayoutComponent),
    children: [
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      {
        path: "inicio",
        loadComponent: () => import("./chunk-YXNDA5YQ.js").then((m) => m.DashboardHomeComponent)
      },
      {
        path: "roles",
        loadComponent: () => import("./chunk-NCHEVGZV.js").then((m) => m.RolesAdminPageComponent),
        canActivate: [adminGuard]
      },
      {
        path: "usuarios",
        loadComponent: () => import("./chunk-IWTNEUXB.js").then((m) => m.UsersAdminPageComponent),
        canActivate: [adminGuard]
      },
      {
        path: "mi-organizacion",
        redirectTo: "organizaciones",
        pathMatch: "full"
      },
      {
        // Cualquier autenticado puede cambiar su propia contrasena. La proteccion de auth la
        // pone el guard padre del dashboard.
        path: "mi-perfil/cambiar-password",
        loadComponent: () => import("./chunk-A5JDUVP5.js").then((m) => m.ChangePasswordPageComponent)
      },
      {
        path: "organizaciones",
        loadComponent: () => import("./chunk-D6Z7G4BU.js").then((m) => m.OrganizationsPageComponent)
      },
      {
        path: "documentos",
        loadComponent: () => import("./chunk-6OHLRRK4.js").then((m) => m.DocumentsPageComponent)
      }
    ]
  }
];
export {
  DASHBOARD_ROUTES
};
//# sourceMappingURL=chunk-QTHNDTBY.js.map
