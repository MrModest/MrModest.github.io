import React, { useState, useEffect } from 'react';

import Repository from './Repository'

import LanguageSwitcher from './components/LanguageSwitcher';
import Loading from './components/Loading';
import Block from './components/Block';
import Footer from './components/Footer';

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

    document.title = "MrModest | Contacts";
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
      <Footer />
    </div>
  );
}

export default App;
