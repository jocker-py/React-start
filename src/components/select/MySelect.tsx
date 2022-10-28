import React, { FC } from 'react';
import cl from './MySelect.module.css';

interface MySelectProps {
  value: string | null;
  setValue: (value: string) => void;
  options: Array<number | string>;
  title: string;
}

const MySelect: FC<MySelectProps> = ({ title, options, value, setValue }) => {
  const id = title + '-id';
  const defaultOptions = [title, ...options];
  return (
    <div className={cl.select__box}>
      <h5 className={cl.select__title}>{title}</h5>
      <select
        title={title}
        id={id}
        value={value ? value : ''}
        className={cl.select__item}
        onChange={(e) => setValue(e.target.value)}
      >
        {defaultOptions.map((item, index) => {
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
