import React, { FC, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { ICardItemProps } from '../config/interfaces';
import axios from 'axios';
import Loader from '../components/loader/loader';

const Products: FC = () => {
  const [cards, setCards] = useState<ICardItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCards = (): void => {
      async function fetchData(): Promise<ICardItemProps[]> {
        const response = await axios.get<ICardItemProps[]>('https://fakestoreapi.com/products');
        return response.data;
      }
      fetchData()
        .then((res) => setCards(res))
        .then(() => setIsLoading(false));
    };
    fetchCards();
  }, []);
  return (
    <div data-testid="products-page">{isLoading ? <Loader /> : <CardList cards={cards} />}</div>
  );
};

export default Products;
