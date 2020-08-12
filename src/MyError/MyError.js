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
        <h1> Clck RenderError</h1>
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
