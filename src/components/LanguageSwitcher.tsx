import React from 'react';
import { useDispatch } from 'react-redux';

import { setLanguage } from '../actions'

import {useTypedSelector} from '../reducers';

import styles from './LanguageSwitcher.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const setEn = () => dispatch(setLanguage('en'));
  const setRu = () => dispatch(setLanguage('ru'));

  const caption = useTypedSelector(state => state.language) === 'en' ? 'Language' : 'Язык';

  return (
    <div className={cx('lang-switcher')}>
      <h2>{caption}</h2>
      <button className={cx('lang-switch', 'en')} onClick={setEn}>English</button>
      <button className={cx('lang-switch' ,'ru')} onClick={setRu}>Русский</button>
    </div>
  )
};

export default LanguageSwitcher;