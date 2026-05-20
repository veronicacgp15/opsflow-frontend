import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { P } from '@core/constants/permissions';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  template: `
    <div class="shell" [class.sidebar-open]="sidebarOpen()">
      <aside class="sidebar" aria-label="Navegacion principal">
        <div class="sidebar-brand">
          <span class="brand-mark">O</span>
          <span class="brand-text">OpsFlow</span>
        </div>

        <nav class="sidebar-nav">
          <a routerLink="/dashboard/inicio" routerLinkActive="active" class="nav-item">
            <span class="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </span>
            <span>Inicio</span>
          </a>

          @if (
            authService.hasAnyPermission([
              P.AUTH_ROLES_LIST,
              P.USERS_LIST,
              P.USERS_MY_ORGANIZATION
            ]) || authService.isAdmin()
          ) {
            <div class="nav-group-label">Administracion</div>
            @if (authService.hasPermission(P.AUTH_ROLES_LIST)) {
              <a
                routerLink="/dashboard/roles"
                routerLinkActive="active"
                class="nav-item"
              >
                <span class="nav-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </span>
                <span>Roles</span>
              </a>
            }
            @if (authService.hasPermission(P.USERS_LIST)) {
              <a
                routerLink="/dashboard/usuarios"
                routerLinkActive="active"
                class="nav-item"
              >
                <span class="nav-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <span>Usuarios</span>
              </a>
            }
            @if (authService.isAdmin()) {
              <a
                routerLink="/dashboard/tipos-documento"
                routerLinkActive="active"
                class="nav-item"
              >
                <span class="nav-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <line x1="12" y1="6" x2="12" y2="12" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                  </svg>
                </span>
                <span>Tipos de documento</span>
              </a>
            }
          }

          @if (
            authService.hasAnyPermission([
              P.ORG_LIST,
              P.ORG_GET,
              P.ORG_CREATE,
              P.DOC_LIST,
              P.DOC_CREATE
            ])
          ) {
            <div class="nav-group-label">Operacion</div>
            @if (authService.hasAnyPermission([P.ORG_LIST, P.ORG_GET, P.ORG_CREATE])) {
              <a
                routerLink="/dashboard/organizaciones"
                routerLinkActive="active"
                class="nav-item"
              >
                <span class="nav-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </span>
                <span>Organizaciones</span>
              </a>
            }
            @if (authService.hasAnyPermission([P.DOC_LIST, P.DOC_CREATE])) {
              <a
                routerLink="/dashboard/documentos"
                routerLinkActive="active"
                class="nav-item"
              >
                <span class="nav-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </span>
                <span>Documentos</span>
              </a>
            }
          }
        </nav>
      </aside>

      <div class="main-col">
        <header class="topbar">
          <button type="button" class="btn-icon menu-toggle" (click)="toggleSidebar()" aria-label="Abrir menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <div class="topbar-user" (click)="toggleUserMenu($event)">
            <div class="avatar">{{ initials() }}</div>
            <div class="user-text">
              <span class="user-line1">{{ authService.fullName() || authService.currentUser()?.username }}</span>
              <span class="user-line2">{{ rolesShort() }}</span>
            </div>
            <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>

            @if (userMenuOpen()) {
              <div class="user-dropdown" (click)="$event.stopPropagation()">
                <button type="button" class="dd-item" (click)="onRefreshToken()" [disabled]="busy()">
                  Renovar access token
                </button>
                <a
                  routerLink="/dashboard/mi-perfil/cambiar-password"
                  class="dd-item"
                  (click)="userMenuOpen.set(false)"
                >
                  Cambiar contrasena
                </a>
                @if (authService.isAdmin()) {
                  <button type="button" class="dd-item" (click)="openHashPanel()">
                    Generar hash de contrasena
                  </button>
                }
                <button type="button" class="dd-item danger" (click)="authService.logout()">
                  Cerrar sesion
                </button>
              </div>
            }
          </div>
        </header>

        @if (hashPanelOpen()) {
          <div class="hash-panel">
            <div class="hash-inner">
              <label>Texto a hashear (BCrypt)</label>
              <input type="password" [(ngModel)]="hashInput" class="hash-input" placeholder="Contrasena" />
              <div class="hash-actions">
                <button type="button" class="btn-sm primary" (click)="runHash()" [disabled]="busy() || !hashInput">Generar</button>
                <button type="button" class="btn-sm" (click)="hashPanelOpen.set(false)">Cerrar</button>
              </div>
              @if (hashResult()) {
                <pre class="hash-out">{{ hashResult() }}</pre>
              }
              @if (hashError()) {
                <p class="hash-err">{{ hashError() }}</p>
              }
            </div>
          </div>
        }

        <main class="content">
          <router-outlet />
        </main>
      </div>

      @if (sidebarOpen()) {
        <div class="backdrop" (click)="sidebarOpen.set(false)" aria-hidden="true"></div>
      }
    </div>
  `,
  styles: [
    `
      .shell {
        display: flex;
        min-height: 100vh;
        background:
          radial-gradient(ellipse 90% 60% at 100% 0%, rgba(59, 130, 246, 0.09) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 0% 100%, rgba(37, 99, 235, 0.06) 0%, transparent 50%),
          var(--gray-50);
      }
      .sidebar {
        width: 260px;
        flex-shrink: 0;
        background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
        color: #e2e8f0;
        display: flex;
        flex-direction: column;
        z-index: 40;
        transition: transform 0.2s ease;
      }
      .sidebar-brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1.25rem 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .brand-mark {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: var(--primary-500);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
      }
      .brand-text {
        font-weight: 700;
        font-size: 1.1rem;
      }
      .sidebar-nav {
        padding: 0.75rem 0;
        flex: 1;
        overflow-y: auto;
      }
      .nav-group-label {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #94a3b8;
        padding: 1rem 1rem 0.35rem;
      }
      .nav-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.65rem 1rem;
        color: #cbd5e1;
        text-decoration: none;
        font-size: 0.9rem;
        transition: background 0.15s, color 0.15s;
      }
      .nav-item:hover {
        background: rgba(255, 255, 255, 0.06);
        color: white;
      }
      .nav-item.active {
        background: rgba(59, 130, 246, 0.25);
        color: white;
        border-right: 3px solid var(--primary-400);
      }
      .nav-icon svg {
        width: 20px;
        height: 20px;
        opacity: 0.9;
      }
      .main-col {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
      }
      .topbar {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.65rem 1.25rem;
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        border-bottom: 1px solid rgba(37, 99, 235, 0.12);
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;
        position: sticky;
        top: 0;
        z-index: 30;
      }
      .menu-toggle {
        display: none;
        background: none;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        color: var(--gray-700);
      }
      .menu-toggle svg {
        width: 22px;
        height: 22px;
      }
      .topbar-user {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.65rem;
        cursor: pointer;
        padding: 0.35rem 0.65rem 0.35rem 0.45rem;
        border-radius: var(--radius-md);
        margin-left: auto;
        border: 1px solid rgba(59, 130, 246, 0.18);
        background: linear-gradient(135deg, rgba(239, 246, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%);
        box-shadow: 0 1px 2px rgba(37, 99, 235, 0.08);
      }
      .topbar-user:hover {
        background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
        border-color: rgba(59, 130, 246, 0.35);
      }
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.85rem;
        box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
      }
      .user-text {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
      }
      .user-line1 {
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--gray-900);
      }
      .user-line2 {
        font-size: 0.72rem;
        color: var(--gray-500);
      }
      .chev {
        width: 18px;
        height: 18px;
        color: var(--gray-400);
      }
      .user-dropdown {
        position: absolute;
        right: 0;
        top: calc(100% + 6px);
        min-width: 220px;
        background: white;
        border: 1px solid var(--gray-200);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        padding: 0.35rem;
        z-index: 50;
      }
      .dd-item {
        display: block;
        width: 100%;
        text-align: left;
        padding: 0.55rem 0.75rem;
        border: none;
        background: none;
        border-radius: 6px;
        font-size: 0.875rem;
        cursor: pointer;
        color: var(--gray-800);
      }
      .dd-item:hover:not(:disabled) {
        background: var(--gray-100);
      }
      .dd-item:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .dd-item.danger {
        color: #b91c1c;
      }
      .content {
        flex: 1;
        padding: 1.25rem 1.5rem 2rem;
        overflow-x: auto;
      }
      .backdrop {
        display: none;
      }
      @media (max-width: 900px) {
        .menu-toggle {
          display: block;
        }
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          transform: translateX(-100%);
        }
        .shell.sidebar-open .sidebar {
          transform: translateX(0);
        }
        .backdrop {
          display: block;
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          z-index: 35;
        }
      }
      .hash-panel {
        background: #fefce8;
        border-bottom: 1px solid #fde047;
        padding: 0.75rem 1.25rem;
      }
      .hash-inner {
        max-width: 640px;
        margin: 0 auto;
      }
      .hash-inner label {
        display: block;
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.35rem;
      }
      .hash-input {
        width: 100%;
        padding: 0.5rem 0.65rem;
        border: 1px solid var(--gray-300);
        border-radius: 6px;
        margin-bottom: 0.5rem;
      }
      .hash-actions {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .btn-sm {
        padding: 0.4rem 0.85rem;
        border-radius: 6px;
        border: 1px solid var(--gray-300);
        background: white;
        cursor: pointer;
        font-size: 0.8125rem;
      }
      .btn-sm.primary {
        background: var(--primary-600);
        color: white;
        border-color: var(--primary-600);
      }
      .hash-out {
        background: #1e293b;
        color: #e2e8f0;
        padding: 0.75rem;
        border-radius: 6px;
        font-size: 0.75rem;
        overflow-x: auto;
        margin: 0;
      }
      .hash-err {
        color: #b91c1c;
        font-size: 0.875rem;
        margin: 0;
      }
    `
  ]
})
export class DashboardLayoutComponent {
  sidebarOpen = signal(false);
  userMenuOpen = signal(false);
  hashPanelOpen = signal(false);
  busy = signal(false);
  hashInput = '';
  hashResult = signal<string | null>(null);
  hashError = signal<string | null>(null);

  /** Codes de permisos expuestos al template (sidebar con @if). */
  protected readonly P = P;

  constructor(public authService: AuthService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(ev: MouseEvent): void {
    const t = ev.target as HTMLElement;
    if (!t.closest('.topbar-user')) {
      this.userMenuOpen.set(false);
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  toggleUserMenu(ev: MouseEvent): void {
    ev.stopPropagation();
    this.userMenuOpen.update(v => !v);
  }

  initials(): string {
    const u = this.authService.currentUser();
    if (!u) return '?';
    const a = (u.name || u.username || '?')[0] || '?';
    const b = (u.lastname || '')[0] || '';
    return (a + b).toUpperCase();
  }

  rolesShort(): string {
    const r = this.authService.userRoles();
    return r.length ? r.map(x => x.replace(/^ROLE_/, '')).join(' · ') : '';
  }

  onRefreshToken(): void {
    this.busy.set(true);
    this.userMenuOpen.set(false);
    this.authService.refreshAccessToken().subscribe({
      next: () => {
        this.busy.set(false);
        alert('Access token renovado.');
      },
      error: err => {
        this.busy.set(false);
        alert(err?.message || 'No se pudo renovar el token');
      }
    });
  }

  openHashPanel(): void {
    this.userMenuOpen.set(false);
    this.hashResult.set(null);
    this.hashError.set(null);
    this.hashInput = '';
    this.hashPanelOpen.set(true);
  }

  runHash(): void {
    this.hashError.set(null);
    this.hashResult.set(null);
    this.busy.set(true);
    this.authService.generatePasswordHash(this.hashInput).subscribe({
      next: h => {
        this.busy.set(false);
        this.hashResult.set(h);
      },
      error: err => {
        this.busy.set(false);
        this.hashError.set(err?.message || 'Error');
      }
    });
  }
}
