import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixStringFretBoardComponent } from './six-string-fret-board.component';

describe('SixStringFretBoardComponent', () => {
  let component: SixStringFretBoardComponent;
  let fixture: ComponentFixture<SixStringFretBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixStringFretBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixStringFretBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
