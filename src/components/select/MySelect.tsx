import React, { FC, LegacyRef } from 'react';
import cl from './MySelect.module.css';

interface MySelectProps {
  link: LegacyRef<HTMLSelectElement>;
  options: Array<number | string>;
  title: string;
}

const MySelect: FC<MySelectProps> = (props) => {
  const name = props.title;
  const id = name + '-id';
  return (
    <div className={cl.select__box}>
      <h5 className={cl.select__title}>{props.title}</h5>
      <select
        name={name}
        id={id}
        ref={props.link}
        className={cl.select__item}
        defaultValue={props.options[0]}
      >
        {props.options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MySelect;
