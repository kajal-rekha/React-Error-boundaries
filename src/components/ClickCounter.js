import React, { Component } from "react";
import CounterWrapper from "../utls/counterWrapper";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <button onClick={this.props.clickHandaler}>Increment</button>
      </div>
    );
  }
}

export default CounterWrapper(ClickCounter);
