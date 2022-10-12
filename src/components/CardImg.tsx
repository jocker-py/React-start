import React from 'react';
import cl from './CardItem.module.css';

const CardImg = (props: { image: string }) => {
  return (
    <div
      className={cl.card__img}
      style={{ backgroundImage: `url(${props.image})` }}
      data-testid="card-img"
    />
  );
};

export default CardImg;
