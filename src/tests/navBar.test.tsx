import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../components/router/appRouter';
import React from 'react';

describe('test Link', () => {
  test('test Products Link', () => {
    render(<App />);
    const home = screen.getByTestId('products-link');
    fireEvent.click(home);
    expect(screen.getByTestId('products-page')).toBeInTheDocument();
  });

  test('test About Link', () => {
    render(<App />);
    const about = screen.getByTestId('about-link');
    fireEvent.click(about);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('test Error 404', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
