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
        <div>
          <div className="">
            <Link className="" to="/menu/items">
              <img title="Go to Items" alt="Go to Items" src={ball} />
            </Link>

            <Link className="botonPokedex" to="/home/">
              <img title="Go to home" alt="Go to home" src={logo} />
            </Link>

            <Link className="" to="/menu/playerLogs">
              <img title="Go to logs" alt="Go to logs" src={ball} />
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Header;
