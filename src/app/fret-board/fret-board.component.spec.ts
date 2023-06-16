import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FretBoardComponent } from './fret-board.component';

describe('FretBoardComponent', () => {
  let component: FretBoardComponent;
  let fixture: ComponentFixture<FretBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FretBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FretBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
