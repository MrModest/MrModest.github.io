import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';
import styles from './LanguageSwitcher.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function LanguageSwitcher(props) {
  const setEn = () => props.setLocale('en');
  const setRu = () => props.setLocale('ru');

  return (
    <div className={cx('lang', 'col-md-6')}>
      <div>
        <h4>{props.langCaption}</h4>
      </div>
      <div className={cx('lang-switch', 'en')} onClick={setEn}>English</div>
      <div className={cx('lang-switch', 'ru')} onClick={setRu}>Русский</div>
    </div>
  );
}