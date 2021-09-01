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
        this.optionsService.setAlgoValue(algorithm, 1);
        this.optionsService.setAlgo(algorithm, true);
      });
    });
  }

  sliderInputValueChanged(algo: string, event: any): void {
    /* make sure it is a string */
    if (String(Number(event.target.value)) !== event.target.value) {
      event.target.value = String(this.optionsService.getAlgoValue(algo));
      return;
    }

    /* make sure it is bounded */
    const nextNumber: number = Number(event.target.value);
    if (nextNumber < 0 || 10 < nextNumber) {
      event.target.value = String(this.optionsService.getAlgoValue(algo));
      return;
    }

    this.optionsService.setAlgoValue(algo, nextNumber);
  }
}
