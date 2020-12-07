import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ brand, links, theme }) => (
  <Navbar fixed="top" bg={theme} variant={theme}>
    <Navbar.Brand>{brand}</Navbar.Brand>
    <Nav className="mr-auto">
      {links.map((link) => (
        <Nav.Link href={`#${link}`} key={`nav-link-${link}`}>
          {link}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar>
);

export default Header;
