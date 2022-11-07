import { CharactersItemProps, ICardItemProps } from '../config/interfaces';
import { ReRenderTree } from '../index';

export interface IAppProps {
  state: IState;
  dispatch: Dispatcher;
}

export interface IStore {
  _state: IState;
  dispatch: Dispatcher;
  getState: () => IState;
  subscribe: (observer: ReRenderTree) => void;
  _callSubscriber: ReRenderTree;
  _setCharacters: (cards: CharactersItemProps[]) => void;
  _setTotalPages: (totalPages: number) => void;
  _setIsLoading: (loading: boolean) => void;
  _resetForm: () => true;
  _updateName: (name: string) => true;
  _updateStatus: (status: string) => true;
  _updateGender: (gender: string) => true;
  _updateURL: () => true;
  _setDisableButtons: () => true;
  _changePage: (page: string) => number;
}

export interface IState {
  homePage: IHomePageState;
  aboutPage: IAboutPageState;
  notFoundPage: INotFoundPageState;
  productsPage: IProductsPageState;
  charactersPage: ICharactersPageState;
}

export interface IHomePageState {
  title: string;
  content: string;
}

export interface IHomePageProps {
  state: IHomePageState;
}

export interface IAboutPageState {
  title: string;
  content: string;
  testID: string;
}

export interface IAboutPageProps {
  state: IAboutPageState;
}

export interface INotFoundPageState {
  title: string[];
  titleID: string;
  subtitle: string;
  testID: string;
}

export interface INotFoundPageProps {
  state: INotFoundPageState;
}

export interface IProductsPageState {
  title: string;
  testID: string;
  cards: ICardItemProps[];
  isLoading: boolean;
}

export interface IProductsPageProps {
  state: IProductsPageState;
}

export interface ICharactersPageState {
  main: IMainState;
  modal: IModalState;
  sideBar: ISideBarState;
  pagination: IPaginationState;
}

export interface ICharactersPageProps {
  state: ICharactersPageState;
  dispatch: Dispatcher;
}

export interface IMainState {
  title: string;
  cards: CharactersItemProps[];
  url: string;
  isLoading: boolean;
}

export interface IModalState {
  currentId: number;
  isVisible: boolean;
}

export interface ISideBarState {
  name: {
    title: string;
    value: string;
    type: 'updateName';
  };
  status: {
    title: string;
    value: string;
    type: 'updateStatus';
    options: string[];
  };
  gender: {
    title: string;
    value: string;
    type: 'updateGender';
    options: string[];
  };
}

export interface IPaginationState {
  page: number;
  totalPages: number;
  buttons: {
    first: boolean;
    last: boolean;
    next: boolean;
    prev: boolean;
  };
}

export type Dispatcher = (action: DispatcherAction) => void;
export interface DispatcherAction {
  type: DispatcherTypes;
  value?: DispatcherValues;
}
export type DispatcherTypes =
  | 'setCharacters'
  | 'setTotalPages'
  | 'setIsLoading'
  | 'resetForm'
  | 'updateName'
  | 'updateStatus'
  | 'updateGender'
  | 'changePage';
type DispatcherValues = number | boolean | string | CharactersItemProps[];
