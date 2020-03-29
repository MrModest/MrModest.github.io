import React, { useState, useEffect } from 'react';

import Repository from './Repository'

import LanguageSwitcher from './components/LanguageSwitcher';
import Loading from './components/Loading';
import Block from './components/Block';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function App() {
  const [dataCache, setDataCache] = useState();
  const [locale, setLocale] = useState('en');
  const [localeData, setLocaleData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setDataCache(await Repository.getStaticData());
    };
    
    fetchData();

    const setDefaultLocale = () => {
      const lang = navigator.language || navigator.userLanguage;

      if (lang.toLowerCase().match('ru') === null) {
        setLocale('en');
      } else {
        setLocale('ru');
      }
    };

    setDefaultLocale();
  }, []);

  useEffect(() => {
    if (dataCache) { setLocaleData(dataCache[locale]); }
  }, [dataCache, locale]);

  const onChangeLocale = (langCode) => {
    setLocale(langCode);
  };

  return (!localeData) ? <Loading /> : (
    <div className={cx('wrapper')}>
      <div className={cx('content', 'container')}>
        <LanguageSwitcher langCaption = {localeData.header.langCaption} setLocale = {onChangeLocale} />
        <br /> <hr />
        {localeData.blocks.map(block => 
          (<Block key={block.title} {...block} />)
        )}
      </div>
    </div>
  );
}

export default App;
