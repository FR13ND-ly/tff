import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Labyrinth } from './labyrinth';

describe('Labyrinth', () => {
  let component: Labyrinth;
  let fixture: ComponentFixture<Labyrinth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Labyrinth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Labyrinth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
