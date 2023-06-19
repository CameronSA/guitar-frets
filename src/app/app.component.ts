import { Component } from '@angular/core';
import { Tuning } from './tuning-cycler/tuning-cycler.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guitar-frets';

  tuning = Tuning.Standard;
  showNotes = true;
  showFlats = true;

  onTuningSelection(tuning: Tuning){
    this.tuning = tuning;
  }
}
