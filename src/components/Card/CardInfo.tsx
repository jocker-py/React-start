import React, { FC } from 'react';
import cl from './CardItem.module.css';
import { Link } from 'react-router-dom';
import { getTitle } from '../UI/helper/helpers';
import { ICardItem } from '../../config/interfaces';
import CardStars from './CardStars';

const CardInfo: FC<ICardItem> = ({ card }: ICardItem) => {
  return (
    <div className={cl.card__info} data-testid="card-info">
      <Link to={'/products/' + card.id} className={cl.card__title}>
        {getTitle(card.title)}
      </Link>
      <hr className={cl.card__hr} />
      <h5>{card.category}</h5>
      <hr className={cl.card__hr} />
      <div>Stock: {card.rating.count}</div>
      <div>Price: {card.price}$</div>
      <CardStars rate={card.rating.rate} />
    </div>
  );
};

export default CardInfo;
