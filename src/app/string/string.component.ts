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
  prevResetToggle: boolean = false;
  prevTuning: number = 0;

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
    if (this.prevResetToggle !== this.resetToggle) {
      this.reset();
      this.prevResetToggle = this.resetToggle;
    }

    if (this.prevTuning !== this.tuning) {
      let fretsToSelect: number[] = [];
      this.frets.forEach((fret) => {
        if (fret.isSelected) {
          let offset = this.tuning - this.prevTuning;
          let newIndex = fret.index - offset;
          if (newIndex >= 0 && newIndex < this.numberFrets - 1) {
            fretsToSelect.push(newIndex);
          }
        }
      });

      for (let i = 0; i < this.frets.length; i++) {
        this.frets[i].isSelected = fretsToSelect.includes(this.frets[i].index);
      }

      this.prevTuning = this.tuning;
    }
  }

  reset() {
    for (let i = 0; i < this.frets.length; i++) {
      this.frets[i].isSelected = false;
    }
  }

  onFretClick(index: number) {
    for (let i = 0; i < this.frets.length; i++) {
      if (this.frets[i].index === index) {
        this.frets[i].isSelected = !this.frets[i].isSelected;
      }
    }
  }
}
