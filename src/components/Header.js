import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
function Header() {
    return (
        <Navbar collapseOnSelect expand='sm' bg="dark" variant="dark" fluid fixed='top'>
            <Container>
                <Navbar.Brand className="nav-l">
                    <Link to="/">CNS AAT</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-l">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/about">AboutUs</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login">Login</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/register">Register</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header