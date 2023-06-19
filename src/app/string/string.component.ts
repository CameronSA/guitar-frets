import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
})
export class StringComponent implements OnInit {
  frets: Array<number> = [];
  @Input() numberFrets: number = 0;
  @Input() tuning: number = 0;
  @Input() showNotes: boolean = false;

  ngOnInit() {
    this.frets = [];
    for (let i = 0; i < this.numberFrets; i++) {
      this.frets.push(i);
    }
  }
}
