import React, { FC } from 'react';
import cl from './CardItem.module.css';
import CardInfo from './CardInfo';
import MyButton from './button/myButton';
import { ICardItem } from '../config/interfaces';
import CardImg from './CardImg';

const CardItem: FC<ICardItem> = ({ card }) => {
  return (
    <li className={cl.card__item} data-testid="card-item">
      <CardImg image={card.image} />
      <CardInfo card={card} />
      <MyButton>Buy</MyButton>
    </li>
  );
};

export default CardItem;
