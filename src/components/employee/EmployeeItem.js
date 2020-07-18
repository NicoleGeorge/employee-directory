import React, { Component } from 'react';

class EmployeeItems extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = 'https://api.randomuser.me?results=12';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.results) working!!!
    this.setState({ person: data.results[0], loading: false });
    // console.log(data.results[0]); connecting woot-woot
  }

  render() {
    const { loading, person } = this.state;

    if (loading) {
      return <div>loading eployee directory...please wait </div>;
    }

    if (!person) {
      return <div> don't have an employee available</div>;
    }

    return (
      <div className='card text-center'>
        <img
          src={person.picture.large}
          alt=''
          className='profile-pic'
          style={{ width: '120px' }}
        />
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        <h5>
          {person.location.state},{person.location.country}
        </h5>
        <div>email: {person.email}</div>
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
