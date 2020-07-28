import React from 'react';

import * as api from '../api';

import Card from '../entities/Card';

import styles from './CardEdit.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CardEdit = ({ label, logo, fullname, responseTime, link, description }: Card) => {
  return (
    <div className={cx('card-edit')}>
      <div className="card-edit__logo">
        <img /*src={logoFile.path ?? defaultImage}*/ className="card-edit__logo-preview" alt='logo preview' />
        <input type='file' name='logoFile' />
      </div>
      <input className={cx('input-edit')} type='text' defaultValue={label} />
      <input className={cx('input-edit')} type='text' defaultValue={link} />
      <input className={cx('input-edit')} type='text' defaultValue={fullname} />
      <input className={cx('input-edit')} type='text' defaultValue={responseTime} />
      <textarea defaultValue={description} />
    </div>
  );
}

export default CardEdit;