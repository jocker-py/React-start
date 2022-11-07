import { ActionCreator, DispatcherAction, IStore } from './interfaces';
import { ReRenderTree } from '../index';

const SET_TOTAL_PAGES = 'setTotalPages';
const SET_CHARACTERS = 'setCharacters';
const SET_IS_LOADING = 'setIsLoading';
const CHANGE_PAGE = 'changePage';
const RESET_FORM = 'resetForm';
const UPDATE_NAME = 'updateName';
const UPDATE_STATUS = 'updateStatus';
const UPDATE_GENDER = 'updateGender';

export const store: IStore = {
  _state: {
    aboutPage: {
      title: 'About Us',
      content: 'This page contain info about us',
      testID: 'about-page',
    },
    charactersPage: {
      main: {
        title: 'Characters',
        cards: [],
        url: 'https://rickandmortyapi.com/api/character',
        isLoading: true,
      },
      pagination: {
        page: 1,
        totalPages: 1,
        buttons: {
          first: true,
          last: false,
          next: false,
          prev: true,
        },
      },
      sideBar: {
        name: {
          title: 'Name',
          value: '',
          type: UPDATE_NAME,
        },
        status: {
          title: 'Status',
          value: '',
          type: UPDATE_STATUS,
          options: ['alive', 'dead', 'unknown'],
        },
        gender: {
          title: 'Gender',
          value: '',
          type: UPDATE_GENDER,
          options: ['male', 'female', 'unknown', 'genderless'],
        },
      },
      modal: {
        currentId: 1,
        isVisible: false,
      },
    },
    homePage: { title: 'Home', content: 'Welcome to my first app on React' },
    notFoundPage: {
      title: '404'.split(''),
      titleID: 'digit',
      subtitle: 'PAGE NOT FOUND',
      testID: 'not-found-page',
    },
    productsPage: { title: 'Products', testID: 'products-page', cards: [], isLoading: true },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer: ReRenderTree) {
    this._callSubscriber = observer;
  },
  _setCharacters(cards) {
    return (this._state.charactersPage.main.cards = [...cards]);
  },
  _setTotalPages(totalPages) {
    return (this._state.charactersPage.pagination.totalPages = totalPages);
  },
  _setIsLoading(loading) {
    return (this._state.charactersPage.main.isLoading = loading);
  },
  _resetForm() {
    this._state.charactersPage.sideBar.name.value = '';
    this._state.charactersPage.sideBar.status.value = '';
    this._state.charactersPage.sideBar.gender.value = '';
    return true;
  },
  _updateName(name) {
    this._state.charactersPage.sideBar.name.value = name;
    this._state.charactersPage.pagination.page = 1;
    return true;
  },
  _updateStatus(status) {
    this._state.charactersPage.sideBar.status.value = status;
    this._state.charactersPage.pagination.page = 1;
    return true;
  },
  _updateGender(gender) {
    this._state.charactersPage.sideBar.gender.value = gender;
    this._state.charactersPage.pagination.page = 1;
    return true;
  },
  _updateURL() {
    let baseUrl = 'https://rickandmortyapi.com/api/character';
    const page = this._state.charactersPage.pagination.page;
    const name = this._state.charactersPage.sideBar.name.value;
    const gender = this._state.charactersPage.sideBar.gender.value;
    const status = this._state.charactersPage.sideBar.status.value;
    page && (baseUrl += '?page=' + page);
    name && (baseUrl += '&name=' + name);
    gender && (baseUrl += '&gender=' + gender);
    status && (baseUrl += '&status=' + status);
    this._state.charactersPage.main.url = baseUrl;
    return true;
  },
  _setDisableButtons() {
    const page = this._state.charactersPage.pagination.page;
    const totalPages = this._state.charactersPage.pagination.totalPages;
    const buttons = this._state.charactersPage.pagination.buttons;
    buttons.first = page === 1;
    buttons.next = page >= totalPages;
    buttons.prev = page === 1;
    buttons.last = page >= totalPages;
    return true;
  },
  _changePage(page) {
    let currentPage: number = this._state.charactersPage.pagination.page;
    const totalPages: number = this._state.charactersPage.pagination.totalPages;
    switch (page) {
      case 'first':
        return (currentPage = 1);
      case 'prev':
        return (currentPage -= 1);
      case 'next':
        return (currentPage += 1);
      case 'last':
        return (currentPage = totalPages);
      default:
        return (currentPage = parseInt(page, 10));
    }
  },
  dispatch(action: DispatcherAction): void {
    const { type, value } = action;
    switch (type) {
      case SET_TOTAL_PAGES:
        typeof value === 'number' && this._setTotalPages(value);
        break;
      case SET_IS_LOADING:
        this._setIsLoading(!!value);
        break;
      case SET_CHARACTERS:
        Array.isArray(value) && this._setCharacters(value);
        break;
      case UPDATE_NAME:
        typeof value === 'string' && this._updateName(value) && this._updateURL();
        break;
      case UPDATE_STATUS:
        typeof value === 'string' && this._updateStatus(value) && this._updateURL();
        break;
      case UPDATE_GENDER:
        typeof value === 'string' && this._updateGender(value) && this._updateURL();
        break;
      case CHANGE_PAGE:
        typeof value === 'string' &&
          this._changePage(value) &&
          this._updateURL() &&
          this._setDisableButtons();
        break;
      case RESET_FORM:
        this._resetForm() && this._updateURL();
        break;
    }
    return this._callSubscriber(this._state);
  },
};

export const setCharactersActionCreator: ActionCreator = (value) => ({
  type: SET_CHARACTERS,
  value,
});
export const setTotalPagesActionCreator: ActionCreator = (value) => ({
  type: SET_TOTAL_PAGES,
  value: value,
});
export const setIsLoadingActionCreator: ActionCreator = (value) => ({
  type: SET_IS_LOADING,
  value,
});

export const changePageActionCreator: ActionCreator = (value) => ({
  type: CHANGE_PAGE,
  value,
});

export const resetFormActionCreator: ActionCreator = () => ({
  type: RESET_FORM,
  value: '',
});

export const updateValueActionCreator: ActionCreator = (value, type) => ({
  type: type ? type : UPDATE_NAME,
  value,
});
