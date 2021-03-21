import React from 'react';

import * as api from '../api';

import Card from '../entities/Card';

import styles from './CardView.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface CardViewProps {
  card: Card;
  onCardEdit(id: number): void;
}

const CardView = ({ card, onCardEdit }: CardViewProps) => {
  const {label, logo, fullname, responseTime, link, description, id} = card;

  return (
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <h4 className={cx('card-title')}>{label}</h4>
        <button type='button' onClick={() => onCardEdit(id)}>&bull;</button>
      </div>
      <a className={cx('card-body')} href={link} target='_blank' rel='noopener noreferrer'>
        <img className={cx('card-logo')} src={api.getLogoUrl(logo)} alt={label} />
        <div className={cx('card-content')}>
          <div className={cx('card-label')}>{fullname}</div>
          <div className={cx('card-activity')}>{responseTime}</div>
          <div className={cx('card-comment')}>{description}</div>
        </div>
      </a>
    </div>
  );
}

export default CardView;