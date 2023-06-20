import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export interface FretStatus {
  index: number;
  isSelected: boolean;
}

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
})
export class StringComponent implements OnInit, OnChanges {
  frets: FretStatus[] = []; //fret index, isSelected
  @Input() numberFrets: number = 0;
  @Input() tuning: number = 0;
  @Input() showNotes: boolean = false;
  @Input() showFlats: boolean = false;
  @Input() resetToggle: boolean = false;
  resetValue: boolean = false;

  ngOnInit() {
    this.frets = [];
    for (let i = 0; i < this.numberFrets; i++) {
      this.frets.push({
        index: i,
        isSelected: false,
      });
    }
  }

  ngOnChanges(): void {
    if (this.resetValue !== this.resetToggle) {
      this.reset();
      this.resetValue = this.resetToggle;
    }
  }

  reset() {
    for (let i = 0; i < this.frets.length; i++) {
      this.frets[i].isSelected = false;
    }
  }

  onFretClick(index: number) {
    for (let i = 0; i < this.frets.length; i++) {
      if (i === index) {
        this.frets[i].isSelected = !this.frets[i].isSelected;
      }
    }
  }
}
