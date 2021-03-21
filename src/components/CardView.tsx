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

const CardView = ({ card: {label, logo, fullname, responseTime, link, description, id}, onCardEdit }: CardViewProps) => {
  return (
    <div className={cx('card')}>
      <div className={cx('card-header')}>
        <h4 className={cx('card-title')}>{label}</h4>
        <button type='button' onClick={() => onCardEdit(id)}>
          <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 383.947 383.947">
            <g>
              <g>
                <g>
                  <polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893"/>
                  <path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04C386.027,77.92,386.027,64.373,377.707,56.053z"/>
                </g>
              </g>
            </g>
          </svg>
        </button>
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