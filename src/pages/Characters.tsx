import React, { FC, useEffect, useState } from 'react';
import Loader from '../components/loader/loader';
import Pagination from '../components/pagination/pagination';
import CharactersList from '../components/CharactersList';
import SideBar from '../components/sideBar/sideBar';
import Modal from '../components/modal/modal';
import axios from 'axios';
import { ICharactersPageProps } from '../redux/interfaces';

const titleStyles: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'American Typewriter',
  letterSpacing: '0.05cm',
};

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
          dispatch({ type: 'setCharacters', value: res.results });
          return res;
        })
        .then((res) => dispatch({ type: 'setTotalPages', value: res.info.pages }))
        .then(() => dispatch({ type: 'setIsLoading', value: false }))
        .catch(() => {
          dispatch({ type: 'setIsLoading', value: false });
          dispatch({ type: 'setCharacters', value: [] });
        });
    };
    fetchCharacters();
  }, [dispatch, state, url]);
  return (
    <div style={{ height: '92vh' }}>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ width: '80%', height: '100%' }}>
            <h1 style={titleStyles}>{state.main.title}</h1>
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
