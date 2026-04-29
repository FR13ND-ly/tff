import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceChampionship } from './dice-championship';

describe('DiceChampionship', () => {
  let component: DiceChampionship;
  let fixture: ComponentFixture<DiceChampionship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceChampionship]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceChampionship);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
