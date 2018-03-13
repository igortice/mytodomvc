import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector:    'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls:   [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  title = environment.system.title;

  constructor() { }

  ngOnInit() {
  }

}
