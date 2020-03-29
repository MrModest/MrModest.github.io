import React from 'react';

import Card from './Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Block.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Block(props) {
  return (
    <div className={cx('social')}>
      <h1>{props.title}</h1>
      <div className={cx('row')}>
          {props.cards.map(card => 
            (<Card key={card.label} {...card} />)
          )}
      </div>
    </div>
  );
}