import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARD_MOCKS } from './card.mocks';

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
}
