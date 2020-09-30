import React from "react";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav as="ul">
      <Nav.Item as="li">
        <Nav.Link>
          <Link to="/">Search</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/saved">
          <Link to="/saved">Saved</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
