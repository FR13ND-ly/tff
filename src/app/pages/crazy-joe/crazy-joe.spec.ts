import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyJoe } from './crazy-joe';

describe('CrazyJoe', () => {
  let component: CrazyJoe;
  let fixture: ComponentFixture<CrazyJoe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrazyJoe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrazyJoe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
