import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringGapComponent } from './string-gap.component';

describe('StringGapComponent', () => {
  let component: StringGapComponent;
  let fixture: ComponentFixture<StringGapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringGapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
