import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { getFretWidth } from '../app.module';

@Component({
  selector: 'app-fret',
  templateUrl: './fret.component.html',
  styleUrls: ['./fret.component.css'],
})
export class FretComponent implements OnInit {
  width: string = '';
  @Input() fretNumber: number = 0;

  ngOnInit() {
    this.width = getFretWidth(this.fretNumber);
  }
}
