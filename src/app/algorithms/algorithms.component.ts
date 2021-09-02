import { Component, OnInit } from '@angular/core';
import { BoomerService } from '../boomer.service';
import { OptionsService } from '../options.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AlgorithmsComponent implements OnInit {

  expandedDescription: string | null;

  public algorithms: string[] = [];
  public algorithmsDescription: Map<string, string> = new Map();

  constructor(private boomerService: BoomerService, public optionsService: OptionsService) {}

  async ngOnInit(): Promise<void> {
    this.algorithms = await this.boomerService.listAlgorithms();

    this.boomerService.listAlgorithms().then((list) => {
      list.forEach(async (algorithm) => {
        this.optionsService.setAlgoValue(algorithm, 1);
        this.optionsService.setAlgo(algorithm, true);

        this.algorithmsDescription.set(algorithm, await this.boomerService.getDescription(algorithm));
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
