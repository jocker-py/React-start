import React, { FC } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import CardList from '../components/CardList';

const titleStyles: React.CSSProperties = { textAlign: 'center', fontFamily: 'American Typewriter' };

const Products: FC = () => {
  return (
    <div data-testid="products-page">
      <h1 style={titleStyles}>Products</h1>
      <SearchBar value="" placeholder="Введите значение" />
      <CardList />
    </div>
  );
};

export default Products;
