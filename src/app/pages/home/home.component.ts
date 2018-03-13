import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector:    'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls:   [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  cards = [
    {
      id: 1, order: 1, name: 'Card Name 1', tasks: [
        { id: 1, order: 1, checked: false, desc: 'test check task 1' },
        { id: 2, order: 2, checked: true, desc: 'test check task 2' }
      ]
    },
    {
      id: 2, order: 2, name: 'Card Name 2', tasks: [
        { id: 1, order: 1, checked: true, desc: 'test check task 3' },
        { id: 2, order: 2, checked: false, desc: 'test check task 4' }
      ]
    }
  ];

  optionCards: SortablejsOptions = {
    onUpdate: (event: any) => {
      console.log(event);
    }
  };

  optionTasks: SortablejsOptions = {
    group:    'tasks',
    onUpdate: (event: any) => {
      console.log(event);
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
