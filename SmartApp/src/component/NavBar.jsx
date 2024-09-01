import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styles from "./Auth.module.css"; 

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">SmartApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="tt mr-auto">
        <div className={styles.tt}>
        <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="/dashboard/videoApp">Stream</Nav.Link>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Machine Learning</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Web Development</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">DSA</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>

          </NavDropdown>
        </div>
          
        </Nav>
        <Form className="form-inline ml-auto">
            <div className={styles.form_nav}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
