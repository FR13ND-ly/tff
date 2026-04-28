import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svs } from './svs';

describe('Svs', () => {
  let component: Svs;
  let fixture: ComponentFixture<Svs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Svs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Svs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
