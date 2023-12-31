import React from "react";
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const NavigationBar = () =>{

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Recipe Platfom</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/add-recipe">Add Recipe</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavigationBar;