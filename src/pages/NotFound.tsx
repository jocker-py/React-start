import React, { FC } from 'react';
import MyButton from '../components/button/myButton';
import cl from './NotFound.module.css';

const NotFound: FC = () => {
  return (
    <div className={cl.container} data-testid="not-found-page">
      <div className={cl.titleBox}>
        <h1 className={cl.title}>
          <span className={cl.digit1} id="digit1">
            4
          </span>
          <span className={cl.digit2} id="digit2">
            0
          </span>
          <span className={cl.digit3} id="digit3">
            4
          </span>
        </h1>
        <h3 className={cl.subtitle}>PAGE NOT FOUND</h3>
      </div>
      <MyButton>Return To Home</MyButton>
    </div>
  );
};

export default NotFound;
