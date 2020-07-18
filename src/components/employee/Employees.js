import React, { Component } from 'react';
import EmployeeItems from './EmployeeItem';

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
      <div style = {employeeStyle}>
        {this.state.employees.map((employee) => (
          <EmployeeItems key = {employee.email} employee = {employee} />
          // <div key = {employee.email}>
          //   {employee.email}
          // </div>
        ))}
      </div>
    );
  }
}

// using Grids to style

const employeeStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridgap: '1rem'
}

export default Employees;
