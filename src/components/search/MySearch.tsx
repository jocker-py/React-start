import React, { FC } from 'react';
import cl from './MySearch.module.css';
import { Dispatcher, DispatcherUpdateTypes } from '../../redux/interfaces';
import { updateValueActionCreator } from '../../redux/state';

export interface ISearchProps {
  state: IMySearchState;
  dispatch: Dispatcher;
}

export interface IMySearchState {
  title: string;
  value: string;
  type: DispatcherUpdateTypes;
}

const MySearch: FC<ISearchProps> = ({ state, dispatch }) => {
  const { title, value, type } = state;
  return (
    <div className={cl.search__box}>
      <h5 className={cl.search__title}>{title ? title : ''}</h5>
      <input
        type="search"
        data-testid="search"
        value={value}
        placeholder="Search..."
        onChange={(e) => dispatch(updateValueActionCreator(e.target.value, type))}
        className={cl.search__input}
      />
    </div>
  );
};

export default MySearch;
