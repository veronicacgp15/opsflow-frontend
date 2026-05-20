import { Injectable, inject } from '@angular/core';
import { environment } from '@env/environment';
import { isJwtExpired, isJwtNearExpiry } from './jwt.util';
import { AuthService } from './auth.service';

/**
 * Mantiene la sesion mientras hay actividad: renueva el JWT antes de que expire
 * y cierra sesion solo tras {@link environment.sessionInactivityMs} sin interaccion.
 */
@Injectable({ providedIn: 'root' })
export class SessionActivityService {
  private readonly auth = inject(AuthService);

  private readonly inactivityMs = environment.sessionInactivityMs;
  private readonly refreshLeadMs = environment.sessionRefreshLeadMs;
  private readonly tickMs = 30_000;

  private lastActivityAt = Date.now();
  private timer: ReturnType<typeof setInterval> | null = null;
  private listenersBound = false;

  start(): void {
    this.touch();
    this.bindActivityListeners();
    this.stopTimer();
    this.timer = setInterval(() => this.onTick(), this.tickMs);
  }

  stop(): void {
    this.stopTimer();
  }

  touch(): void {
    this.lastActivityAt = Date.now();
  }

  isInactive(): boolean {
    return Date.now() - this.lastActivityAt >= this.inactivityMs;
  }

  private stopTimer(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private onTick(): void {
    if (!this.auth.isAuthenticated()) {
      this.stop();
      return;
    }

    if (this.isInactive()) {
      this.auth.logoutDueToInactivity();
      return;
    }

    const token = this.auth.getToken();
    if (
      token &&
      (isJwtExpired(token) || isJwtNearExpiry(token, this.refreshLeadMs))
    ) {
      this.auth.refreshTokenSilently();
    }
  }

  private bindActivityListeners(): void {
    if (this.listenersBound || typeof document === 'undefined') {
      return;
    }
    const onActivity = () => this.touch();
    const opts: AddEventListenerOptions = { passive: true };
    for (const event of ['click', 'keydown', 'mousemove', 'scroll', 'touchstart']) {
      document.addEventListener(event, onActivity, opts);
    }
    this.listenersBound = true;
  }
}
