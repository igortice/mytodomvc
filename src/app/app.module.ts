import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponents } from './layout';
import { PagesComponents } from './pages';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponents,
    PagesComponents
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
