import * as api from '../api';

export const FETCH_PROFILES = 'FETCH_PROFILES';
export const EDIT_PROFILE = 'EDIT_PROFILE';

export async function fetchProfiles() {
  return api.getProfile()
    .then(profiles => ({
      type: FETCH_PROFILES,
      profiles
    }));
}

export function editProfile(profile) {
  return {
    type: EDIT_PROFILE,
    profile
  };
}