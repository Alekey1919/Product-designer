import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../images/webp/product-designer-logo.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../Firebase";

const Navbar = () => {
  let location = useLocation();

  const [user, setUser] = useState();

  // AUTH

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const handleAuthentication = () => {
    if (user && window.confirm("Are you sure you want to log out?")) {
      auth.signOut();
    }
  };

  return (
    <div>
      {location.pathname === "/login" ? null : (
        <ReactBootStrap.Navbar id="navbar-container" expand="md">
          <ReactBootStrap.Container id="inner-container" fluid="true">
            <ReactBootStrap.Navbar.Brand href="/Product-designer">
              <img src={Logo} alt="Logo" id="logo" />
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle
              aria-controls="basic-navbar-nav"
              id="burger"
            >
              <i className="fas fa-bars"></i>
            </ReactBootStrap.Navbar.Toggle>
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootStrap.Nav id="collapser" className="mr-auto">
                <Link exact to="/" className="navlink">
                  Home
                </Link>
                <Link exact to="/products" className="navlink">
                  Products
                </Link>
                <Link exact to="/design" className="navlink">
                  Design
                </Link>
                <Link exact to="/my-designs" className="navlink">
                  My Designs
                </Link>
                <Link exact to="/about" className="navlink">
                  About
                </Link>
                <Link
                  exact
                  to={!user ? "/login" : location.pathname}
                  className="navlink login"
                  onClick={handleAuthentication}
                >
                  {user ? (
                    <div className="login-logout">
                      <p>
                        Hi,
                        <small className="user-name">
                          {user?.email.substr(0, user.email.indexOf("@"))}
                        </small>
                      </p>
                      <p>Log out</p>
                    </div>
                  ) : (
                    <div className="login-logout">
                      <p>Log in</p>
                    </div>
                  )}
                </Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      )}
    </div>
  );
};

export default Navbar;
