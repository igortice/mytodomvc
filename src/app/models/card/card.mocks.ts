import { v4 as uuid } from 'uuid';
import { Card } from './card';
import { Task } from '../task/task';

export const CARD_MOCKS: Card[] = [
  new Card(uuid(), 1, 'Card Nome 1', [
    new Task(1, 1, false, 'card 1 task 1'),
    new Task(2, 2, true, 'card 1 task 2')
  ]),
  new Card(uuid(), 2, 'Card Nome 2', [
    new Task(3, 1, true, 'card 2 task 1'),
    new Task(4, 2, false, 'card 2 task 2')
  ])
];
