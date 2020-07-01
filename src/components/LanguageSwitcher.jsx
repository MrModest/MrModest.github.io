import React from 'react';

import '../global.css';

export default function LanguageSwitcher(props) {
  const setEn = () => props.setLocale('en');
  const setRu = () => props.setLocale('ru');

  return (
    <div className='lang-switcher'>
      <h2>{props.langCaption}</h2>
      <button className='lang-switch en' onClick={setEn}>English</button>
      <button className='lang-switch ru' onClick={setRu}>Русский</button>
  </div>
  );
}