import React, { FC } from 'react';
import cl from './CardList.module.css';
import { ICardItemProps, ICardListProps } from '../config/interfaces';
import CardItem from './Card/CardItem';

const CardList: FC<ICardListProps> = (props) => {
  return props.cards && props.cards.length ? (
    <ul className={cl.card__list} data-testid="card-list">
      {props.cards.map((card: ICardItemProps) => (
        <CardItem key={card.id} card={card} />
      ))}
    </ul>
  ) : (
    <h1 className={cl.title}>Products not found</h1>
  );
};

export default CardList;
