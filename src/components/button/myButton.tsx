import React, { FC, LegacyRef } from 'react';
import cl from './myButtion.module.css';

interface IMyButtonProps {
  children: React.ReactNode;
  link?: LegacyRef<HTMLButtonElement>;
  disabled?: boolean;
}

const MyButton: FC<IMyButtonProps> = ({ children, link, disabled }: IMyButtonProps) => {
  return (
    <button className={cl.myButton} ref={link ? link : null} disabled={disabled ? true : undefined}>
      {children}
    </button>
  );
};

export default MyButton;
