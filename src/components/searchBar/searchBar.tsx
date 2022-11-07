import React, { FC } from 'react';
import cl from './searchBar.module.css';
import { Dispatcher, DispatcherTypes } from '../../redux/interfaces';

export interface ISearchBarProps {
  state: ISearchBarState;
  dispatch: Dispatcher;
}

export interface ISearchBarState {
  title: string;
  value: string;
  type: DispatcherTypes;
}

const SearchBar: FC<ISearchBarProps> = ({ state, dispatch }) => {
  const { title, value, type } = state;
  return (
    <form className={cl.form} onSubmit={() => dispatch({ type: 'resetForm' })}>
      <h5 className={cl.form__title}>{title ? title : ''}</h5>
      <input
        type="search"
        data-testid="search"
        value={value}
        placeholder="Search..."
        onChange={(e) => dispatch({ type, value: e.target.value })}
        className={cl.form__input}
      />
    </form>
  );
};

export default SearchBar;
