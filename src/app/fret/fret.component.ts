import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { getFretWidth, getNoteIndex, getNotes } from 'src/main';

@Component({
  selector: 'app-fret',
  templateUrl: './fret.component.html',
  styleUrls: ['./fret.component.css'],
})
export class FretComponent implements OnInit {
  width: string = '';
  note: string = '';
  @Input() fretNumber: number = 0;
  @Input() tuning: number = 0;
  @Input() flats: boolean = false;

  ngOnInit() {
    this.width = getFretWidth(this.fretNumber);
    let noteIndex = getNoteIndex(this.fretNumber, this.tuning);
    let notes = getNotes(this.flats);

    this.note = notes.get(noteIndex)!;
  }
}
