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
    return (
    <div>
      {this.state.loading || !this.state.person ? (
        <div>loading...please wait </div>
      ) : (
        <div>
          <div>{ this.state.person.name.first}</div>
          <div>{ this.state.person.name.last}</div>
          <div>{ this.state.person.location.state}</div>
          <div>{ this.state.person.location.country}</div>
          <div>{ this.state.person.email}</div>
        </div>
      )}
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
