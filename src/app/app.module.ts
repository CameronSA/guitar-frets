import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FretComponent } from './fret/fret.component';
import { StringComponent } from './string/string.component';
import { FretBoardComponent } from './fret-board/fret-board.component';

@NgModule({
  declarations: [
    AppComponent,
    FretComponent,
    StringComponent,
    FretBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
