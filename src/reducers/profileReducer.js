import { FETCH_PROFILES, EDIT_PROFILE } from '../actions';

export default function profileReducer(state = [], action){
  switch (action.type) {
    case FETCH_PROFILES:
      return action.profiles;

    case EDIT_PROFILE:
      return [
        ...state.filter(p => p.language !== action.profile.language), 
        action.profile
      ];

    default:
      return state;
  }
}