import { FETCH_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD, CardActionTypes } from '../actions';
import Card from '../entities/Card';

export default function cardReducer(state: Card[] = [], action: CardActionTypes){
  switch (action.type) {
    case FETCH_CARDS:
      return action.payload;

    case ADD_CARD:
      return [...state, action.payload];

    case EDIT_CARD:
      return [...state.filter(c => c.id !== action.payload.id), action.payload];

    case DELETE_CARD:
      return state.filter(c => c.id !== action.payload);

    default:
      return state;
  }
}