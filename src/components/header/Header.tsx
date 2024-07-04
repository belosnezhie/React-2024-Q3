import { Component, ReactNode } from 'react';

import './Header.css';

import SearchForm from '../searchForm/SearchForm.tsx';

// interface HeaderProps {
//   classes: string;
// }

class Header extends Component {
  render(): ReactNode {
    return (
      <>
        <header className="header">
          <h1 className="header_title">Star Trek</h1>
          <SearchForm></SearchForm>
        </header>
      </>
    );
  }
}

export default Header;
