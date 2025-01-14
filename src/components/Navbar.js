import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import Avatar from "react-avatar";
let status = "Login";
let linkto = "signin";
let user = JSON.parse(localStorage.getItem("user"));
export default function Navbr() {
  if (localStorage.getItem("loginStatus") == "true") {
    status = "Logout";
    linkto = "logout";
    console.log("loged in");
  }
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          to="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>

      <div className="shadow p-1 mb-5 bg-white rounded">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <img
              src={require("../components/logo1.jpg")}
              height="45"
              alt="Logo"
              loading="lazy"
            />
            <Link className="nav-link active" to="/">
              <Navbar.Brand style={{ fontFamily: "yellowtail" }}>
                Rent&Read
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav style={{ fontFamily: "yellowtail" }}>
                <ul className="navbar-nav ">
                  <li className="nav-item mx-auto mx-md-2">
                    <Link className="nav-link active" to="/">
                      <NavItem>
                        <i className="bi bi-house"></i> Home
                      </NavItem>
                    </Link>
                  </li>
                  <li className="nav-item mx-auto mx-md-2">
                    <Link className="nav-link active" to="/about">
                      <NavItem>
                        <i className="bi bi-info-lg"></i> About us
                      </NavItem>
                    </Link>
                  </li>
                  <li className="nav-item mx-auto mx-md-2">
                    <Link className="nav-link active" to="/books">
                      <NavItem>
                        <i className="bi bi-book"></i> Books
                      </NavItem>
                    </Link>
                  </li>
                  <li className="nav-item mx-auto mx-md-2">
                    <Link className="nav-link active" to="/authenticate">
                      <NavItem>
                        <i className="bi bi-plus"></i> Add Books
                      </NavItem>
                    </Link>
                  </li>
                  <li className="nav-item mx-auto mx-md-2">
                    <Link className="nav-link active" to="/contact">
                      <NavItem>
                        <i className="bi bi-person"></i> Contact us
                      </NavItem>
                    </Link>
                  </li>
                  {/* <li className="nav-item mx-auto mx-md-2">
                    <Link className="nav-link active" to="/login">
                      <NavItem>
                        <i className="bi bi-person-plus"></i> SignUp
                      </NavItem>
                    </Link>
                  </li> */}
                  <li className="nav-item mx-auto mx-md-2">
                    <Link className="nav-link active" to={`/${linkto}`}>
                      <NavItem>
                        <i className="bi bi-person-plus"></i> {status}
                      </NavItem>
                    </Link>
                  </li>
                  {user ? (
                    <li className="nav-item mx-auto mx-md-2">
                      <Link className="nav-link active" to="/profile">
                        <NavItem>
                          <Avatar
                            name={user ? user.username : "R  & R "}
                            round={true}
                            size="30"
                          />
                        </NavItem>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
