import React, { FC } from 'react';
import { IAboutPageProps } from '../redux/interfaces';

const titleStyles: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'American Typewriter',
  letterSpacing: '0.05cm',
};

const About: FC<IAboutPageProps> = ({ state }) => {
  return (
    <div data-testid={state.testID}>
      <h1 style={titleStyles}>{state.title}</h1>
      <h3 style={titleStyles}>{state.content}</h3>
    </div>
  );
};

export default About;
