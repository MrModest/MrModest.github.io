import { combineReducers } from 'redux';

import cards from './cardReducer';
import blocks from './blockReducer';
import profiles from './profileReducer';
import language from './languageReducer';
import localisation from './localisationReducer';

import {TypedUseSelectorHook, useSelector} from "react-redux";
import {createSelector, Selector} from "reselect";

const reducer = combineReducers({
  cards,
  blocks,
  profiles,
  language,
  localisation
});

type RootState = ReturnType<typeof reducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function createSelectorByCurrentLanguage<TEntity extends { language: string }>(selector1: Selector<RootState, TEntity[]>)
{
  return createSelector<RootState, TEntity[], string, TEntity[]>(
    state => selector1(state),
    state => state.language,
    (entities, language) => entities.filter(e => e.language === language));
}

export default reducer;