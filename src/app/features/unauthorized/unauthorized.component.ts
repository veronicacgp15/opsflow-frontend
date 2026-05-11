import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="unauthorized-container">
      <div class="unauthorized-card">
        <div class="icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
          </svg>
        </div>
        <h1>Acceso denegado</h1>
        <p>No tienes permisos para acceder a esta pagina. Contacta a tu administrador si crees que esto es un error.</p>
        <a routerLink="/dashboard" class="btn btn-primary">Volver al dashboard</a>
      </div>
    </div>
  `,
  styles: [`
    .unauthorized-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background: var(--gray-50);
    }

    .unauthorized-card {
      text-align: center;
      max-width: 400px;
    }

    .icon-wrapper {
      width: 80px;
      height: 80px;
      background: #fef2f2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;

      svg {
        width: 40px;
        height: 40px;
        color: #dc2626;
      }
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--gray-600);
      margin-bottom: 2rem;
      line-height: 1.5;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      font-size: 0.9375rem;
      font-weight: 600;
      border-radius: var(--radius);
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    .btn-primary {
      background: var(--primary-600);
      color: white;

      &:hover {
        background: var(--primary-700);
      }
    }
  `]
})
export class UnauthorizedComponent {}
