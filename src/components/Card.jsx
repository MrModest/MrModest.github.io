import React from 'react';

import Repository from '../Repository';

import '../global.css';

export default function Card(props) {

  return (
    <a className='card' href={props.link} target='_blank' rel='noopener noreferrer'>
      <h4 className='card-title'>{props.label}</h4>
      <div className='card-body'>
        <img className='card-logo' src={Repository.getLogoFullUrl(props.logoUrl)} alt={props.name} />
        <div className='card-content'>
          <div className='card-label'>{props.fullname}</div>
          <div className='card-activity'>{props.responseTime}</div>
          <div className='card-comment'>{props.description}</div>
        </div>
      </div>
    </a>
  );
}