import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="px-3" bg="dark" variant="dark">
          <Navbar.Brand>Job Comparison App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/jobs/new">Create New Job</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}

export default NavigationBar