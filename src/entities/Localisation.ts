interface LocalizationKeyValue {
  [key: string]: string
}

interface Localisation {
  [language: string]: LocalizationKeyValue
}

export default Localisation;