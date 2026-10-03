import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template: `
    <app-navbar></app-navbar>
    <main style="padding: 20px;">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  protected readonly title = signal('SoccerCardManager');
}
