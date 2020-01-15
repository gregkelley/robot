import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  // similar to try/catch block
  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooop. Some shit up in this bitch fail.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;