import { FETCH_PROFILES, EDIT_PROFILE, ProfileActionType } from '../actions';
import Profile from '../entities/Profile';

export default function profileReducer(state: Profile[] = [], action: ProfileActionType){
  switch (action.type) {
    case FETCH_PROFILES:
      return action.payload;

    case EDIT_PROFILE:
      return [
        ...state.filter(p => p.language !== action.payload.language), 
        action.payload
      ];

    default:
      return state;
  }
}