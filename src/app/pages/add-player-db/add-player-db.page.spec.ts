import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerDBPage } from './add-player-db.page';

describe('AddPlayerDBPage', () => {
  let component: AddPlayerDBPage;
  let fixture: ComponentFixture<AddPlayerDBPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlayerDBPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlayerDBPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
