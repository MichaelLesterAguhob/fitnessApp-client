import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" fixed="top" className="text-light">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className='text-light'>Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" >
                        <Nav.Link className='text-light' as={NavLink} to="/workouts" exact="true">Workout</Nav.Link>
                    </Nav>
          
                    <Nav>
                        <Nav.Link className='text-light' as={NavLink} to="/login" exact="true">Login</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-light' as={NavLink} to="/register" exact="true">Register</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-light' as={NavLink} to="/login" exact="true">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}
