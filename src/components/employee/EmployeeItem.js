import React, { Component } from 'react';

class EmployeeItems extends Component {

  render() {

    return (
      <div className='card text-center'>
        <img
          src={this.props.employee.picture}
          alt=''
          className='profile-pic'
          style={{ width: '120px' }}
        />
        <h3>
          {this.props.employee.name}
        </h3>
        <h5>
          {this.props.employee.state}, {this.props.employee.country}
        </h5>
        <div>email: {this.props.employee.email}</div>
      </div>
    );
  }
}

export default EmployeeItems;

// state = {
//   pictures: [],
// };

//API call
// componentDidMount();
// {
//   fetch('https://randomuser.me/api/?results=12')
//     .then((results) => {
//       return results.json();
//     })
//     .then((data) => {
//       let pictures = data.results.map((person) => {
//         return (
//           <div>
//             <img src={person.picture.large} />
//             <p>{person.email}</p>
//           </div>
//         );
//       });
//       this.setState({ pictures: pictures });
//       console.log(this.state.pictures);
//     });
//   ;
// }

// export default EmployeeItems;
