import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoomerService {
  private scriptLoadedResolve;
  private scriptLoadedReject;
  private scriptLoaded = new Promise((resolve, reject) => {
    this.scriptLoadedResolve = resolve;
    this.scriptLoadedReject  = reject;
  });

  constructor() {
    /* set promise callbacks that are called from python script */
    (document as any).boomer = {};
    (document as any).boomer.load_resolve = this.scriptLoadedResolve;
    (document as any).boomer.load_reject  = this.scriptLoadedReject;

    /* load the python script asynchronously */
    let script = document.createElement('script');
    script.src = 'python/boomer-wrapper.py';
    script.type = 'text/python';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  async listAlgorithms(): Promise<string[]> {
    await this.scriptLoaded;
    return (document as any).boomer.algorithms();
  }
  
  async transformText(text: string, algos?: Map<string, [number, number]>, seed?: number): Promise<string> {
    await this.scriptLoaded;
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
