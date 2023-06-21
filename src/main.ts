
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

export function getNotes(flats: boolean): Map<number, string> {
  let baseNotes = new Map<number, string>([
    [0, 'A'],
    [2, 'B'],
    [3, 'C'],
    [5, 'D'],
    [7, 'E'],
    [8, 'F'],
    [10, 'G'],
  ]);

  if (flats) {
    baseNotes.set(1, 'B♭');
    baseNotes.set(4, 'D♭');
    baseNotes.set(6, 'E♭');
    baseNotes.set(9, 'G♭');
    baseNotes.set(11, 'A♭');
  } else {
    baseNotes.set(1, 'A♯');
    baseNotes.set(4, 'C♯');
    baseNotes.set(6, 'D♯');
    baseNotes.set(9, 'F♯');
    baseNotes.set(11, 'G♯');
  }

  return baseNotes;
}

export function getNoteIndex(fretIndex: number, stringTuning: number): number {
  let index = fretIndex + stringTuning + 1;
  if (index > 11) {
    let offset = index % 12;
    return offset;
  } else {
    return index;
  }
}

export function getEquivalentFrets(
  fretIndex: number,
  totalNumberFrets: number
): number[] {
  let lowerIndex = fretIndex - 12;
  let upperIndex = fretIndex + 12;
  let fretIndices: number[] = [];

  if (lowerIndex >= 0) {
    fretIndices.push(lowerIndex);
  }

  fretIndices.push(fretIndex);

  if (upperIndex < totalNumberFrets) {
    fretIndices.push(upperIndex);
  }

  return fretIndices;
}

export function getFretIndices(
  noteIndex: number,
  stringTuning: number,
  totalNumberFrets: number
): number[] {
  // Given a note index, gets all fret indices that are the same note
  let firstFretIndex = noteIndex - stringTuning - 1;
  if (firstFretIndex < 0) {
    firstFretIndex += 12;
  }

  return getEquivalentFrets(firstFretIndex, totalNumberFrets);
}

export function getStandardTuningIndices(): number[] {
  // E,B,G,D,A,E
  return [7, 2, 10, 5, 0, 7];
}

export function getOpenDTuningIndices(): number[] {
  // D,A,F#,D,A,D
  return [5, 0, 9, 5, 0, 5];
}

export function getDADGADTuningIndices(): number[] {
  // D,A,G,D,A,D
  return [5, 0, 10, 5, 0, 5];
}

export function getFretWidth(index: number): string {
  // Function to gradually reduce fret width based on position along the fret board
  return `${fretWidth(index)}vw`;
}

export function getHalfFretWidth(index: number, offset: number): string {
  return `${fretWidth(index) / 2 + offset}vw`;
}

function fretWidth(index: number): number {
  return 8.35 / (index / (index / 2 + 4) + 1);
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTHBt_vNcYV00XGNViOgCCHCMBcS8BfLA",
  authDomain: "guitarfrets-a2909.firebaseapp.com",
  projectId: "guitarfrets-a2909",
  storageBucket: "guitarfrets-a2909.appspot.com",
  messagingSenderId: "666269205630",
  appId: "1:666269205630:web:13ae7d17a12fa3330fc42f",
  measurementId: "G-YQ8MS5S70V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
