import { Component, Input, OnChanges } from '@angular/core';
import {
  getDADGADTuningIndices,
  getFretIndices,
  getNoteIndex,
  getNotes,
  getOpenDTuningIndices,
  getStandardTuningIndices,
} from 'src/main';
import { Tuning } from '../tuning-cycler/tuning-cycler.component';
import { FretStatus } from '../string/string.component';

export interface StringTuning {
  index: number;
  stringNote: string;
  fretIndicesToSelect: number[];
  fretIndicesToDeselect: number[];
}

@Component({
  selector: 'app-six-string-fret-board',
  templateUrl: './six-string-fret-board.component.html',
  styleUrls: ['./six-string-fret-board.component.css'],
})
export class SixStringFretBoardComponent implements OnChanges {
  numberFrets = 20;
  tunings: StringTuning[] = [];
  @Input() selectedTuning: Tuning = Tuning.Standard;
  @Input() showNotes: boolean = false;
  @Input() showFlats: boolean = false;
  @Input() resetToggle: boolean = false;
  @Input() multiSelect: boolean = false;
  changeTrigger: boolean = false;

  ngOnChanges(): void {
    this.tunings = [];
    let notes = getNotes(this.showFlats);
    let tuningIndices = this.getTuningIndices(this.selectedTuning);
    tuningIndices.forEach((index) => {
      this.tunings.push({
        index: index,
        stringNote: notes.get(index)!,
        fretIndicesToSelect: [],
        fretIndicesToDeselect: [],
      });
    });
  }

  getTuningIndices(tuning: Tuning): number[] {
    switch (tuning) {
      case Tuning.Standard:
        return getStandardTuningIndices();
      case Tuning.OpenD:
        return getOpenDTuningIndices();
      case Tuning.DADGAD:
        return getDADGADTuningIndices();
      default:
        return getStandardTuningIndices();
    }
  }

  onSelectEvent(fretStatus: FretStatus, stringTuning: number) {
    if(!this.multiSelect){
      return;
    }

    let noteIndex = getNoteIndex(fretStatus.index, stringTuning);

    for (let i = 0; i < this.tunings.length; i++) {
      let fretIndices = getFretIndices(
        noteIndex,
        this.tunings[i].index,
        this.numberFrets
      );
      console.log(fretIndices);
      if (fretStatus.isSelected) {
        this.tunings[i].fretIndicesToSelect = fretIndices;
        this.tunings[i].fretIndicesToDeselect = [];
      } else {
        this.tunings[i].fretIndicesToDeselect = fretIndices;
        this.tunings[i].fretIndicesToSelect = [];
      }
    }

    this.changeTrigger = !this.changeTrigger;
  }
}
