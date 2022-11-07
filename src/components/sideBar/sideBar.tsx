import React, { FC } from 'react';
import SearchBar from '../searchBar/searchBar';
import cl from './sideBar.module.css';
import MySelect from '../select/MySelect';
import MyButton from '../button/myButton';
import { ISideBarProps } from '../../redux/interfaces';

const SideBar: FC<ISideBarProps> = ({ state, dispatch }) => {
  const { name, status, gender } = state;
  return (
    <div className={cl.sideBar}>
      <SearchBar state={name} dispatch={dispatch} />
      <MySelect state={status} dispatch={dispatch} />
      <MySelect state={gender} dispatch={dispatch} />
      <MyButton onClick={() => dispatch({ type: 'resetForm' })}>Reset</MyButton>
    </div>
  );
};

export default SideBar;
