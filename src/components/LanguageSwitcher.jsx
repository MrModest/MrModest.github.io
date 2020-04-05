import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';

export default function LanguageSwitcher(props) {
  const setEn = () => props.setLocale('en');
  const setRu = () => props.setLocale('ru');

  return (
    <div className='lang col-md-6'>
      <div>
        <h4>{props.langCaption}</h4>
      </div>
      <div className='lang-switch en' onClick={setEn}>English</div>
      <div className='lang-switch ru' onClick={setRu}>Русский</div>
    </div>
  );
}