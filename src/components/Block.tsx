import React, { useMemo } from 'react';
import { createSelector } from 'reselect';

import CardView from './CardView';

import { useSelector } from 'react-redux';
import Block from '../entities/Block';
import { RootState } from '../reducers';

import styles from './Block.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

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
    <div className={cx('block')}>
      <h3>{title}</h3>
      <div className={cx('block-container')}>
        {cards.map(card => 
          (<CardView key={card.id} {...card} />)
        )}
      </div>
    </div>
  );
}

export default BlockComponent;
