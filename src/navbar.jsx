import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
class Header extends Component{
      constructor(props) {
          super(props);
      }
      render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="fa fa-globe">Nesla Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">New User/Registeration</Nav.Link>
                        <Nav.Link href="#deets">Account Creation</Nav.Link>
                        <Nav.Link href="#deets">Complaints/requests</Nav.Link>
                        <Nav.Link href="#deets">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
export default Header;