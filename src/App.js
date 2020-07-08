import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import EmployeeItem from './components/employee/EmployeeItem';
import './App.css';

class App extends Component {
  state = {
    pictures: [],
  };

  //API call
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=12')
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let pictures = data.results.map((person) => {
          return (
            <div>
              <img src={person.picture.large} />
              <p>{person.email}</p>
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log(this.state.pictures);
      });
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Employee Directory' />
        <EmployeeItem />
      </div>
    );
  }
}

export default App;
