import React, { FC, useEffect, useState } from 'react';
import Loader from '../components/loader/loader';
import axios from 'axios';
import Pagination from '../components/pagination/pagination';
import CharactersList from '../components/CharactersList';
import SideBar from '../components/sideBar/sideBar';
import Modal from '../components/modal/modal';

const Characters: FC = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [currentId, setCurrentId] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [gender, setGender] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const resetForm = () => {
    setName('');
    setCurrentId(1);
    setGender(null);
    setStatus(null);
  };
  useEffect(() => {
    const urlCreator = () => {
      let baseUrl = 'https://rickandmortyapi.com/api/character';
      page && (baseUrl += '?page=' + page);
      name && (baseUrl += '&name=' + name);
      gender && (baseUrl += '&gender=' + gender);
      status && (baseUrl += '&status=' + status);
      return baseUrl;
    };
    const fetchCharacters = (): void => {
      async function fetchData() {
        const response = await axios.get(urlCreator());
        return response.data;
      }
      fetchData()
        .then((res) => {
          setCards(res.results);
          setTotalPages(res.info.pages);
        })
        .then(() => setIsLoading(false));
    };
    fetchCharacters();
  }, [page, name, gender, status]);
  return (
    <div style={{ height: '92vh' }}>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ width: '80%', height: '100%' }}>
            <Modal isVisible={isVisible} setIsVisible={setIsVisible} currentID={currentId} />
            <CharactersList
              cards={cards}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              setCurrentId={setCurrentId}
            />
            <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
          </div>
          <SideBar
            name={name}
            setName={setName}
            status={status}
            setStatus={setStatus}
            gender={gender}
            setGender={setGender}
            setPage={setPage}
            resetForm={resetForm}
          />
        </div>
      )}
    </div>
  );
};

export default Characters;
