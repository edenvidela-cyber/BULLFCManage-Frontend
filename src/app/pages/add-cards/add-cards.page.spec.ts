import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardsPage } from './add-cards.page';

describe('AddCardsPage', () => {
  let component: AddCardsPage;
  let fixture: ComponentFixture<AddCardsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCardsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCardsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
