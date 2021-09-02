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

  private descriptions: Map<string, string> = new Map();

  constructor() {
    /* set promise callbacks that are called from python script */
    (document as any).boomer = {};
    (document as any).boomer.load_resolve = this.scriptLoadedResolve;
    (document as any).boomer.load_reject  = this.scriptLoadedReject;

    /* load the python script asynchronously */
    const script = document.createElement('script');
    script.src = 'python/boomer-wrapper.py';
    script.type = 'text/python';
    document.getElementsByTagName('head')[0].appendChild(script);

    /* FIXME: ideally, this would be given by the Boomer python library. */
    this.descriptions.set('monique', 'Monique s\'occupe de quelques remplacements populaires simples, dont plusieurs homophones.');
    this.descriptions.set('alain', 'Alain permute certains suffixes.');
    this.descriptions.set('nicole', 'Nicole gère tout ce qui concerne la conjugaison des verbes du premier groupe.');
    this.descriptions.set('serge', 'Serge remplace des formes contractées par leur forme longue.');
    this.descriptions.set('andré', 'André fait commencer certains mots par une majuscule.');
    this.descriptions.set('muriel', 'Muriel fait commencer certains mots par une minuscule.');
    this.descriptions.set('denis', 'Denis allonge certaines ponctuations.');
    this.descriptions.set('guy', 'Guy supprime des accents.');
    this.descriptions.set('chantal', 'Chantal remplace les apostrophes et les traits d\'union par des espaces ou par rien.');
    this.descriptions.set('marc', 'Marc supprime des petits mots.');
    this.descriptions.set('manon', 'Manon permute deux lettres d\'un mot assez long.');
    this.descriptions.set('sylvain', 'Sylvain multiplie les espaces.');
    this.descriptions.set('josey', 'Josey ajoute des virgules ou des points.');
    this.descriptions.set('yves', 'Yves remplace bêtement certaines chaines par d\'autres qui sont phonétiquement équivalentes.');
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

  async getDescription(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.descriptions.has(name)) {
        return resolve(this.descriptions.get(name));
      }

      reject();
    });
  }
}
