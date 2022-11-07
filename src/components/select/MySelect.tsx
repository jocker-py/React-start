import React, { FC } from 'react';
import cl from './MySelect.module.css';
import { Dispatcher, DispatcherTypes } from '../../redux/interfaces';

interface MySelectProps {
  state: MySelectState;
  dispatch: Dispatcher;
}

interface MySelectState {
  title: string;
  value: string;
  type: DispatcherTypes;
  options: Array<number | string>;
}

const MySelect: FC<MySelectProps> = ({ state, dispatch }) => {
  const { title, value, type, options } = state;
  return (
    <div className={cl.select__box}>
      <h5 className={cl.select__title}>{title}</h5>
      <select
        title={title}
        id={title + '-id'}
        value={value ? value : ''}
        className={cl.select__item}
        onChange={(e) => dispatch({ type, value: e.target.value })}
      >
        {[title, ...options].map((item, index) => {
          return (
            <option key={index} value={index === 0 ? '' : item} disabled={index === 0}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MySelect;
