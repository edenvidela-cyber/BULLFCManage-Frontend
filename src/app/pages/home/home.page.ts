import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitle } from '../../components/page-title/page-title';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTitle, RouterLink],
  template: `
    <app-page-title title="Home Arena"></app-page-title>
    
    <div class="dashboard-container">
      <p class="welcome-msg">Welcome to the B.U.L.L. FC Squad Control Center. Manage your active roster blueprints and custom card configurations seamlessly.</p>
      
      <div class="quick-actions">
        <button routerLink="/add-player" class="dash-btn">Forge New Player</button>
        <button routerLink="/player-db" class="dash-btn">View Player Database</button>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container { max-width: 800px; margin: 40px auto; text-align: center; color: #fff; }
    .welcome-msg { font-size: 1.1rem; color: #ccc; margin-bottom: 30px; line-height: 1.6; }
    .quick-actions { display: flex; justify-content: center; gap: 20px; }
    .dash-btn { background-color: #ccff00; color: #000; border: none; padding: 12px 24px; font-weight: bold; font-size: 1rem; cursor: pointer; border-radius: 4px; transition: transform 0.2s; }
    .dash-btn:hover { transform: translateY(-2px); background-color: #b3df00; }
  `]
})
export class HomePage {}