import axios from 'axios';

export const langCodes = { ru: 'ru', en: 'en' }

export const rootUrl = process.env.PUBLIC_URL;
export const dataUrl = rootUrl + '/data';
export const logosUrl = dataUrl + '/logos';

export async function getL10n(lang) {
  var resp = await axios.get(`${dataUrl}/l10n.${lang}.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load l10n!");
  }
  return resp.data;
}

export async function getCards() {
  var resp = await axios.get(`${dataUrl}/cards.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load cards");
  }
  return resp.data;
}

export async function getBlocks() {
  var resp = await axios.get(`${dataUrl}/blocks.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load blocks");
  }
  return resp.data;
}

export async function getProfile() {
  var resp = await axios.get(`${dataUrl}/profiles.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load profile");
  }
  return resp.data;
}

export function getLogoUrl(logoName) {
  return `${logosUrl}/${logoName}`;
}

export function getDefaultLanguage() {
  const lang = navigator.language || navigator.userLanguage;

  return (lang.toLowerCase().match('ru') === null)
    ? 'en'
    : 'ru';
}