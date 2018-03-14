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
        { id: 1, order: 1, checked: false, desc: 'card 1 task 1' },
        { id: 2, order: 2, checked: true, desc: 'card 1 task 2' }
      ]
    },
    {
      id: 2, order: 2, name: 'Card Name 2', tasks: [
        { id: 1, order: 1, checked: true, desc: 'card 2 task 1' },
        { id: 2, order: 2, checked: false, desc: 'card 2 task 2' }
      ]
    }
  ];

  optionCards: SortablejsOptions = {};

  optionTasks: SortablejsOptions = {
    group: 'tasks'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
