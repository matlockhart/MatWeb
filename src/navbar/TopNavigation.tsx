import "./TopNavigation.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router

function TopNavigation() {
    return (
        <Navbar fixed="top" sticky="top" data-bs-theme="dark" className="Nav">
            <Container className="Navbar">
                <Container className="title">
                    <Navbar.Text>Mat Lockhart - Full Stack Developer</Navbar.Text>
                </Container>
                <Container className="links">
                    <Nav className="me-auto">
                        {/* Replace these Nav.Link components with Link components */}
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/skills" className="nav-link">
                            Skills
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </Nav>
                </Container>
            </Container>
        </Navbar>
    );
}

export default TopNavigation;
