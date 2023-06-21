import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { StringTuning } from '../six-string-fret-board/six-string-fret-board.component';
import { getEquivalentFrets } from 'src/main';

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
  @Input() stringTuning: StringTuning = {
    index: 0,
    stringNote: 'A',
    fretIndicesToSelect: [],
    fretIndicesToDeselect: [],
  };
  @Input() showNotes: boolean = false;
  @Input() showFlats: boolean = false;
  @Input() resetToggle: boolean = false;
  @Input() changeTrigger: boolean = false;
  @Input() multiSelect: boolean = false;
  @Output() selectEvent = new EventEmitter<FretStatus>();
  prevResetToggle: boolean = false;
  prevStringTuningIndex: number = 0;
  prevSelectedNotes: number[] = [];
  prevDeselectedNotes: number[] = [];

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
    } else if (this.prevStringTuningIndex !== this.stringTuning.index) {
      let fretsToSelect: number[] = [];
      this.frets.forEach((fret) => {
        if (fret.isSelected) {
          let offset = this.stringTuning.index - this.prevStringTuningIndex;
          let newIndex = fret.index - offset;
          if (newIndex >= 0 && newIndex < this.numberFrets - 1) {
            fretsToSelect.push(newIndex);
          }
        }
      });

      if (this.multiSelect) {
        this.frets.forEach((fret) => {
          fret.isSelected = false;
        });

        for (let i = 0; i < fretsToSelect.length; i++) {
          let fretIndices = getEquivalentFrets(
            fretsToSelect[i],
            this.numberFrets
          );

          for (let j = 0; j < fretIndices.length; j++) {
            this.frets[fretIndices[j]].isSelected = true;
          }
        }
      } else {
        for (let i = 0; i < this.frets.length; i++) {
          this.frets[i].isSelected = fretsToSelect.includes(
            this.frets[i].index
          );
        }
      }

      this.prevStringTuningIndex = this.stringTuning.index;
    } else if (
      this.prevSelectedNotes != this.stringTuning.fretIndicesToSelect ||
      this.prevDeselectedNotes != this.stringTuning.fretIndicesToDeselect
    ) {
      for (let i = 0; i < this.stringTuning.fretIndicesToSelect.length; i++) {
        let fretIndex = this.stringTuning.fretIndicesToSelect[i];
        this.frets[fretIndex].isSelected = true;
      }

      for (let i = 0; i < this.stringTuning.fretIndicesToDeselect.length; i++) {
        let fretIndex = this.stringTuning.fretIndicesToDeselect[i];
        this.frets[fretIndex].isSelected = false;
      }
    }
  }

  reset() {
    for (let i = 0; i < this.frets.length; i++) {
      this.frets[i].isSelected = false;
    }
  }

  onFretClick(index: number) {
    let selected = false;
    for (let i = 0; i < this.frets.length; i++) {
      if (this.frets[i].index === index) {
        selected = !this.frets[i].isSelected;
        this.frets[i].isSelected = selected;
        break;
      }
    }

    this.selectEvent.emit({
      index: index,
      isSelected: selected,
    });
  }
}
