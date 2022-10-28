import React, { FC } from 'react';
import cl from './searchBar.module.css';
import { ISearchBarProps } from '../../config/interfaces';

const SearchBar: FC<ISearchBarProps> = ({ title, value, setValue, setPage }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    setPage(1);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setValue('');
    setPage(1);
  };
  return (
    <form className={cl.form} onSubmit={handleSubmit} data-testid="form">
      <h5 className={cl.form__title}>{title ? title : ''}</h5>
      <input
        type="search"
        data-testid="search"
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        className={cl.form__input}
      />
    </form>
  );
};

export default SearchBar;
