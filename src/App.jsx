import React, { useState, useEffect } from 'react';

import Repository from './Repository'

import LanguageSwitcher from './components/LanguageSwitcher';
import Loading from './components/Loading';
import Block from './components/Block';
import Footer from './components/Footer';

import './global.css';

function App() {
  const [dataCache, setDataCache] = useState();
  const [locale, setLocale] = useState('en');
  const [localeData, setLocaleData] = useState();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setDataCache(await Repository.getData());
    };
    
    fetchData();

    setLocale(Repository.defaultLocale);

    document.title = "MrModest | Contacts";
  }, []);

  useEffect(() => {
    if (dataCache) { setLocaleData(dataCache[locale]); }
  }, [dataCache, locale]);

  const onChangeLocale = locale => setLocale(locale);

  const onEditModeChange = event => setEditMode(event.target.checked);

  return (!localeData) ? <Loading /> : (
    <React.Fragment>
      <header>
        <LanguageSwitcher langCaption = {localeData.header.langCaption} setLocale = {onChangeLocale} />
        <input type='checkbox' onChange={onEditModeChange} />
      </header>
      <hr />
      <div className='container'>
        {localeData.blocks.map(block => 
          (<Block key={block.title} editMode={editMode} {...block} />)
        )}
      </div>
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;
