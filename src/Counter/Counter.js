import React from 'react';
import { SentryUserLog } from "../SentryConfig/SentryUserLog";
import Style from "./Counter";
import * as Sentry  from '@sentry/react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = () => {
        if (this.state.counter === 5) {
         throw new Error('I crashed!');
        }
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    handleUser = () => {
        var val = 1;
        if (val == 1) {
            const user = {
                id: "123",
                name: "arpana",
            }
            SentryUserLog("error", user);
        }
      }

    render() {
        return (
            <div>
                <h4>Click counter button</h4>
                <button onClick={this.handleClick} className={Style.btn} >counter Click</button> {this.state.counter}
                <h4>To get user information in sentry log click user Button</h4>
                <button onClick={this.handleUser} className={Style.btn}>user infor</button>
            </div>
            )
    }
}

export default Counter;