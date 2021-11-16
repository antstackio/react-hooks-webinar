import React, { Component } from "react";

export default class OneClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>Welcome to React Hooks Session!</h1>
        <h3>This is the First Exercise:</h3>
        <h4>Make a basic counter, Markup is laid out, add the logic</h4>
        <div>
          <div>Count: {this.state.count} </div>
          <button onClick={this.incrementCount}>Click Me!</button>
        </div>
      </div>
    );
  }
}
