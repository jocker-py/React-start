import React, { FC } from 'react';
import MyButton from '../components/button/myButton';
import cl from './NotFound.module.css';
import { INotFoundPageProps } from '../redux/interfaces';

const NotFound: FC<INotFoundPageProps> = ({ state }) => {
  const digitsStyle = [cl.digit1, cl.digit2, cl.digit3];
  return (
    <div className={cl.container} data-testid={state.testID}>
      <div className={cl.titleBox}>
        <h1 className={cl.title}>
          {state.title.map((letter: string, index: number) => (
            <span key={index} className={digitsStyle[index]} id={state.titleID + (index + 1)}>
              {letter}
            </span>
          ))}
        </h1>
        <h3 className={cl.subtitle}>PAGE NOT FOUND</h3>
      </div>
      <MyButton>Return To Home</MyButton>
    </div>
  );
};

export default NotFound;
