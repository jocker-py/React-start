import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import React from 'react';

describe('test NotFound page', () => {
  test('render NotFound page', () => {
    render(<NotFound />);
    const title = screen.getByText(/page not found/i);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
