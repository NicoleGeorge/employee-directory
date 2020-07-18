import React from 'react';
import propTypes from 'prop-types';


const Navbar = ({ title }) => {
    return (
      <div className='navbar bg-primary'>
        <h1>{title}</h1>
      </div>
    );
}

Navbar.defaultProps = {
  title: 'Employee Directory',
};

Navbar.propTypes = {
  title: propTypes.string.isRequired
};


export default Navbar;
