import React, { Component } from 'react';

class Employees extends Component {
  state = {
    employees: [
      {
        picture: {
          large: 'https://randomuser.me/api/portraits/women/25.jpg',
        },
      },
      {
        name: {
          first: 'Elise',
          last: 'Stephens',
        },
      },
      {
        location: {
          state: 'Western Australia',
          country: 'Australia',
        },
      },
      {
        email: 'elsie.stephens@example.com',
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.employees.map((employee) => (
          <div>
            {employee.name.first} {employee.name.last}
          </div>
        ))}
      </div>
    );
  }
}

export default Employees;
