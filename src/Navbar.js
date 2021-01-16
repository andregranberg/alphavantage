import React from "react";
// react bootstrap component

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


//  import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbaraElement() {
    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Luftkvalitet-index</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Hem</Nav.Link>
            <NavDropdown title="Läs mer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">o3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">pm10</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">pm25</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">uvi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Om</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
    }
