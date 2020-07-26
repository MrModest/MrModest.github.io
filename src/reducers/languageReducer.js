import { SET_LANGUAGE } from '../actions';

export default function languageReducer(state = '', action){
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;

    default:
      return state;
  }
}