import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

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
