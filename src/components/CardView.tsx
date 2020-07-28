import React from 'react';

import * as api from '../api';

import Card from '../entities/Card';

import styles from './CardView.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CardView = ({ label, logo, fullname, responseTime, link, description }: Card) => {
  return (
    <a className={cx('card')} href={link} target='_blank' rel='noopener noreferrer'>
      <h4 className={cx('card-title')}>{label}</h4>
      <div className={cx('card-body')}>
        <img className={cx('card-logo')} src={api.getLogoUrl(logo)} alt={label} />
        <div className={cx('card-content')}>
          <div className={cx('card-label')}>{fullname}</div>
          <div className={cx('card-activity')}>{responseTime}</div>
          <div className={cx('card-comment')}>{description}</div>
        </div>
      </div>
    </a>
  );
}

export default CardView;