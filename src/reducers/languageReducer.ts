import { SET_LANGUAGE, LanguageTypeActions } from '../actions';

export default function languageReducer(state: string = '', action: LanguageTypeActions){
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
}