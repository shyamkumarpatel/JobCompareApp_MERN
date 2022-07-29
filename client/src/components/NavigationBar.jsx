import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="px-3" bg="dark" variant="dark">
          <Navbar.Brand>Job Comparison App</Navbar.Brand>
          <Link  to={`/`}>Home</Link>
      </Navbar>
    </div>
  )
}

export default NavigationBar