import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>{{ title }}</h1>
      <hr class="title-divider" />
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 24px; text-align: center; }
    h1 { color: #ccff00; font-family: sans-serif; text-transform: uppercase; letter-spacing: 1px; }
    .title-divider { border: 1px solid #222; width: 60%; margin: 10px auto; }
  `]
})
export class PageTitle {
  @Input() title: string = '';
}