import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeedComponent } from './seed/seed.component';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmsComponent,
    SeedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'angularLogo', domSanitizer.bypassSecurityTrustResourceUrl('../assets/angular-logo.svg'));
    matIconRegistry.addSvgIcon(
      'githubLogo', domSanitizer.bypassSecurityTrustResourceUrl('../assets/github-logo.svg'));
    matIconRegistry.addSvgIcon(
      'pythonLogo', domSanitizer.bypassSecurityTrustResourceUrl('../assets/python-logo.svg'));
  }
}
