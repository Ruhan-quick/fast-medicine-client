import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <Navbar expand="lg" className="container">
      <Navbar.Brand as={Link} to="/home">
        <b>Fast-Medicine</b>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="row">
        <Nav className="mr-auto" className="col-lg-6 col-sm-12 ml-auto">
          <Nav.Link as={Link} to="/home" className="mx-auto">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/orders" className="mx-auto">
            Orders
          </Nav.Link>
          <Nav.Link as={Link} to="/admin" className="mx-auto">
            Admin
          </Nav.Link>
          <Nav.Link as={Link} to="/deals" className="mx-auto">
            Deals
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <Button variant="contained" color="secondary" className="mx-auto">
              {loggedInUser.displayName || "Login"}
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
