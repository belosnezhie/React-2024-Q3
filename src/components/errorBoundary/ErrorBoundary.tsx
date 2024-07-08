import React, { ErrorInfo, ReactNode } from 'react';

import FallbackUIPage from './FallbackUIPage.tsx';

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      return <FallbackUIPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
