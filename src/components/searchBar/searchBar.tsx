import React from 'react';
import MyButton from '../button/myButton';
import cl from './searchBar.module.css';
import { ISearchBarProps, ISearchBarState } from '../../config/interfaces';

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  placeholder: string;
  constructor(props: ISearchBarProps) {
    super(props);
    this.placeholder = props.placeholder || '';
    this.state = { value: localStorage.getItem('value') || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: e.target.value });
    localStorage.setItem('value', e.target.value);
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({ value: '' });
    localStorage.setItem('value', '');
  }
  render() {
    return (
      <form className={cl.form} onSubmit={this.handleSubmit} data-testid="form">
        <input
          type="search"
          data-testid="search"
          value={this.state.value}
          placeholder={this.placeholder}
          onChange={this.handleChange}
          className={cl.form__input}
        />
        <MyButton>Search</MyButton>
      </form>
    );
  }
}

export default SearchBar;
