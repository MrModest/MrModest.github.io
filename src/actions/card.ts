import * as api from '../api';
import Card from '../entities/Card';

export const FETCH_CARDS = 'FETCH_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';


interface FetchCardsAction {
  type: typeof FETCH_CARDS;
  payload: Card[];
}

interface AddCardsAction {
  type: typeof ADD_CARD;
  payload: Card;
}

interface EditCardsAction {
  type: typeof EDIT_CARD;
  payload: Card;
}

interface DeleteCardsAction {
  type: typeof DELETE_CARD;
  payload: number;
}

export type CardActionTypes = FetchCardsAction | AddCardsAction | EditCardsAction | DeleteCardsAction;


export async function fetchCards(): Promise<CardActionTypes> {
  return api.getCards()
    .then(cards => ({
      type: FETCH_CARDS,
      payload: cards
    }));
}

export function addCard(card: Card): CardActionTypes {
  return {
    type: ADD_CARD,
    payload: card
  };
}

export function editCard(card: Card): CardActionTypes {
  return {
    type: EDIT_CARD,
    payload: card
  };
}

export function deleteCard(cardId: number): CardActionTypes {
  return {
    type: DELETE_CARD,
    payload: cardId
  };
}