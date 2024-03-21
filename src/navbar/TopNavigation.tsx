import "./TopNavigation.css";

import { Nav, Navbar, Container } from "react-bootstrap";

function TopNavigation() {
    return (
        <Navbar fixed="top" data-bs-theme="dark" className="Nav">
            <Container className="Navbar">
                <Container className="title">
                    <Navbar.Text>Mat Lockhart - Full Stack Developer</Navbar.Text>
                </Container>
                <Container className="links">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Container>
        </Navbar>
    );
}

export default TopNavigation;
