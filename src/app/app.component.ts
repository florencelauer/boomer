import { Component } from '@angular/core';
import { BoomerService } from './boomer.service';
import { OptionsService } from './options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput = 'Bonjour, je m\'appelle Gabriel.';
  textOutput = '';

  constructor(private boomerService: BoomerService, private optionsService: OptionsService) {}

  navigateToWebSource(): void {
    window.open('https://github.com/florencelauer/boomer');
  }

  navigateToPythonSource(): void {
    window.open('https://github.com/eepp/boomer');
  }

  execute() {
    this.boomerService.transformText(this.textInput, this.optionsService.getAlgos(), this.optionsService.getSeed()).then((output) => {
      this.textOutput = output
    });
  }
}
