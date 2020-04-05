import React from 'react';

import Repository from '../Repository';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';

export default function Card(props) {

  return (
    <div className='col-md-4'>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className='card'>
          <div className='card-title'> {props.label} </div>
          <div className='card-body'>
            <div className='card-logo'>
              <img src={Repository.getLogoFullUrl(props.logoUrl)} alt={props.name} />
            </div>
            <div className='card-content'>
              <div className='card-label'> {props.fullname} </div>
              <div className='card-activity'> {props.responseTime} </div>
              <div className='card-comment'> {props.description} </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}