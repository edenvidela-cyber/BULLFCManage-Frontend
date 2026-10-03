import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-brand">B.U.L.L. FC Manager</div>
      <div class="nav-links">
        <a routerLink="/home" routerLinkActive="active">Home Arena</a>
        <a routerLink="/add-player" routerLinkActive="active">Forge Player</a>
        <a routerLink="/add-cards" routerLinkActive="active">Create Card Style</a>
        <a routerLink="/player-db" routerLinkActive="active">Player DB</a>
        <a routerLink="/cards" routerLinkActive="active">Card Vault</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar { display: flex; justify-content: space-between; align-items: center; background-color: #051405; padding: 15px 30px; border-bottom: 2px solid #ccff00; }
    .nav-brand { color: #fff; font-weight: bold; font-size: 1.3rem; letter-spacing: 1px; }
    .nav-links a { color: #aaa; text-decoration: none; margin-left: 20px; font-weight: 500; transition: color 0.2s; }
    .nav-links a:hover { color: #fff; }
    .nav-links a.active { color: #ccff00; border-bottom: 2px solid #ccff00; padding-bottom: 4px; }
  `]
})
export class Navbar {}