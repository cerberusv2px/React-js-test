import React, { Component } from 'react';

export default class WinnerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ['A', 'B', 'C'],
      winner: '',
    };
  }

  findWinner = () => {
    this.setState({ winner: this.state.users[this.generateRandomIndex()] });
  };

  generateRandomIndex = () => {
    const max = Math.floor(this.state.users.length);
    return Math.floor(Math.random() * max);
  }

  render() {
    return (
      <div>
        <h1>Winner screen</h1>
        <input type="button" value="Winner" onClick={this.findWinner} />
        <h3>Winner is {this.state.winner}</h3>
      </div>
    );
  }
}
