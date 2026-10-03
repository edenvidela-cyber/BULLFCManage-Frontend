import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AddPlayerDBPage} from './pages/add-player-db/add-player-db.page';
import { AddCardsPage} from './pages/add-cards/add-cards.page';
import { CardsPage } from './pages/cards/cards.page'; 
import { PlayerDBPage } from './pages/player-db/player-db.page';  

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'add-player', component: AddPlayerDBPage },
  { path: 'add-cards', component: AddCardsPage },
  { path: 'cards', component: CardsPage },
  { path: 'player-db', component: PlayerDBPage },
  { path: '**', redirectTo: '/home' } // Fallback to home
];
