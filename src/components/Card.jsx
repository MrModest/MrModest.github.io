import React from 'react';

import Repository from '../Repository';

import '../global.css';

export default function Card(props) {

  return (
    <a class='card' href={props.link} target='_blank' rel='noopener noreferrer'>
      <h4 class='card-title'>{props.label}</h4>
      <div class='card-body'>
        <img class='card-logo' src={Repository.getLogoFullUrl(props.logoUrl)} alt={props.name} />
        <div class='card-content'>
          <div class='card-label'>{props.fullname}</div>
          <div class='card-activity'>{props.responseTime}</div>
          <div class='card-comment'>{props.description}</div>
        </div>
      </div>
    </a>
  );
}