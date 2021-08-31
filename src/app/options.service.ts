import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  public algosInUse: Map<string, number> = new Map();
  public values: Map<string, number> = new Map();
  public seed = 100;
  private seedChecked = false;

  constructor() { }

  public getAlgos(): Map<string, [number, number]> {
    const algos: Map<string, [number, number]> = new Map();
    this.algosInUse.forEach((value: number, key: string) => {
      algos.set(key, [value * 100, 100]);
    });
    return algos;
  }

  public setSeedChecked(checked: boolean): void {
    this.seedChecked = checked;
  }

  public getSeed(): number {
    if (this.seedChecked) {return this.seed;}
    return;
  }
}
