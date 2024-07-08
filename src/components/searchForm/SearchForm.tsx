import React, { ReactNode } from 'react';

import './SearchForm.css';
import { searchQueryStorage } from '../../services/LocalStorage';

interface SearchFormProps {
  updateCartsCallback: (searchQuery: string) => Promise<void>;
}

class SearchForm extends React.Component<SearchFormProps> {
  state = {
    currentInputValue: searchQueryStorage.getSearchQuery(),
  };

  async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target: HTMLFormElement = event.target as HTMLFormElement;
    const input = target.elements[0] as HTMLInputElement;
    const searchQuery: string = input.value.trim();

    await this.props.updateCartsCallback(searchQuery);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ currentInputValue: event.target.value });
  }

  render(): ReactNode {
    return (
      <>
        <form
          className="search_form"
          onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
            await this.handleSubmit(event);
          }}
        >
          <input
            className="search_input"
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              this.handleChange(event);
            }}
            value={this.state.currentInputValue}
          ></input>
          <input className="submit_input" type="submit" value="Search"></input>
        </form>
      </>
    );
  }
}

export default SearchForm;
