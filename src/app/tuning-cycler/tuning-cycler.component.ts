import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export enum Tuning {
  Standard = 'Standard',
  OpenD = 'OpenD',
  DADGAD = 'DADGAD',
}

@Component({
  selector: 'app-tuning-cycler',
  templateUrl: './tuning-cycler.component.html',
  styleUrls: ['./tuning-cycler.component.css'],
})
export class TuningCyclerComponent implements OnInit {
  @Output() tuningSelectionEvent = new EventEmitter<Tuning>();
  tunings: Array<Tuning> = [];
  selectedTuningIndex: number = 0;

  ngOnInit(): void {
    for (let tuning in Tuning) {
      this.tunings.push(tuning as Tuning);
    }
  }

  onNextClick(): void {
    if (this.selectedTuningIndex >= this.tunings.length - 1) {
      this.selectedTuningIndex = 0;
    } else {
      this.selectedTuningIndex++;
    }

    this.tuningSelectionEvent.emit(this.tunings[this.selectedTuningIndex]);
  }

  onPrevClick(): void {
    if (this.selectedTuningIndex <= 0) {
      this.selectedTuningIndex = this.tunings.length - 1;
    } else {
      this.selectedTuningIndex--;
    }

    this.tuningSelectionEvent.emit(this.tunings[this.selectedTuningIndex]);
  }

  selectedTuning(): Tuning{
    return this.tunings[this.selectedTuningIndex];
  }
}
