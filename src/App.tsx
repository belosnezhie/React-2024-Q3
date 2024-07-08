import { Component, ReactNode } from 'react';

import './App.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.tsx';
import MainPage from './pages/MainPage.tsx';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
