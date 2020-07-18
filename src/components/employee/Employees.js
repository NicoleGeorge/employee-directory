import React, { Component } from 'react';
import EmployeeItems from './EmployeeItem';

class Employees extends Component {


  render() {
    return (
      <div style = {employeeStyle}>
        {this.props.employees.map((employee) => (
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
