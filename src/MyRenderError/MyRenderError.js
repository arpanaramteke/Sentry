import React, { Component } from 'react';

export default class MyRenderError extends Component {
  state = {
    value1: "",
    value2: "",
    result: "",
    operation: "",
    getData: ""
  };

  handleFirstInputChange = (e) => {
    console.log(" e.target.value", e.target.value)
    this.setState({
      value1: e.target.value
    })

  }

  handleSecondInputChange = (e) => {
    this.setState({
      value2: e.target.value
    })
  }

  handleAddition = () => {
    const { value1, value2 } = this.state
    let getResult = parseInt(value1) + parseInt(value2);
    this.setState({
      result: getResult
    })
  }

  handleOperation = (e) => {
    this.setState({
      getData: e.target.value
    })
    localStorage.setItem('rememberMe', e.target.value);
  }

  functionAddtion=()=> {
    const { value1, value2 } = this.state
    let getResult = parseInt(value1) + parseInt(value2);
    this.setState({
      result: getResult
    })
  }

  functionMultiply=()=> {
    const { value1, value2 } = this.state
    let getResult = parseInt(value1) * parseInt(value2);
    this.setState({
      result: getResult
    })
  }

  getResult = () => {
    let valData = localStorage.getItem('rememberMe');
    var strFn = "this."+"function" + valData + "()"
    eval(strFn)
  }

  render() {
    return (
        <div>
          <h1>Please add Addtion or Multiply in Operator if you add Divide it will give error</h1>
        value1:<input type="number"  onChange={(event) => this.handleFirstInputChange(event)}></input>
        value2:<input type="number" onChange={(event) => this.handleSecondInputChange(event)}></input>
        Operation:
       <input type="text" onChange={(event) => this.handleOperation(event)}></input>
       <button onClick={() => this.getResult()}>Result</button>
       {this.state.result}
        </div>      
    )
  }


}