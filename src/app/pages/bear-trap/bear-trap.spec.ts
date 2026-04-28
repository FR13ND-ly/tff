import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearTrap } from './bear-trap';

describe('BearTrap', () => {
  let component: BearTrap;
  let fixture: ComponentFixture<BearTrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearTrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearTrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
