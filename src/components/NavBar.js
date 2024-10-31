import { useContext } from "react";
import UserContext from "../UserContext";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    const {user, setUser} = useContext(UserContext);

    return (
        <Navbar bg="primary" expand="lg" fixed="top" className="text-light">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className='text-light'>Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
                <Navbar.Collapse id="basic-navbar-nav">
                   

                    {
                        user.id !== null ?
                        <>
                            <Nav className="mx-auto" >
                                <Nav.Link className='text-light' as={NavLink} to="/workouts" exact="true">Workout</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className='text-light' as={NavLink} to="/logout" exact="true">Logout</Nav.Link>
                            </Nav>
                        </>
                        :
                        <>
                            <Nav className="ms-auto">
                                <Nav.Link className='text-light' as={NavLink} to="/login" exact="true">Login</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className='text-light' as={NavLink} to="/register" exact="true">Register</Nav.Link>
                            </Nav>
                        </>
                    }
                   
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}
