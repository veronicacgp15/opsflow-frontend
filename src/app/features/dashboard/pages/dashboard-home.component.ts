import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <h1 class="page-title">Inicio</h1>
      <p class="page-sub">Resumen de tu sesion en OpsFlow.</p>
      <div class="cards">
        <article class="card card--user">
          <div class="card-head">
            <span class="card-icon card-icon--user" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <h3>Usuario</h3>
          </div>
          <p class="card-value">{{ authService.currentUser()?.username }}</p>
        </article>
        <article class="card card--roles">
          <div class="card-head">
            <span class="card-icon card-icon--roles" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <h3>Roles Asignados</h3>
          </div>
          <p class="card-value">{{ rolesLine() }}</p>
        </article>
      </div>
    </div>
  `,
  styles: [
    `
      .page {
        max-width: 960px;
      }
      .page-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0 0 0.35rem;
        letter-spacing: -0.02em;
        background: linear-gradient(135deg, var(--primary-800) 0%, var(--primary-500) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .page-sub {
        color: var(--gray-600);
        margin: 0 0 1.75rem;
        font-size: 0.9375rem;
      }
      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1.25rem;
      }
      .card {
        position: relative;
        overflow: hidden;
        border-radius: var(--radius-lg);
        padding: 1.35rem 1.35rem 1.5rem;
        border: 1px solid transparent;
        box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
      }
      .card--user {
        background: linear-gradient(145deg, #eff6ff 0%, #ffffff 45%, #f8fafc 100%);
        border-color: rgba(59, 130, 246, 0.25);
      }
      .card--user::before {
        content: '';
        position: absolute;
        inset: 0 0 auto 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-500), var(--primary-300));
      }
      .card--roles {
        background: linear-gradient(145deg, #ecfdf5 0%, #ffffff 45%, #f8fafc 100%);
        border-color: rgba(16, 185, 129, 0.28);
      }
      .card--roles::before {
        content: '';
        position: absolute;
        inset: 0 0 auto 0;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-600), #34d399);
      }
      .card-head {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.85rem;
      }
      .card-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .card-icon svg {
        width: 22px;
        height: 22px;
      }
      .card-icon--user {
        background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
        color: #fff;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
      }
      .card-icon--roles {
        background: linear-gradient(135deg, #059669, #10b981);
        color: #fff;
        box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
      }
      .card h3 {
        font-size: 0.6875rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--gray-600);
        margin: 0;
        font-weight: 700;
      }
      .card-value {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--gray-900);
        letter-spacing: -0.01em;
      }
      .card--roles .card-value {
        color: #065f46;
      }
      .card--user .card-value {
        color: var(--primary-900);
      }
    `
  ]
})
export class DashboardHomeComponent {
  constructor(public authService: AuthService) {}

  rolesLine(): string {
    const r = this.authService.userRoles();
    return r.length ? r.map(x => x.replace(/^ROLE_/, '')).join(', ') : '—';
  }
}
