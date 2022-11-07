import React, { FC } from 'react';
import cl from './MySelect.module.css';
import { Dispatcher, DispatcherUpdateTypes } from '../../redux/interfaces';
import { updateValueActionCreator } from '../../redux/state';

interface IMySelectProps {
  state: IMySelectState;
  dispatch: Dispatcher;
}

interface IMySelectState {
  title: string;
  value: string;
  type: DispatcherUpdateTypes;
  options: Array<number | string>;
}

const MySelect: FC<IMySelectProps> = ({ state, dispatch }) => {
  const { title, value, type, options } = state;
  return (
    <div className={cl.select__box}>
      <h5 className={cl.select__title}>{title}</h5>
      <select
        title={title}
        id={title + '-id'}
        value={value ? value : ''}
        className={cl.select__item}
        onChange={(e) => dispatch(updateValueActionCreator(e.target.value, type))}
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
