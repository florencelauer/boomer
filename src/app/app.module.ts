import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
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
