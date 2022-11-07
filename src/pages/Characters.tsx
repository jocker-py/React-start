import React, { FC, useEffect, useState } from 'react';
import Loader from '../components/loader/loader';
import Pagination from '../components/pagination/pagination';
import CharactersList from '../components/CharactersList';
import SideBar from '../components/sideBar/sideBar';
import Modal from '../components/modal/modal';
import axios from 'axios';
import cl from './Characters.module.css';
import { ICharactersPageProps } from '../redux/interfaces';
import {
  setCharactersActionCreator,
  setIsLoadingActionCreator,
  setTotalPagesActionCreator,
} from 'redux/state';

const Characters: FC<ICharactersPageProps> = ({ state, dispatch }) => {
  const url = state.main.url;
  const cards = state.main.cards;
  const isLoading = state.main.isLoading;
  const [currentId, setCurrentId] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const fetchCharacters = (): void => {
      async function fetchData() {
        const response = await axios.get(url);
        return response.data;
      }
      fetchData()
        .then((res) => {
          dispatch(setCharactersActionCreator(res.results));
          return res;
        })
        .then((res) => dispatch(setTotalPagesActionCreator(res.totalPages)))
        .then(() => dispatch(setIsLoadingActionCreator(false)))
        .catch(() => {
          dispatch(setIsLoadingActionCreator(false));
          dispatch(setCharactersActionCreator([]));
        });
    };
    fetchCharacters();
  }, [dispatch, url, cards, isLoading]);

  return (
    <div className={cl.characters}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cl.characters__container}>
          <div className={cl.characters__list}>
            <h1 className={cl.characters__title}>{state.main.title}</h1>
            <Modal isVisible={isVisible} setIsVisible={setIsVisible} currentID={currentId} />
            <CharactersList
              cards={cards}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              setCurrentId={setCurrentId}
            />
            <Pagination state={state.pagination} dispatch={dispatch} />
          </div>
          <SideBar state={state.sideBar} dispatch={dispatch} />
        </div>
      )}
    </div>
  );
};

export default Characters;
