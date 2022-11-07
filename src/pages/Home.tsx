import React, { FC } from 'react';
import { IHomePageProps } from '../redux/interfaces';

const titleStyles: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'American Typewriter',
  letterSpacing: '0.05cm',
};

const Home: FC<IHomePageProps> = ({ state }) => {
  return (
    <div>
      <h1 style={titleStyles}>{state.title}</h1>
      <h3 style={titleStyles}>{state.content}</h3>;
    </div>
  );
};

export default Home;
