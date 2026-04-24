import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-inner">
          <div class="brand" routerLink="/">
            <span class="brand-icon"><i class="fas fa-paw"></i></span>
            <span class="brand-name">PetServices</span>
          </div>
          <nav class="nav">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Inicio</a>
            <a routerLink="/" routerLinkActive="active" class="nav-link">Servicios</a>
            <a routerLink="/profile" routerLinkActive="active" class="nav-link">Perfil</a>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="footer" style="background: #0b1220; color: #fff; padding: 40px 0; text-align: center;">
      <div class="container">
        <p>&copy; 2024 PetServices. Todos los derechos reservados.</p>
      </div>
    </footer>
  `
})
export class AppComponent {
  title = 'PetServices';
}
