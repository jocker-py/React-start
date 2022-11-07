import React, { FC } from 'react';
import cl from './CharactersList.module.css';
import { CharactersListProps } from '../config/interfaces';

const titleStyles: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'American Typewriter',
  letterSpacing: '0.05cm',
};

const CharactersList: FC<CharactersListProps> = ({
  cards,
  isVisible,
  setIsVisible,
  setCurrentId,
}) => {
  const showModal = (id: number) => {
    setIsVisible(!isVisible);
    setCurrentId(id);
  };
  return (
    <div className={cl.card__list}>
      {cards.length ? (
        cards.map((card) => (
          <div className={cl.card__item} key={card.id}>
            <div className={cl.card__link} onClick={() => showModal(card.id)}>
              <div>look more</div>
            </div>
            <div style={{ backgroundImage: `url(${card.image})` }} className={cl.card__image} />
            <p className={cl.card__name}>{card.name}</p>
          </div>
        ))
      ) : (
        <h3 style={titleStyles}>Characters not found</h3>
      )}
    </div>
  );
};

export default CharactersList;
