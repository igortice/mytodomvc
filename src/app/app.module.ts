import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponents } from './layout';
import { PagesComponents } from './pages';
import { AppRoutingModule } from './app-routing.module';
import { SortablejsModule } from 'angular-sortablejs';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponents,
    PagesComponents
  ],
  imports:      [
    BrowserModule,
    SortablejsModule.forRoot({ animation: 150 }),
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
