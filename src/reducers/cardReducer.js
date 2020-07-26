import { FETCH_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions';

export default function cardReducer(state = [], action){
  switch (action.type) {
    case FETCH_CARDS:
      return action.cards;

    case ADD_CARD:
      return [...state, action.card];

    case EDIT_CARD:
      return [...state.filter(c => c.id !== action.card.id), action.card];

    case DELETE_CARD:
      return state.filter(c => c.id !== action.cardId);

    default:
      return state;
  }
}