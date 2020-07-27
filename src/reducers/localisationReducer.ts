import { FETCH_LOCALISATION, LocalisationLocalisationTypes } from '../actions';
import Block from '../entities/Block';

export default function blockReducer(state: Block[] = [], action: LocalisationLocalisationTypes) {
  switch (action.type) {
    case FETCH_LOCALISATION:
      return action.payload;

    default:
      return state;
  }
}