import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;

  return (
    <>
      <Navbar className={navBar} expand="lg">
        <Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "white" }}>
                About 
              </Nav.Link>
              <Nav.Link href="#contact" style={{ color: "white" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;