import React, { FC, useState } from 'react';
import CardList from '../components/CardList';
import { ICardItemProps } from '../config/interfaces';
import CreateNewCardForm from '../components/form/CreateNewCardForm';

const NewCard: FC = () => {
  const [cards, setCards] = useState<ICardItemProps[]>([]);
  const createCard = (newCard: ICardItemProps): void => {
    setCards([...cards, newCard]);
  };
  return (
    <div>
      <CreateNewCardForm create={createCard} nextId={cards.length} />
      <CardList cards={cards} />
    </div>
  );
};

export default NewCard;
