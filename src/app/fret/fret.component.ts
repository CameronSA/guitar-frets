import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { getFretWidth, getNoteIndex, getNotes } from 'src/app/app.component';

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
  @Input() isSelected: boolean = false;
  @Output() clickEvent = new EventEmitter();

  ngOnInit() {
    this.width = getFretWidth(this.fretNumber);
  }

  ngOnChanges() {
    let noteIndex = getNoteIndex(this.fretNumber, this.tuning);
    let notes = getNotes(this.flats);

    this.note = notes.get(noteIndex)!;
  }

  onClick() {
    this.clickEvent.emit();
  }
}
