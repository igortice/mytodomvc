import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';


import { AppComponent } from './app.component';
import { LayoutComponents } from './layout';
import { PagesComponents } from './pages';
import { AppRoutingModule } from './app-routing.module';
import { SortablejsModule } from 'angular-sortablejs';
import { AuthGuard } from './models/auth/auth.guard';
import { ToastrModule } from 'ngx-toastr';

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
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:    [
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
