import React, { useMemo } from 'react';
import { createSelector } from 'reselect';

import Card from './Card';

import '../global.css';
import { useSelector } from 'react-redux';
import Block from '../entities/Block';
import { RootState } from '../reducers';

const selectCardsByBlockId = (blockId: number) => 
  createSelector(
    (state: RootState) => state.cards,
    state => state.language,
    (cards, language) => cards.filter(c => c.language === language && c.blockId === blockId)
  );

const BlockComponent = ({ id, title }: Block) => {
  const cards = useSelector(
    useMemo(() => selectCardsByBlockId(id), [id])
  );

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

export default BlockComponent;