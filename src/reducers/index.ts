import { combineReducers } from 'redux';

import cards from './cardReducer';
import blocks from './blockReducer';
import profiles from './profileReducer';
import language from './languageReducer';
import localisation from './localisationReducer';

const reducer = combineReducers({
  cards,
  blocks,
  profiles,
  language,
  localisation
});

export type RootState = ReturnType<typeof reducer>

export default reducer;