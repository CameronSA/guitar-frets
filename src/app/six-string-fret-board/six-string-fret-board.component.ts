import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { getDADGADTuningIndices, getNotes, getOpenDTuningIndices, getStandardTuningIndices } from 'src/main';
import { Tuning } from '../tuning-cycler/tuning-cycler.component';

@Component({
  selector: 'app-six-string-fret-board',
  templateUrl: './six-string-fret-board.component.html',
  styleUrls: ['./six-string-fret-board.component.css'],
})
export class SixStringFretBoardComponent implements OnChanges {
  numberFrets = 20;
  tunings: [number, string][] = [];
  @Input() selectedTuning: Tuning = Tuning.Standard;
  @Input() showNotes: boolean = false;
  @Input() showFlats: boolean = false;

  ngOnChanges(): void {
    this.tunings = [];
    let notes = getNotes(this.showFlats);
    let tuningIndices = this.getTuningIndices(this.selectedTuning);
    tuningIndices.forEach((index) => {
      this.tunings.push([index, notes.get(index)!]);
    });
  }

  getTuningIndices(tuning: Tuning): number[]{
    switch(tuning){
      case Tuning.Standard: return getStandardTuningIndices();
      case Tuning.OpenD: return getOpenDTuningIndices();
      case Tuning.DADGAD: return getDADGADTuningIndices();
      default: return getStandardTuningIndices();
    }
  }
}
