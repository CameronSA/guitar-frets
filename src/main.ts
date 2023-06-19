import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

export function getNotes(flats: boolean = false): Map<number, string> {
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

export function getNoteIndex(fretIndex: number, fretTuning: number): number {
  let index = fretIndex + fretTuning + 1;
  if (index > 11) {
    let offset = index%12;
    return offset;
  } else {
    return index;
  }
}

export function getStandardTuningIndices(): number[] {
  // E,B,G,D,A,E
  return [7, 2, 10, 5, 0, 7];
}

export function getOpenDTuningIndices(): number[] {
  // D,A,F#,D,A,D
  return [5,0,9,5,0,5];
}

export function getDADGADTuningIndices(): number[] {
  // D,A,G,D,A,D
  return [5,0,10,5,0,5];
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
