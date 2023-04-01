import React, { Component } from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
// import "./Nav.css";

class Navheader extends Component {
  render() {
    return (
        <Navbar  expand="lg"bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="" style={{    fontFamily: 'Trade Winds,cursive'}}>Marieswaran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experiance">Experiance</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#feedback">FeedBack</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default Navheader;
