export const SET_LANGUAGE = 'SET_LANGUAGE';


interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  payload: string;
}

export type LanguageTypeActions = SetLanguageAction;


function getDefaultLanguage(): string {
  const lang = navigator.language || navigator.userLanguage;

  return (lang.toLowerCase().match('ru') === null)
    ? 'en'
    : 'ru';
}

export function setDefaultLanguage(): SetLanguageAction {
  return setLanguage(
    getDefaultLanguage()
  );
}

export function setLanguage(language: string): SetLanguageAction {
  return ({
    type: SET_LANGUAGE,
    payload: language
  });
}