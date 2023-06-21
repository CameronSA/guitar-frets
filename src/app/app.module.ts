import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';

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
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


