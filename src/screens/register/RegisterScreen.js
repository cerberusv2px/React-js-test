import React, { Component } from 'react';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      users: [],
    };
  }

  handleAddData = () => {
    this.setState({
      users: [...this.state.users, this.state.name],
      name: '',
    });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.users.length}</h1>
        <input type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChangeName} />
        <input type="button" value="Click" onClick={this.handleAddData} />
      </div>
    );
  }
}
