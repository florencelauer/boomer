import { Component, OnInit } from '@angular/core';
import { BoomerService } from '../boomer.service';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  public algorithms: string[] = [];

  constructor(private boomerService: BoomerService, public optionsService: OptionsService) {}

  async ngOnInit(): Promise<void> {
    this.algorithms = await this.boomerService.listAlgorithms();

    this.boomerService.listAlgorithms().then((list) => {
      list.forEach((algorithm) => {
        this.optionsService.values.set(algorithm, 0.25);
      });
    });
  }

  setAlgorithm(algorithm: string, checked: boolean): void {
    if (checked) {
      this.optionsService.algosInUse.set(algorithm, this.optionsService.values.get(algorithm));
    } else {
      this.optionsService.algosInUse.delete(algorithm);
    }
  }

  setValue(algorithm: string, value: number): void {
    this.optionsService.values.set(algorithm, value as number);
    if (this.optionsService.algosInUse.has(algorithm)) {
      this.optionsService.algosInUse.set(algorithm, value);
    }
  }

}
