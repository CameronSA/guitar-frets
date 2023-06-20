import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FretComponent } from './fret/fret.component';
import { StringComponent } from './string/string.component';
import { StringGapComponent } from './string-gap/string-gap.component';
import { SixStringFretBoardComponent } from './six-string-fret-board/six-string-fret-board.component';
import { PseudoFretComponent } from './string-gap/pseudo-fret/pseudo-fret.component';
import { TuningCyclerComponent } from './tuning-cycler/tuning-cycler.component';
import { TogglerComponent } from './toggler/toggler.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FretComponent,
    StringComponent,
    SixStringFretBoardComponent,
    StringGapComponent,
    PseudoFretComponent,
    TuningCyclerComponent,
    TogglerComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


