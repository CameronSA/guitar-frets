import { Component, Input, OnInit } from '@angular/core';
import { getFretWidth, getHalfFretWidth } from 'src/app/app.module';

@Component({
  selector: 'app-pseudo-fret',
  templateUrl: './pseudo-fret.component.html',
  styleUrls: ['./pseudo-fret.component.css']
})
export class PseudoFretComponent implements OnInit {
  width: string = '';
  halfWidth: string = '';
  @Input() fretNumber: number = 0;
  @Input() isMarked: boolean = false;

  ngOnInit() {
    this.width = getFretWidth(this.fretNumber);
    this.halfWidth = getHalfFretWidth(this.fretNumber,-0.5);
  }
}
