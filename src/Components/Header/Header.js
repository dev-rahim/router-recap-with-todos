import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className='nav-link' to="/">Home</NavLink>
                            <NavLink className='nav-link' to="/todos">TODOS</NavLink>
                            <NavLink className='nav-link' to="birat" >
                                Link
                            </NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;