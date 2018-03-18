import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export * from './home/home.component';
export * from './login/login.component';
export * from './not-found/not-found.component';

export const PagesComponents = [
  PagesComponent,
  HomeComponent,
  LoginComponent,
  NotFoundComponent
];
