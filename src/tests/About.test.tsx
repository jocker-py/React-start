import { render, screen } from '@testing-library/react';
import About from '../pages/About';
import React from 'react';

test('render About page', () => {
  render(<About />);
  const title = screen.getByText(/About Us/i);
  expect(title).toBeInTheDocument();
});
