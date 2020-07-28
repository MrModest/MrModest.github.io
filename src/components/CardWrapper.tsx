import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../reducers';
import Card from '../entities/Card';

import CardView from './CardView';
import CardEdit from './CardEdit';



const CardWrapper = (card: Card) => {
  //ToDo: swap to watch special prop
  const language = useSelector<RootState>(state => state.language);

  return language === 'en'
    ? (<CardView {...card} />)
    : (<CardEdit {...card} />);
}

export default CardWrapper;