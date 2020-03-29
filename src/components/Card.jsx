import React from 'react';

import Repository from '../Repository';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Card.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Card(props) {

  return (
    <div className={cx('col-md-4')}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className={cx('card')}>
          <div className={cx('card-title')}> {props.label} </div>
          <div className={cx('card-body')}>
            <div className={cx('card-logo')}>
              <img src={Repository.getLogoFullUrl(props.logoUrl)} alt={props.name} />
            </div>
            <div className={cx('card-content')}>
              <div className={cx('card-label')}> {props.fullname} </div>
              <div className={cx('card-activity')}> {props.responseTime} </div>
              <div className={cx('card-comment')}> {props.description} </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}