import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import { CardService } from '../../models/card/card.service';
import { Card } from '../../models/card/card';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../../models/task/task';

@Component({
  selector:    'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls:   [ './home.component.scss' ],
  providers:   [ CardService ]
})
export class HomeComponent implements OnInit {
  editCardName: boolean[] = [];

  optionCards: SortablejsOptions = {};

  optionTasks: SortablejsOptions = {
    group: 'tasks'
  };

  constructor(private toastr: ToastrService,
              private cardService: CardService) {
  }

  get cards() {
    return this.cardService.getCards();
  }

  ngOnInit() {
  }

  addNewCard(): void {
    this.cardService.createCard(new Card(uuid(), 3, `Nome Card ${this.cards.length + 1}`, []));
    this.toastr.success('Novo card adicionado!', 'Sucesso!');
  }

  removeCard(id: string): void {
    this.cardService.deleteCard(id);

    this.toastr.warning('Card removido com sucesso!', 'Sucesso!');
  }

  countTask(tasks: Task[]) {
    return this.cardService.countTasks(tasks);
  }
}
