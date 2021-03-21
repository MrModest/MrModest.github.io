import { FETCH_LOCALISATION, LocalisationLocalisationTypes } from '../actions';
import Localisation from "../entities/Localisation";

export default function localisationReducer(state: Localisation = { }, action: LocalisationLocalisationTypes) {
  switch (action.type) {
    case FETCH_LOCALISATION:
      return action.payload;

    default:
      return state;
  }
}