export const SET_LANGUAGE = 'SET_LANGUAGE';

function getDefaultLanguage() {
  const lang = navigator.language || navigator.userLanguage;

  return (lang.toLowerCase().match('ru') === null)
    ? 'en'
    : 'ru';
}

export function setDefaultLanguage() {
  return setLanguage(
    getDefaultLanguage()
  );
}

export function setLanguage(language) {
  return ({
    type: SET_LANGUAGE,
    language
  });
}