import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponents } from './layout';


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
