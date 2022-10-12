import React, { FC } from 'react';
import cl from './CardStars.module.css';
import { ICardStars } from 'config/interfaces';

const CardStars: FC<ICardStars> = ({ rate }) => {
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className={cl.card__stars}>
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rate ? cl.card__star + ' ' + cl.active : cl.card__star}
        />
      ))}
    </div>
  );
};

export default CardStars;
