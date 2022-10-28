import React, { FC, LegacyRef } from 'react';
import cl from './myButtion.module.css';

interface IMyButtonProps {
  children: React.ReactNode;
  link?: LegacyRef<HTMLButtonElement>;
  disabled?: boolean;
  onClick?: () => void;
}

const MyButton: FC<IMyButtonProps> = ({ children, link, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cl.myButton}
      ref={link ? link : null}
      disabled={!!disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
