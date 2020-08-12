import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.    
        return { hasError: true };
    }
  componentDidCatch(err, info) {
      Sentry.captureException(err); 
  }

  render() {
    console.log("this.state.hasError",this.state.hasError)
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}