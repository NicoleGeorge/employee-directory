import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Employees from './components/employee/Employees';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Employee Directory' />
        <Employees />
      </div>
    );
  }
}

// array.filter((person) => person.first_name == this.state.person);
// this.state.persons.filter((person) =>
//   person.first_name.includes(this.state.person)
// );

export default App;
