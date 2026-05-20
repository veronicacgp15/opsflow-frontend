/** Utilidades para validar expiracion del access token JWT (sin dependencias externas). */

function decodeJwtPayload(token: string): { exp?: number } | null {
  try {
    const parts = token.split('.');
    if (parts.length < 2) {
      return null;
    }
    let base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const pad = base64.length % 4;
    if (pad) {
      base64 += '='.repeat(4 - pad);
    }
    return JSON.parse(atob(base64)) as { exp?: number };
  } catch {
    return null;
  }
}

/** True si el string parece un JWT (tres segmentos base64url). */
export function looksLikeJwt(token: string): boolean {
  return token.split('.').length === 3;
}

export function getJwtExpirationMs(token: string): number | null {
  const payload = decodeJwtPayload(token);
  if (!payload || typeof payload.exp !== 'number') {
    return null;
  }
  return payload.exp * 1000;
}

/** True si el token tiene claim `exp` y ya vencio (margen opcional en ms). */
export function isJwtExpired(token: string, skewMs = 30_000): boolean {
  if (!looksLikeJwt(token)) {
    return false;
  }
  const expMs = getJwtExpirationMs(token);
  if (expMs === null) {
    return false;
  }
  return Date.now() >= expMs - skewMs;
}

/** True si el JWT expira dentro de `leadMs` (sesion activa: renovar antes). */
export function isJwtNearExpiry(token: string, leadMs: number): boolean {
  if (!looksLikeJwt(token)) {
    return false;
  }
  const expMs = getJwtExpirationMs(token);
  if (expMs === null) {
    return false;
  }
  return Date.now() >= expMs - leadMs;
}
