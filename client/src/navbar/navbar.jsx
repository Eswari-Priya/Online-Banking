import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css';
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/new_registration">New User/Registration</Nav.Link>
                        <Nav.Link href="/account_creation">Account Creation</Nav.Link>
                        <Nav.Link href="/complaints">Complaints/requests</Nav.Link>
                        <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
export default Header;