import { Component, Input, OnInit } from '@angular/core';

interface FretMarker {
  index: number;
  isMarked: boolean;
}

@Component({
  selector: 'app-string-gap',
  templateUrl: './string-gap.component.html',
  styleUrls: ['./string-gap.component.css'],
})
export class StringGapComponent implements OnInit {
  frets: Array<FretMarker> = [];
  @Input() numberFrets: number = 0;
  @Input() fretsToMark: Array<number> = [];

  ngOnInit() {
    this.frets = [];
    for (let i = 0; i < this.numberFrets; i++) {
      this.frets.push({
        index: i,
        isMarked: this.fretsToMark.includes(i),
      });
    }
  }
}
