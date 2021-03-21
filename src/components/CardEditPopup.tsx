import React from 'react';

import Card from '../entities/Card';

import styles from './CardEdit.module.css';
import classNames from 'classnames/bind';
import Popup from "./Popup";
import CardEdit from "./CardEdit";
import {useDispatch} from "react-redux";
import {editCard} from "../actions";
import {useTypedSelector} from "../reducers";
const cx = classNames.bind(styles);

interface CardEditPopupProps {
  editingCardId: number,
  onClose(): void
}

const CardEditPopup = ({editingCardId, onClose}: CardEditPopupProps) => {
  const card = useTypedSelector(state => state.cards.filter(c => c.id === editingCardId)[0])
  const dispatch = useDispatch();

  const onEdit = (card: Card) => {
    dispatch(editCard(card));
    onClose();
  }

  return (
    <Popup onClose={onClose} className={cx('card-edit')}>
      <CardEdit card={card} onEdit={onEdit} />
    </Popup>
  );
}

export default CardEditPopup;