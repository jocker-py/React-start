import React, { FC } from 'react';

const titleStyles: React.CSSProperties = { textAlign: 'center', fontFamily: 'American Typewriter' };

const About: FC = () => {
  return (
    <div data-testid="about-page">
      <h1 style={titleStyles}>About Us</h1>
    </div>
  );
};

export default About;
