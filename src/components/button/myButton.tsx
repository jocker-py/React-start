import React, { FC } from 'react';
import cl from './myButtion.module.css';

interface IMyButtonProps {
  children: React.ReactNode;
}

const MyButton: FC<IMyButtonProps> = ({ children }: IMyButtonProps) => {
  return <button className={cl.myButton}>{children}</button>;
};

export default MyButton;
