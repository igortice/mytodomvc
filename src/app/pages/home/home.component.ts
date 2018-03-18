import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import { CardService } from '../../models/card/card.service';
import { Card } from '../../models/card/card';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

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
    const now         = Date.now();
    const pipe        = new DatePipe('pt-BR');
    const result_date = pipe.transform(now, 'short');
    this.cardService.createCard(new Card(uuid(), 3, `Card ${result_date}`, []));
    this.toastr.success('Novo card adicionado!', 'Sucesso!');
  }

  removeCard(id: string): void {
    this.cardService.deleteCard(id);

    this.toastr.warning('Card removido com sucesso!', 'Sucesso!');
  }

  countTask(card: Card) {
    return this.cardService.countTasks(card.tasks);
  }

  addNewTask(card: Card, descHtml: HTMLInputElement): void {
    const value = descHtml.value;
    if (value) {
      this.cardService.createTask(card, value);
      descHtml.value = '';
      this.toastr.success('Tarefa criada!', 'Sucesso!');
    }
  }

  removeTask(card: Card, taskId: string): void {
    this.cardService.deleteTask(card, taskId);

    this.toastr.warning('Task removido com sucesso!', 'Sucesso!');
  }


  hasCards(): boolean {
    return this.cards.length > 0;
  }
}
