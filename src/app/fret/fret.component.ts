import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { getFretWidth, getNoteIndex, getNotes } from 'src/main';

@Component({
  selector: 'app-fret',
  templateUrl: './fret.component.html',
  styleUrls: ['./fret.component.css'],
})
export class FretComponent implements OnInit, OnChanges {
  width: string = '';
  note: string = '';
  @Input() fretNumber: number = 0;
  @Input() tuning: number = 0;
  @Input() flats: boolean = false;
  @Input() showNotes: boolean = false;
  @Input() resetToggle: boolean = false;
  isSelected: boolean = false;
  resetValue: boolean = false;

  ngOnInit() {
    this.width = getFretWidth(this.fretNumber);
  }

  ngOnChanges() {
    let noteIndex = getNoteIndex(this.fretNumber, this.tuning);
    let notes = getNotes(this.flats);

    this.note = notes.get(noteIndex)!;

    if (this.resetValue !== this.resetToggle) {
      this.resetValue = this.resetToggle;
      this.isSelected = false;
    }
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
