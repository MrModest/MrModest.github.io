import * as api from '../api';

import Localisation from "../entities/Localisation";

export const FETCH_LOCALISATION = 'FETCH_LOCALISATION';


interface FetchLocalisationAction {
  type: typeof FETCH_LOCALISATION;
  payload: Localisation;
}

export type LocalisationLocalisationTypes = FetchLocalisationAction;


export async function fetchLcalisation(): Promise<LocalisationLocalisationTypes> {
  return api.getLocalisation()
    .then(localisation => ({
      type: FETCH_LOCALISATION,
      payload: localisation
    }));
}