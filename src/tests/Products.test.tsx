import { act, render, screen } from '@testing-library/react';
import CardList from '../components/CardList';
import axios from 'axios';
import products from '../config/products';
import Products from '../pages/Products';
import React from 'react';
import { ICardItemProps } from '../config/interfaces';
import CardItem from '../components/CardItem';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test Products page', () => {
  let response: { data: ICardItemProps[] };
  beforeEach(() => {
    jest.resetAllMocks();
    response = {
      data: products,
    };
  });
  test('render Products page', async () => {
    mockedAxios.get.mockResolvedValue(response);
    await act(async (): Promise<void> => {
      render(<Products />);
    });
    const page = await screen.findByTestId('products-page');
    const title = screen.getByText(/Products/i);
    const btn = screen.getByText(/Search/i);
    const input = screen.getByPlaceholderText(/Введите значение/i);
    const value = screen.getByDisplayValue('');
    expect(page).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
  test('render CardList', async () => {
    mockedAxios.get.mockResolvedValue(response);
    await act(async (): Promise<void> => {
      render(<CardList />);
    });
    const cardItems = await screen.findAllByTestId('card-item');
    const cardList = await screen.findByTestId('card-list');
    expect(axios.get).toBeCalledTimes(1);
    expect(cardItems.length).toBe(20);
    expect(cardList).toBeInTheDocument();
    expect(cardList).toHaveClass('card__list');
  });
  test('render CardItem', async () => {
    mockedAxios.get.mockResolvedValue(response);
    const card = response.data;
    render(<CardItem card={card[0]} />);
    const item = await screen.findAllByTestId('card-item');
    const img = await screen.findByTestId('card-img');
    const info = await screen.findByTestId('card-info');
    expect(item.length).toBe(1);
    expect(img).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });
});
