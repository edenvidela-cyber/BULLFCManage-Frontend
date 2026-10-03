import { Component } from '@angular/core';
import { PageTitle } from '../../components/page-title/page-title';
import { CardForm } from '../../components/card-form/card-form';

@Component({
  selector: 'app-add-cards',
  standalone: true,
  imports: [PageTitle, CardForm],
  template: `
    <app-page-title title="Forge Card Blueprint"></app-page-title>
    <app-card-form></app-card-form>
  `
})
export class AddCardsPage {}