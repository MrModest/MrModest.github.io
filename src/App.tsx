import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import LanguageSwitcher from './components/LanguageSwitcher';
import Loading from './components/Loading';
import BlockComponent from './components/BlockComponent';
import CardEditPopup from "./components/CardEditPopup";
import Footer from './components/Footer';

import { setDefaultLanguage, fetchBlocks, fetchCards, fetchProfiles } from './actions';
import {createSelectorByCurrentLanguage, useTypedSelector} from './reducers';

import styles from './App.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const selectBlocks = createSelectorByCurrentLanguage(state => state.blocks);

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

  const blocks = useTypedSelector(selectBlocks);

  const [editingCardId, setEditingCardId] = useState<number | null>(null);
  const onPopupOpen = (id: number) => {
    setEditingCardId(id);
  };
  const onPopupClose = () => setEditingCardId(null);

  return (!blocks) ? <Loading /> : (
    <React.Fragment>
      <header>
        <LanguageSwitcher />
      </header>
      <hr />
      <div className={cx('container')}>
        {blocks.map(block => 
          (<BlockComponent key={block.id} block={block} onCardEdit={onPopupOpen} />)
        )}
      </div>
      <hr />
      <Footer />
      {editingCardId && (
        <CardEditPopup editingCardId={editingCardId} onClose={onPopupClose} />
      )}
    </React.Fragment>
  );
}

export default App;
