import { Component } from '@angular/core';
import { BoomerService } from './boomer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput = 'Bonjour, je m\'appelle Gabriel.';
  textOutput = '';

  constructor(private boomerService: BoomerService) {}

  execute(): void {
    this.boomerService.transformText(this.textInput).then((output) => {
      this.textOutput = output;
    });
  }
}
