import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponents } from './layout';
import { PagesComponents } from './pages';
import { AppRoutingModule } from './app-routing.module';
import { SortablejsModule } from 'angular-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');


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
  providers:    [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
