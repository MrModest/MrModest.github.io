import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLanguage } from '../actions'

import '../global.css';
import { RootState } from '../reducers';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const setEn = () => dispatch(setLanguage('en'));
  const setRu = () => dispatch(setLanguage('ru'));

  const caption = useSelector<RootState>(state => state.language) === 'en' ? 'Language' : 'Язык';

  return (
    <div className='lang-switcher'>
      <h2>{caption}</h2>
      <button className='lang-switch en' onClick={setEn}>English</button>
      <button className='lang-switch ru' onClick={setRu}>Русский</button>
    </div>
  )
};

export default LanguageSwitcher;