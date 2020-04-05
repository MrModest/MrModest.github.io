import React from 'react';

import Card from './Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';

export default function Block(props) {
  return (
    <div className='social'>
      <h1>{props.title}</h1>
      <div className='row'>
          {props.cards.map(card => 
            (<Card key={card.label} {...card} />)
          )}
      </div>
    </div>
  );
}