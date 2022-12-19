import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      output: 0,
    };
  }
  onIncrement = () => {
    this.setState((prevState) => ({
      output: prevState.output + parseInt(this.props.num),
    }));
  };

  onDecrement = () => {
    if (this.state.output > 0) {
      this.setState((prevState) => ({
        output: prevState.output - parseInt(this.props.num),
      }));
    }
  };
  render() {
    return (
      <div className="counter">
        <span className="counter-output">{this.state.output}</span>

        <button className="decrement" onClick={this.onDecrement}>
          -
        </button>
        <button className="increment" onClick={this.onIncrement}>
          +
        </button>
      </div>
    );
  }
}
