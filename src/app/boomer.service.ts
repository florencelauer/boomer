import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoomerService {
  listAlgorithms(): string[] {
    return (document as any).boomer.algorithms().$items;
  }
  
  transformText(text: string, algos?: Map<string, [number, number]>, seed?: number): string {
    if (algos === undefined) {
      return (document as any).boomer.execute(text);
    } else {
      if (seed === undefined) {
        return (document as any).boomer.execute(text, algos);
      } else {
        return (document as any).boomer.execute(text, algos, seed);
      }
    }
  }
}
