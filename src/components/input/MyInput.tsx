import React, { ChangeEvent, FC, LegacyRef } from 'react';
import cl from './MyInput.module.css';

export interface MyInputProps {
  title: string;
  link: LegacyRef<HTMLInputElement>;
  notice: LegacyRef<HTMLDivElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const MyInput: FC<MyInputProps> = (props) => {
  return (
    <div className={cl.input__box}>
      <h5 className={cl.input__title}>{props.title}</h5>
      <input
        type={props.type ? props.type : 'text'}
        ref={props.link}
        className={cl.input__item}
        onChange={props.onChange}
        placeholder={props.placeholder ? props.placeholder : ''}
      />
      <div className={cl.input__notice} ref={props.notice} />
    </div>
  );
};

export default MyInput;
