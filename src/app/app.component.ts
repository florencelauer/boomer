import { Component, OnInit } from '@angular/core';
import { BoomerService } from './boomer.service';
import { OptionsService } from './options.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  textInput: BehaviorSubject<string> = new BehaviorSubject<string>('Bonjour je m\'appelle Florence');
  textOutput = '';
  textOutputObservable: Observable<string>;

  constructor(private boomerService: BoomerService, private optionsService: OptionsService) {}

  ngOnInit(): void {
    this.textOutputObservable = this.textInput.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((text: string) => this.boomerService.transformText(
        text,
        this.optionsService.getAlgos(),
        this.optionsService.getSeed()
      )),
    );

    this.textOutputObservable.subscribe((val) => {
      this.textOutput = val;
    });
  }

  setTextInput(text: string): void {
    this.textInput.next(text);
  }

  navigateToWebSource(): void {
    window.open('https://github.com/florencelauer/boomer');
  }

  navigateToPythonSource(): void {
    window.open('https://github.com/eepp/boomer');
  }

  execute(): void {
    this.boomerService.transformText(
      this.textInput.getValue(),
      this.optionsService.getAlgos(),
      this.optionsService.getSeed()
    ).then( output => this.textOutput = output );
  }
}
