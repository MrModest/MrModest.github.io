import React from 'react';

import * as api from '../api.js';

import '../global.css';

const Card = ({ label, logo, fullname, responseTime, link, description }) => {
  return (
    <a className='card' href={link} target='_blank' rel='noopener noreferrer'>
      <h4 className='card-title'>{label}</h4>
      <div className='card-body'>
        <img className='card-logo' src={api.getLogoUrl(logo)} alt={label} />
        <div className='card-content'>
          <div className='card-label'>{fullname}</div>
          <div className='card-activity'>{responseTime}</div>
          <div className='card-comment'>{description}</div>
        </div>
      </div>
    </a>
  );
}

export default Card;