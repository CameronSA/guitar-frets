import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglerComponent } from './toggler.component';

describe('ToggleNotesComponent', () => {
  let component: TogglerComponent;
  let fixture: ComponentFixture<TogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
