import React from 'react';

import CardView from './CardView';

import Block from '../entities/Block';
import {createSelectorByCurrentLanguage, useTypedSelector} from '../reducers';

import styles from './Block.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface BlockComponentProps {
  block: Block;
  onCardEdit(id: number): void;
}

const createSelector =
  (blockId: number) =>
    createSelectorByCurrentLanguage(state => state.cards.filter(c => c.blockId === blockId));

const BlockComponent = ({ block: {id, title}, onCardEdit }: BlockComponentProps) => {
  const cards = useTypedSelector(createSelector(id));

  return (
    <div className={cx('block')}>
      <h3>{title}</h3>
      <div className={cx('block-container')}>
        {cards.map(card => 
          (<CardView key={card.id} card={card} onCardEdit={onCardEdit} />)
        )}
      </div>
    </div>
  );
}

export default BlockComponent;
