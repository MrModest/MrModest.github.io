import React, { useState, useEffect } from 'react';

import Repository from './Repository'

import LanguageSwitcher from './components/LanguageSwitcher';
import Loading from './components/Loading';
import Block from './components/Block';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

function App() {
  const [dataCache, setDataCache] = useState();
  const [locale, setLocale] = useState('en');
  const [localeData, setLocaleData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setDataCache(await Repository.getStaticData());
    };
    
    fetchData();

    const getDefaultLocale = () => {
      const lang = navigator.language || navigator.userLanguage;

      return (lang.toLowerCase().match('ru') === null)
        ? 'en'
        : 'ru';
    };

    setLocale(getDefaultLocale());
  }, []);

  useEffect(() => {
    if (dataCache) { setLocaleData(dataCache[locale]); }
  }, [dataCache, locale]);

  const onChangeLocale = locale => setLocale(locale);

  return (!localeData) ? <Loading /> : (
    <div className='wrapper'>
      <div className='content container'>
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
