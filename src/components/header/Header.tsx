import { Component, ReactNode } from 'react';

import './Header.css';

import SearchForm from '../searchForm/SearchForm.tsx';

interface HeaderProps {
  updateCartsCallback: (searchQuery: string) => Promise<void>;
}

class Header extends Component<HeaderProps> {
  render(): ReactNode {
    return (
      <>
        <header className="header">
          <h1 className="header_title">The Star Wars Сharacters</h1>
          <SearchForm
            updateCartsCallback={async (searchQuery: string): Promise<void> => {
              await this.props.updateCartsCallback(searchQuery);
            }}
          ></SearchForm>
          <button className="throw_error_button" type="button">
            Generate error
          </button>
        </header>
      </>
    );
  }
}

export default Header;
