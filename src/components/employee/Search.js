import React, { Component } from 'react';

export class Search extends Component {


  //   onSubmit method to search from an employee
  onSubmit = (e) => {
    e.preventDefault();

    // console.log(this.state.text);
  };

  //   search bar is writable
  onChange = (e) => this.setState({ text: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className=''></form>
        <input
          type='text'
          name='text'
          placeholder='Seatch for employee...'
          onChange={this.props.searchEmployees}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-clock'
        />
      </div>
    );
  }
}

export default Search;
