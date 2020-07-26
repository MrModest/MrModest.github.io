import React from 'react';
import { createSelector } from 'reselect';

import Card from './Card';

import '../global.css';
import { useSelector } from 'react-redux';

const Block = ({ id, title }) => {
  const selectCards = createSelector(
    state => state.cards,
    state => state.language,
    (cards, language) => cards.filter(c => c.language === language && c.blockId === id)
  );

  const cards = useSelector(selectCards);

  return (
    <div className='block'>
      <h3>{title}</h3>
      <div className='block-container'>
        {cards.map(card => 
          (<Card key={card.id} {...card} />)
        )}
      </div>
    </div>
  );
}

export default Block;