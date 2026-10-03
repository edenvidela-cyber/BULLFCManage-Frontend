import { Component } from '@angular/core';
import { PageTitle } from '../../components/page-title/page-title';
import { PlayerForm } from '../../components/player-form/player-form';

@Component({
  selector: 'app-add-player-db',
  standalone: true,
  imports: [PageTitle, PlayerForm],
  template: `
    <app-page-title title="Register Profile"></app-page-title>
    <app-player-form></app-player-form>
  `
})
export class AddPlayerDBPage {}