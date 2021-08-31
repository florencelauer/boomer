import { Component, OnInit } from '@angular/core';
import { BoomerService } from '../boomer.service';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  public algorithms: string[] = [];

  public algosInUse: Map<string, number> = new Map();

  public values: Map<string, number> = new Map();

  constructor(public boomerService: BoomerService) {}

  async ngOnInit(): Promise<void> {
    this.algorithms = await this.boomerService.listAlgorithms();

    this.boomerService.listAlgorithms().then((list) => {
      list.forEach((algorithm) => {
        this.values.set(algorithm, 0.25);
      });
    });
  }

  setAlgorithm(algorithm: string, checked: boolean): void {
    if (checked) {
      this.algosInUse.set(algorithm, this.values.get(algorithm));
    } else {
      this.algosInUse.delete(algorithm);
    }
  }

  setValue(algorithm: string, value: number): void {
    this.values.set(algorithm, value as number);
    if (this.algosInUse.has(algorithm)) {
      this.algosInUse.set(algorithm, value);
    }
  }

}
