import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../App";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <Navbar expand="lg" className="container">
      <Navbar.Brand href="home">
        <b>Fast-Medicine</b>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="row">
        <Nav className="mr-auto" className="col-lg-6 col-sm-12 ml-auto">
          <Nav.Link href="home" className="mx-auto">
            Home
          </Nav.Link>
          <Nav.Link href="orders" className="mx-auto">
            Orders
          </Nav.Link>
          <Nav.Link href="admin" className="mx-auto">
            Admin
          </Nav.Link>
          <Nav.Link href="deals" className="mx-auto">
            Deals
          </Nav.Link>

          <Button
            href="login"
            variant="contained"
            color="secondary"
            className="mx-auto"
          >
            {loggedInUser.displayName || "Login"}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
