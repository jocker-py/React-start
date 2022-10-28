import React, { FC } from 'react';
import cl from './CharacterItem.module.css';
import { CharactersItem } from '../config/interfaces';

const CharacterItem: FC<CharactersItem> = ({ card }) => {
  return (
    card && (
      <div className={cl.character__item}>
        <div className={cl.character__image} style={{ backgroundImage: `url(${card.image})` }} />
        <ul className={cl.character__info}>
          <li className={cl.character__name}>Name: {card.name}</li>
          <li>Last known location: {card.location.name}</li>
          <li>First seen in: {card.origin.name}</li>
          <li>Status: {card.status}</li>
          <li>Type: {card.type ? card.type : 'unknown'}</li>
          <li>Gender: {card.gender}</li>
        </ul>
      </div>
    )
  );
};

export default CharacterItem;
