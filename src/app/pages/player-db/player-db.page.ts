import { Component } from '@angular/core';
import { PageTitle } from '../../components/page-title/page-title';
import { PlayerList } from '../../components/player-list/player-list';

@Component({
  selector: 'app-player-db',
  standalone: true,
  imports: [PageTitle, PlayerList],
  template: `
    <app-page-title title="Manager Database"></app-page-title>
    <app-player-list></app-player-list>
  `
})
export class PlayerDBPage {}