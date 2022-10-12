import React from 'react';
import CardItem from './CardItem';
import cl from './CardList.module.css';
import axios from 'axios';
import { ICardItemProps, ICardListProps, ICardListState } from '../config/interfaces';

class CardList extends React.Component<ICardListProps, ICardListState> {
  constructor(props: ICardListProps) {
    super(props);
    this.state = { cards: [] };
    this.fetchCards();
  }

  fetchCards(): void {
    async function fetchData(): Promise<ICardItemProps[]> {
      const response = await axios.get<ICardItemProps[]>('https://fakestoreapi.com/products');
      return response.data;
    }
    fetchData().then((res) => this.setState({ cards: res }));
  }

  createCards() {
    return this.state.cards.map((card: ICardItemProps) => <CardItem key={card.id} card={card} />);
  }

  render() {
    return (
      <ul className={cl.card__list} data-testid="card-list">
        {this.createCards()}
      </ul>
    );
  }
}
export default CardList;
