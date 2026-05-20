import { HttpErrorResponse } from '@angular/common/http';

export const SESSION_EXPIRED_MESSAGE =
  'Tu sesión expiró o no es válida. Vuelve a iniciar sesión.';

/** Mensajes genericos del backend en 401 que no aplican fuera del login. */
export function isMisleadingLoginErrorMessage(message: string): boolean {
  const m = message.toLowerCase();
  return (
    m.includes('contraseña') ||
    m.includes('contrasena') ||
    m.includes('credenciales') ||
    m.includes('incorrectos') ||
    m.includes('permisos para realizar') ||
    m.includes('sesión no válida') ||
    m.includes('sesion no valida')
  );
}

export function extractApiErrorMessage(
  error: unknown,
  fallback = 'Ocurrio un error inesperado'
): string {
  if (error instanceof HttpErrorResponse) {
    const body = error.error;
    if (body && typeof body === 'object' && 'message' in body) {
      const msg = String((body as { message: unknown }).message);
      if (error.status === 401 && isMisleadingLoginErrorMessage(msg)) {
        return SESSION_EXPIRED_MESSAGE;
      }
      return msg;
    }
    if (error.status === 401) {
      return SESSION_EXPIRED_MESSAGE;
    }
    return error.message || fallback;
  }

  if (error && typeof error === 'object') {
    const e = error as { error?: { message?: string }; message?: string };
    const msg = e.error?.message || e.message;
    if (msg) {
      return msg;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

/** Reemplaza el mensaje enganoso de login en respuestas 401 de APIs protegidas. */
export function normalizeUnauthorizedError(error: HttpErrorResponse): HttpErrorResponse {
  if (error.status !== 401) {
    return error;
  }

  const body = error.error;
  if (!body || typeof body !== 'object' || !('message' in body)) {
    return new HttpErrorResponse({
      error: { message: SESSION_EXPIRED_MESSAGE },
      headers: error.headers,
      status: error.status,
      statusText: error.statusText,
      url: error.url ?? undefined
    });
  }

  const raw = String((body as { message: unknown }).message);
  if (!isMisleadingLoginErrorMessage(raw)) {
    return error;
  }

  return new HttpErrorResponse({
    error: { ...(body as object), message: SESSION_EXPIRED_MESSAGE },
    headers: error.headers,
    status: error.status,
    statusText: error.statusText,
    url: error.url ?? undefined
  });
}
