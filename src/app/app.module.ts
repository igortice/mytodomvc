import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, LayoutComponent, MainComponent } from './layout';

const LayoutComponents = [
  LayoutComponent,
  HeaderComponent,
  MainComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponents
  ],
  imports:      [
    BrowserModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
