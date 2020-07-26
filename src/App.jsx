import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import LanguageSwitcher from './components/LanguageSwitcher';
import Loading from './components/Loading';
import Block from './components/Block';
import Footer from './components/Footer';

import './global.css';

import { setDefaultLanguage, fetchBlocks, fetchCards, fetchProfiles } from './actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlocks());
    dispatch(fetchCards());
    dispatch(fetchProfiles());

    dispatch(setDefaultLanguage());

    document.title = "MrModest | Contacts";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectBlocks = createSelector(
    state => state.blocks,
    state => state.language,
    (blocks, language) => blocks.filter(b => b.language === language)
  );

  const blocks = useSelector(selectBlocks);

  return (!blocks) ? <Loading /> : (
    <React.Fragment>
      <header>
        <LanguageSwitcher />
      </header>
      <hr />
      <div className='container'>
        {blocks.map(block => 
          (<Block key={block.id} {...block} />)
        )}
      </div>
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;
