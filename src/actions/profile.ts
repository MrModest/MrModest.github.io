import * as api from '../api';
import Profile from '../entities/Profile';

export const FETCH_PROFILES = 'FETCH_PROFILES';
export const EDIT_PROFILE = 'EDIT_PROFILE';


interface FetchProfilesAction {
  type: typeof FETCH_PROFILES;
  payload: Profile[];
}

interface EditProfileAction {
  type: typeof EDIT_PROFILE;
  payload: Profile;
}

export type ProfileActionType = FetchProfilesAction | EditProfileAction;


export async function fetchProfiles(): Promise<ProfileActionType> {
  return api.getProfiles()
    .then(profiles => ({
      type: FETCH_PROFILES,
      payload: profiles
    }));
}

export function editProfile(profile: Profile): ProfileActionType {
  return {
    type: EDIT_PROFILE,
    payload: profile
  };
}