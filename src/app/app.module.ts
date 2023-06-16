import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FretComponent } from './fret/fret.component';
import { StringComponent } from './string/string.component';
import { StringGapComponent } from './string-gap/string-gap.component';
import { SixStringFretBoardComponent } from './six-string-fret-board/six-string-fret-board.component';
import { PseudoFretComponent } from './string-gap/pseudo-fret/pseudo-fret.component';

@NgModule({
  declarations: [
    AppComponent,
    FretComponent,
    StringComponent,
    SixStringFretBoardComponent,
    StringGapComponent,
    PseudoFretComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function getFretWidth(index: number): string {
  // Function to gradually reduce fret width based on position along the fret board
  return `${fretWidth(index)}rem`;
}

export function getHalfFretWidth(index: number, offset: number): string {
  return `${(fretWidth(index)/2) + offset}rem`;
}

function fretWidth(index:number) :number {
  return 5 / (index / (index / 2 + 4) + 1);
}
