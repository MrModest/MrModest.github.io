export interface LocalisationKeyValue {
  [key: string]: string
}

interface Localisation {
  [language: string]: LocalisationKeyValue
}

export default Localisation;