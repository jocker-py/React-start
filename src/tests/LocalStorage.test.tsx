import products from '../config/products';
import axios from 'axios';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/searchBar/searchBar';
import React from 'react';
import { ICardItemProps } from '../config/interfaces';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test LocalStorage', () => {
  let response: { data: ICardItemProps[] };
  beforeEach(() => {
    jest.resetAllMocks();
    response = {
      data: products,
    };
  });
  const setup = () => {
    const utils = render(<SearchBar />);
    const input = screen.getByTestId('search') as HTMLInputElement;
    const form = screen.getByTestId('form') as HTMLFormElement;
    return { input, form, ...utils };
  };

  test('test default value of LocalStorage', () => {
    mockedAxios.get.mockResolvedValue(response);
    const { input } = setup();
    expect(localStorage.getItem('value')).toEqual('' || null);
    expect(input['value']).toBe('');
  });
  test('test change default value in LocalStorage', () => {
    mockedAxios.get.mockResolvedValue(response);
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'a' } });
    expect(input['value']).toBe('a');
    expect(localStorage.getItem('value')).toEqual('a');
  });
  test('test submit form', () => {
    mockedAxios.get.mockResolvedValue(response);
    const { input, form } = setup();
    fireEvent.submit(form);
    expect(input['value']).toBe('');
    expect(localStorage.getItem('value')).toEqual('');
  });
  test('test change value and submit', () => {
    mockedAxios.get.mockResolvedValue(response);
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: 'a' } });
    expect(input['value']).toBe('a');
    expect(localStorage.getItem('value')).toEqual('a');
    fireEvent.submit(form);
    expect(input['value']).toBe('');
    expect(localStorage.getItem('value')).toEqual('');
  });
});
