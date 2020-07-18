import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Employees from './components/employee/Employees';
import Search from './components/employee/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    employees: [],

    filteredEmployees: [],
    loading: false,
  };



  async componentDidMount() {
    const res = await axios.get('https://randomuser.me/api?results=12');

    console.log(res.data);

    const converted = res.data.results.map((user) => {
      return {
        name: `${user.name.first} ${user.name.last}`,
        state: user.location.state,
        country: user.location.country,
        email: user.email,
        picture: user.picture.large,
      };
    });

    this.setState({
      employees: converted,
      filteredEmployees: converted,
    });
  }

  searchEmployees = (event) => {
    console.log(event.target.value);

    const filtered = this.state.employees.filter((employee) => {
      return employee.name.toLowerCase().includes(event.target.value.toLowerCase())

    })

    this.setState( {
      filteredEmployees: filtered
    });


  };

  render() {
    return (
      <div className='App'>
        <Navbar title='Employee Directory'  />
        <div className='container'>
          <Search searchEmployees={this.searchEmployees} />
          <Employees
            loading={this.state.loading}
            employees={this.state.filteredEmployees}
          />
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
