import { FETCH_BLOCKS, ADD_BLOCK, EDIT_BLOCK, DELETE_BLOCK, BlockActionTypes } from '../actions';
import Block from '../entities/Block';

export default function blockReducer(state: Block[] = [], action: BlockActionTypes) {
  switch (action.type) {
    case FETCH_BLOCKS:
      return action.payload;

    case ADD_BLOCK:
      return [...state, action.payload];

    case EDIT_BLOCK:
      return [...state.filter(c => c.id !== action.payload.id), action.payload];

    case DELETE_BLOCK:
      return state.filter(c => c.id !== action.payload);

    default:
      return state;
  }
}