import { Component, Input, OnInit } from '@angular/core';

interface FretMarker {
  index: number;
  hasMarker: boolean;
}

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
})
export class StringComponent implements OnInit {
  frets: Array<number> = [];
  @Input() numberFrets: number = 0;

  ngOnInit() {
    this.frets = [];
    for (let i = 0; i < this.numberFrets; i++) {
      this.frets.push(i);
    }
  }
}
