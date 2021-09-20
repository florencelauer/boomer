import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  algosInUse: Map<string, number> = new Map();
  algoValues: Map<string, number> = new Map();

  public seed = 100;
  private seedChecked = false;

  constructor() { }

  setAlgo(name: string, enabled: boolean): void {
    if (enabled) {
      const value = this.algoValues.get(name);
      this.algosInUse.set(name, value);
    } else {
      this.algosInUse.set(name, -1);
    }
  }

  selectAll(enable: boolean): void {
    this.algosInUse.forEach((value: number, key: string) => {
      if(enable) {
        this.algosInUse.set(key, this.algoValues.get(key));
      } else {
        this.algosInUse.set(key, -1);
      }
    });
  }

  isAlgoEnabled(name: string): boolean {
    if (this.algosInUse.has(name)) {
      return (this.algosInUse.get(name) >= 0);
    }

    return false;
  }

  setAlgoValue(name: string, value: number|string): void {
    if (typeof(value) === 'string') {
      if (String(Number(value)) !== value) {
        return;
      }
    }

    this.algoValues.set(name, value as number);
    if (this.algosInUse.has(name)) {
      this.algosInUse.set(name, value as number);
    }
  }

  getAlgoValue(name: string): number {
    return this.algoValues.get(name);
  }

  public getAlgos(): Map<string, [number, number]> {
    const algos: Map<string, [number, number]> = new Map();
    this.algosInUse.forEach((value: number, key: string) => {
      if (value >= 0) {
        algos.set(key, [value, 10 - value]);
      } else {
        algos.set(key, [0, 10]);
      }
    });
    return algos;
  }

  public setSeedChecked(checked: boolean): void {
    this.seedChecked = checked;
  }

  public getSeed(): number {
    if (this.seedChecked) { return this.seed; }
    return;
  }
}
