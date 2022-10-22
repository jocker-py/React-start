import React, { FC } from 'react';

const titleStyles: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'American Typewriter',
  letterSpacing: '0.05cm',
};

const Home: FC = () => {
  return <h1 style={titleStyles}>Welcome to my first app on React</h1>;
};

export default Home;
