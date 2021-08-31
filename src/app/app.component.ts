import { Component } from '@angular/core';
import { BoomerService } from './boomer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput: string = "Bonjour, je m'appel Gabriel.";
  textOutput: string = "";

  constructor(private boomerService: BoomerService) {}

  execute() {
    this.boomerService.transformText(this.textInput).then((output) => {
      this.textOutput = output
    });
  }
}
