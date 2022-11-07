import React, { FC } from 'react';
import Search from '../search/MySearch';
import cl from './sideBar.module.css';
import MySelect from '../select/MySelect';
import MyButton from '../button/myButton';
import { ISideBarProps } from '../../redux/interfaces';
import { resetFormActionCreator } from '../../redux/state';

const SideBar: FC<ISideBarProps> = ({ state, dispatch }) => {
  const { name, status, gender } = state;
  return (
    <div className={cl.sideBar}>
      <Search state={name} dispatch={dispatch} />
      <MySelect state={status} dispatch={dispatch} />
      <MySelect state={gender} dispatch={dispatch} />
      <MyButton onClick={() => dispatch(resetFormActionCreator(''))}>Reset</MyButton>
    </div>
  );
};

export default SideBar;
