import React, { FC, useEffect, useState } from 'react';
import cl from './modal.module.css';
import axios from 'axios';
import Loader from '../loader/loader';
import CharacterItem from '../CharacterItem';

interface IModalProps {
  isVisible: boolean;
  setIsVisible: (props: boolean) => void;
  currentID: number;
}

export interface CharactersItemProps {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

const Modal: FC<IModalProps> = ({ isVisible, setIsVisible, currentID }) => {
  const modalClass = isVisible ? [cl.modal, cl.active].join(' ') : cl.modal;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [card, setCard] = useState<CharactersItemProps | null>(null);
  const toggleVisible = () => setIsVisible(!isVisible);
  useEffect(() => {
    const fetchCharacter = (): void => {
      async function fetchData() {
        const response = await axios.get('https://rickandmortyapi.com/api/character/' + currentID);
        return response.data;
      }
      setIsLoading(true);
      fetchData()
        .then((card) => setCard(card))
        .then(() => setIsLoading(false));
    };
    fetchCharacter();
  }, [currentID]);
  return (
    <div className={modalClass} onClick={() => toggleVisible()}>
      <div className={cl.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={cl.modal__close} onClick={() => toggleVisible()} />
        {isLoading ? <Loader /> : <CharacterItem card={card} />}
      </div>
    </div>
  );
};

export default Modal;
