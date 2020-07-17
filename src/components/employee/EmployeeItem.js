import React, { Component } from 'react';

class EmployeeItems extends Component {
  state = {
      loading: true,
      person: null
    }
  
    async componentDidMount() {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.results) working!!!
      this.setState({ person: data.results[0], loading: false }) 
      // console.log(data.results[0]); connecting
    }

  render() {

    if (this.state.loading) {
      return <div>loading...please wait </div>
    }

    if (!this.state.person) {
      return <div> don't have an employee available</div>
    }

    return (
      <div>
          <img src = { this.state.person.picture.large} alt = ''/>
          <div>{ this.state.person.name.first} { this.state.person.name.last}</div>
          <div>{ this.state.person.location.state}, { this.state.person.location.country} </div>
          <div>email: { this.state.person.email}</div>
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
