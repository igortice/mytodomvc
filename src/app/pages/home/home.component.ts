import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import { CardService } from '../../models/card/card.service';
import { Card } from '../../models/card/card';

@Component({
  selector:    'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls:   [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  editCardName: boolean[] = [];

  optionCards: SortablejsOptions = {};

  optionTasks: SortablejsOptions = {
    group: 'tasks'
  };

  constructor(private cardService: CardService) {}

  get cards(): Card[] {
    return this.cardService.all();
  }

  ngOnInit() { }

  createCard(): void {
    this.cardService.create();
  }

  removeCard(id: string): void {
    this.cardService.delete(id);
  }

  createTask(card: Card, descHtml: HTMLInputElement): void {
    const value = descHtml.value;
    if (value) {
      this.cardService.createTask(card, value);
      descHtml.value = '';
    }
  }

  removeTask(card: Card, taskId: string): void {
    this.cardService.deleteTask(card, taskId);
  }

  countTask(card: Card) {
    return this.cardService.countTasks(card.tasks);
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }
}
