import React from 'react';

import Card from './Card';
import CardEdit from './CardEdit';

import '../global.css';

export default function Block(props) {
  return (
    <div className='block'>
      <h3>{props.title}</h3>
      <div className='block-container'>
        {props.editMode
        ? props.cards.map(card => 
          (<CardEdit key={card.label} {...card} />)
        )
        : props.cards.map(card => 
          (<Card key={card.label} {...card} />)
        )}
      </div>
    </div>
  );
}