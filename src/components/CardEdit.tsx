import React from 'react';

import Card from "../entities/Card";

import styles from './CardEdit.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface FormProps {
  label: { value: string };
  fullname: { value: string };
  responseTime: { value: string };
  link: { value: string };
  description: { value: string };
  language: { value: string };
  blockId: { value: number };
}

interface CardEditProps {
  card: Card;
  onEdit(card: Card): void
}

const CardEdit = ({card: {label, fullname, responseTime, link, description, language, blockId, id, logo}, onEdit}: CardEditProps) => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const cardFormData = event.target as typeof event.target & FormProps;
    onEdit({
      id: id,
      logo: logo,
      blockId: blockId,
      label: cardFormData.label.value,
      fullname: cardFormData.fullname.value,
      responseTime: cardFormData.responseTime.value,
      link: cardFormData.link.value,
      description: cardFormData.description.value,
      language: cardFormData.language.value,
    });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <table className={cx('card-edit-form')}>
        <tbody>
        <tr>
          <th>Label: </th>
          <td><input name='label' defaultValue={label} /></td>
        </tr>
        <tr>
          <th>FullName: </th>
          <td><input name='fullname' defaultValue={fullname} /></td>
        </tr>
        <tr>
          <th>ResponseTime: </th>
          <td><input name='responseTime' defaultValue={responseTime} /></td>
        </tr>
        <tr>
          <th>Link: </th>
          <td><input name='link' defaultValue={link} /></td>
        </tr>
        <tr>
          <th>Description:</th>
          <td><textarea name='description' defaultValue={description} /></td>
        </tr>
        <tr>
          <th>Language:</th>
          <td>
            <select name='language' defaultValue={language}>
              <option value='en'>English</option>
              <option value='ru'>Русский</option>
              <option value='de'>Deutsch</option>
            </select>
          </td>
        </tr>
        </tbody>
      </table>
      <button type='submit'>Save</button>
    </form>
  );
}

export default CardEdit;