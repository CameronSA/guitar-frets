import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoFretComponent } from './pseudo-fret.component';

describe('PseudoFretComponent', () => {
  let component: PseudoFretComponent;
  let fixture: ComponentFixture<PseudoFretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PseudoFretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PseudoFretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
