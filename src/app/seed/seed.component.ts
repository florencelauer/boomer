import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {

  constructor(public optionsService: OptionsService) {}

  ngOnInit(): void {}

}
