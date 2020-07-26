import React from 'react';

import * as api from '../api.js';

import '../global.css';

export default function CardEditModal(props) {

  return (
    <div className='card' href={props.link} target='_blank' rel='noopener noreferrer'>
      <div className='card-title'>
        <input className='input-edit' type='text' defaultValue={props.label} />
      </div>
      <div className='card-body'>
        <img className='card-logo' src={api.getLogoUrl(props.logo)} alt={props.name} />
        <div className='card-content'>
          <div className='card-label'>
          <input className='input-edit' type='text' defaultValue={props.fullname} />
          </div>
          <div className='card-activity'>
            <input className='input-edit' type='text' defaultValue={props.responseTime} />
          </div>
          <div className='card-comment'>
            <textarea className='input-edit' defaultValue={props.description} />
          </div>
        </div>
      </div>
    </div>
  );
}