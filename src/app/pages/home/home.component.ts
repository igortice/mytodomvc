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
  editCardName: boolean[]      = [];
  cards: Card[]                = [];
  loadingCards                 = false;
  loadingCreateCard            = false;
  loadingRemoveCard: boolean[] = [];


  optionCards: SortablejsOptions = {};

  optionTasks: SortablejsOptions = {
    group: 'tasks'
  };

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.loadingCards = true;

    this.cardService.all().subscribe(
      result => this.cards = result,
      error => error,
      () => this.loadingCards = false
    );
  }

  createCard(): void {
    this.loadingCreateCard = true;

    this.cardService.create().subscribe(
      result => this.cards = result.cards,
      error => error,
      () => this.loadingCreateCard = false
    );
  }

  removeCard(id: string, index: number): void {
    this.loadingRemoveCard[ index ] = true;

    this.cardService.delete(id).subscribe(
      result => this.cards = result.cards,
      error => error,
      () => this.loadingRemoveCard[ index ] = false
    );
  }

  createTask(card: Card, input: HTMLInputElement): void {
    const taskValue = ( <HTMLInputElement>input ).value;
    if (taskValue) {
      this.cardService.createTask(card, taskValue);
      input.value = '';
    }
  }

  removeTask(card: Card, taskId: string): void {
    this.cardService.deleteTask(card, taskId);
  }

  countTask(card: Card): { ativo: number, inativo: number } {
    return this.cardService.countTasks(card);
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }
}
