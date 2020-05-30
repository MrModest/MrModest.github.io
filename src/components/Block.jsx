import React from 'react';

import Card from './Card';

import '../global.css';

export default function Block(props) {
  return (
    <div class='block'>
      <h3>{props.title}</h3>
      <div class='block-container'>
        {props.cards.map(card => 
          (<Card key={card.label} {...card} />)
        )}
      </div>
    </div>
  );
}