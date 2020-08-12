import React from 'react';
import * as Sentry from '@sentry/react';

 class Example extends React.Component {
    state = {
      text: '',
    };
    render() {
      const { text } = this.state;
      return (
        <div>
          <button
            onClick={this.handleClick}
          >
            Hello
          </button>
          <div>{text}</div>
        </div>
      )
    }
  
    handleClick = () => {
      this.setState({
        text: 'Hello World',
      });
      try {
        throw new Error('Caught');
      } catch (err) {
        Sentry.captureException(err);
      }
    }
  }

export default Example;