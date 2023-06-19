import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuningCyclerComponent } from './tuning-cycler.component';

describe('TuningCyclerComponent', () => {
  let component: TuningCyclerComponent;
  let fixture: ComponentFixture<TuningCyclerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuningCyclerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuningCyclerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
