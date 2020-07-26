import { combineReducers } from 'redux';

import cards from './cardReducer';
import blocks from './blockReducer';
import profiles from './profileReducer';
import language from './languageReducer';

const reducer = combineReducers({
  cards,
  blocks,
  profiles,
  language
});

export default reducer;