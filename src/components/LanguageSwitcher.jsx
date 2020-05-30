import React from 'react';

import '../global.css';

export default function LanguageSwitcher(props) {
  const setEn = () => props.setLocale('en');
  const setRu = () => props.setLocale('ru');

  return (
    <div class='lang-switcher'>
      <h2>{props.langCaption}</h2>
      <button class='lang-switch en' onClick={setEn}>English</button>
      <button class='lang-switch ru' onClick={setRu}>Русский</button>
  </div>
  );
}