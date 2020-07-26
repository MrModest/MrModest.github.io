import { FETCH_BLOCKS, ADD_BLOCK, EDIT_BLOCK, DELETE_BLOCK } from '../actions';

export default function cardReducer(state = [], action){
  switch (action.type) {
    case FETCH_BLOCKS:
      return action.blocks;

    case ADD_BLOCK:
      return [...state, action.block];

    case EDIT_BLOCK:
      return [...state.filter(c => c.id !== action.block.id), action.block];

    case DELETE_BLOCK:
      return state.filter(c => c.id !== action.blockId);

    default:
      return state;
  }
}