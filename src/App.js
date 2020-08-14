import React from 'react';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter"
// import Hello from "./Hello";
import MyError from "./MyError/MyError";
import MyRenderError from "./MyRenderError/MyRenderError"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ErrorBoundary>
          <MyError />
        </ErrorBoundary>
        <ErrorBoundary style={{ display: "flex", justifyContent: "center" }}>
          <MyRenderError />
        </ErrorBoundary>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
      </React.Fragment>
    )
  }
}

export default App;