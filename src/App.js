import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Employees from './components/employee/Employees';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    person: [],
    loading: false
  };

  async componentDidMount() {
    const res = await axios.get('https://api.randomuser.me');

    console.log(res.data);
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Employee Directory' />
        <div className='container'>
          <Employees loading={this.state.loading} person={this.state.person} />
        </div>
      </div>
    );
  }
}

// array.filter((person) => person.first_name == this.state.person);
// this.state.persons.filter((person) =>
//   person.first_name.includes(this.state.person)
// );

export default App;
