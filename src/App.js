import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import EmployeeItem from './components/employee/EmployeeItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Employee Directory' />
        <EmployeeItem />
      </div>
    );
  }
}

// array.filter((person) => person.first_name == this.state.person);
// this.state.persons.filter((person) =>
//   person.first_name.includes(this.state.person)
// );

export default App;
