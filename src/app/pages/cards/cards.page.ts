import { Component } from '@angular/core';
import { PageTitle } from '../../components/page-title/page-title';
import { CardList } from '../../components/card-list/card-list';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [PageTitle, CardList],
  template: `
    <app-page-title title="Tactical Card Vault"></app-page-title>
    <app-card-list></app-card-list>
  `
})
export class CardsPage {}