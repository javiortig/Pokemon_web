import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/img/logo.png";
import ball from "../../assets/img/pokeball-white.png";

const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
        <div className="text-center">
          <Link to="/">
            <img title="Go to home" alt="Go to home" src={logo} />
          </Link>
        </div>
        <div className="text-left">
          <Link to="/playerLogs">
            <img title="Go to home" alt="Go to home" src={ball} />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
