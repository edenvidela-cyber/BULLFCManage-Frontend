import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDBPage } from './player-db.page';

describe('PlayerDBPage', () => {
  let component: PlayerDBPage;
  let fixture: ComponentFixture<PlayerDBPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerDBPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerDBPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
