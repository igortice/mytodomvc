import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARD_MOCKS } from './card.mocks';
import { Task } from '../task/task';

@Injectable()
export class CardService {
  // cards: Card[] = [];
  cards: Card[] = CARD_MOCKS;

  constructor() { }

  // GET /cards
  getCards(): Card[] {
    return this.cards;
  }

  // POST /cards
  createCard(card: Card): CardService {
    this.cards.push(card);

    return this;
  }

  // DELETE /cards/:id
  deleteCard(id: string): CardService {
    this.cards = this.cards.filter(card => card.id !== id);

    return this;
  }

  countTasks(tasks: Task[]): { ativo: number, inativo: number } {
    const quantidade_ativa   = tasks.filter(task => task.checked === true).length;
    const quantidade_inativa = tasks.filter(task => task.checked === false).length;

    return { ativo: quantidade_ativa, inativo: quantidade_inativa };
  }
}
