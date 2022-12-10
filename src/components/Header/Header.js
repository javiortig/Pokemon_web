import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/img/logo.png";
import ball from "../../assets/img/pokeball-white.png";
import chat from "../../assets/img/chat_white.png"

const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid className="">
        <div className="">
          <div className="miContainer">
            <Link className="" to="/menu/items">
              <img title="Go to Items" alt="Go to Items" src={ball} width={75} height={75}/>
            </Link>

            <Link className="botonPokedex" to="/home/">
              <img title="Go to home" alt="Go to home" src={logo} />
            </Link>

            <Link className="" to="/menu/playerLogs">
              <img title="Go to logs" alt="Go to logs" src={chat} width={75} height={75}/>
            </Link>
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Header;
