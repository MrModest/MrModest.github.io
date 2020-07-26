import * as api from '../api';

export const FETCH_CARDS = 'FETCH_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export async function fetchCards() {
  return api.getCards()
    .then(cards => ({
      type: FETCH_CARDS,
      cards
    }));
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  };
}

export function editCard(card) {
  return {
    type: EDIT_CARD,
    card
  };
}

export function deleteCard(cardId) {
  return {
    type: DELETE_CARD,
    cardId
  };
}