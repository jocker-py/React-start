export interface ICardItemProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface ICardItem {
  card: ICardItemProps;
}

export interface ICardListProps {
  cards?: ICardItemProps[];
}

export interface ICardListState {
  readonly cards: ICardItemProps[];
}

export interface ICardStars {
  rate: number;
}

export interface ISearchBarProps {
  placeholder?: string;
  value?: string;
}

export interface ISearchBarState {
  readonly value: string;
}
