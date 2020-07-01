import React from 'react';

import Repository from '../Repository';

import '../global.css';

export default function CardEdit(props) {

  return (
    <div className='card' href={props.link} target='_blank' rel='noopener noreferrer'>
      <div className='card-title'>
        <input className='input-edit' type='text' defaultValue={props.label} />
      </div>
      <div className='card-body'>
        <img className='card-logo' src={Repository.getLogoFullUrl(props.logoUrl)} alt={props.name} />
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