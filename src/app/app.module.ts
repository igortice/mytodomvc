import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponents } from './layout';
import { PagesComponents } from './pages';
import { AppRoutingModule } from './app-routing.module';
import { SortablejsModule } from 'angular-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponents,
    PagesComponents
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    SortablejsModule.forRoot({ animation: 150 }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-full-width',
      easeTime:      500,
      timeOut:       1500,
      progressBar:   true
    }),
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
