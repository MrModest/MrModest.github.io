import axios from 'axios';

import Localisation from './entities/Localisation';
import Card from './entities/Card';
import Block from './entities/Block';
import Profile from './entities/Profile';


export const langCodes = { ru: 'ru', en: 'en' }

export const rootUrl = process.env.PUBLIC_URL;
export const dataUrl = rootUrl + '/data';
export const logosUrl = dataUrl + '/logos';

export async function getLocalisation(): Promise<Localisation> {
  var resp = await axios.get(`${dataUrl}/localisation.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load localisation!");
  }
  return resp.data;
}

export async function getCards(): Promise<Card[]> {
  var resp = await axios.get(`${dataUrl}/cards.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load cards");
  }
  return resp.data;
}

export async function getBlocks(): Promise<Block[]> {
  var resp = await axios.get(`${dataUrl}/blocks.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load blocks");
  }
  return resp.data;
}

export async function getProfiles(): Promise<Profile[]> {
  var resp = await axios.get(`${dataUrl}/profiles.json`)
  if (resp.status !== 200) {
    throw new Error("Can't load profile");
  }
  return resp.data;
}

export function getLogoUrl(logoName: string): string {
  return `${logosUrl}/${logoName}`;
}

export function getDefaultLanguage(): string {
  const lang = navigator.language || navigator.userLanguage;

  return (lang.toLowerCase().match('ru') === null)
    ? 'en'
    : 'ru';
}