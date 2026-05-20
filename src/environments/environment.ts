export const environment = {
  production: false,
  apiUrl: '/api',
  tokenKey: 'opsflow_token',
  refreshTokenKey: 'opsflow_refresh_token',
  userKey: 'opsflow_user',
  permissionsKey: 'opsflow_permissions',
  /** Flag en localStorage: solo restaurar sesion persistente si el usuario marco "Recordarme". */
  rememberSessionKey: 'opsflow_remember_session',
  /** Cierra sesion tras este tiempo sin interaccion (ms). */
  sessionInactivityMs: 5 * 60 * 1000,
  /** Renueva el access token si expira dentro de este margen (ms). */
  sessionRefreshLeadMs: 5 * 60 * 1000,
  gatewayDocsUrl: 'http://localhost:8080/swagger-ui.html'
};
