import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navbar2() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Pokemon App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
       
      </Nav>
      
    </Navbar>
  );
}
