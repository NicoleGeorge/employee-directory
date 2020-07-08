import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div class='navbar bg-primary'>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Navbar;