import React, { Component } from 'react';

export default class MyError extends Component {
  state = {
    user: ""
  };

  handleClick = () => {
    this.setState({
      user: null
    });
  }

  render() {
    const {user} = this.state;
    return (
      <div>
        <h2>ErrorBoundry called in this Click RenderError</h2>
        <button
          onClick={this.handleClick}
        >
          Render Error
        </button>
        {user.name}
      </div>
    )
  }
}
