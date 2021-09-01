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
        this.optionsService.setAlgoValue(algorithm, 0.5);
        this.optionsService.setAlgo(algorithm, true);
      });
    });
  }
}
