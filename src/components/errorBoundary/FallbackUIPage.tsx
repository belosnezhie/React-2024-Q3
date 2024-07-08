import React from 'react';

import './FallbackUIPage.css';

class FallbackUIPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="fallbackUI_page">
        <h2>Oops! Something went wrong. Please try again later.</h2>
      </div>
    );
  }
}

export default FallbackUIPage;
