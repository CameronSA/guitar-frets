import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fret-board',
  templateUrl: './fret-board.component.html',
  styleUrls: ['./fret-board.component.css'],
})
export class FretBoardComponent implements OnChanges {
  @Input() nStrings: number = 6;
  strings: Array<number> = [];

  ngOnChanges(_changes: SimpleChanges): void {
    this.strings = [];
    for (let i = 0; i < this.nStrings; i++) {
      this.strings.push(i);
    }
  }
}
