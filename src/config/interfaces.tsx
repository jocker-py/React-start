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

export interface ICardStars {
  rate: number;
}

export interface ICharacterResponse {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: null | string;
  };
  results: ICharacterItem[];
}

export interface ICharacterItem {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharactersItemProps {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharactersListProps {
  cards: CharactersItemProps[];
  isVisible: boolean;
  setIsVisible: (props: boolean) => void;
  setCurrentId: (props: number) => void;
}

export interface CharactersItemProps {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharactersItem {
  card: CharactersItemProps | null;
}
