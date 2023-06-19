import { Component } from '@angular/core';
import { Tuning } from './six-string-fret-board/six-string-fret-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guitar-frets';

  tuning = Tuning.Standard;
  showNotes = true;
}
