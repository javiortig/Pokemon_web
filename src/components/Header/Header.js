import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/img/logo.png";
import ball from "../../assets/img/pokeball-white.png";
import chat from "../../assets/img/chat_white.png"

// import Hamburguer from "../../components/Hamburguer/Hamburguer"
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  return (
    <div>
      <Menu>
        <a id="login" className="menu-item" href="/">Login</a>
        <a id="home" className="menu-item" href="/home">Pokedex</a>
        <a id="map" className="menu-item" href="/menu/map">Mapa</a>
        <a id="items" className="menu-item" href="/menu/items">Items</a>
        <a id="logs" className="menu-item" href="/menu/playerLogs">Registro</a>
        {/* <a id="News" className="menu-item" href="/menu/news">Noticias</a> */}
      </Menu>
      <header className="container-header mb-5">
        <Container fluid className="miContainer">



          {/* <Link className="" to="/menu/items">
              <img title="Go to Items" alt="Go to Items" src={ball} width={75} height={75} />
            </Link> */}

          <Link className="" to="/home/">
            <img title="Go to home" alt="Go to home" src={logo} />
          </Link>

          {/* <Link className="" to="/menu/playerLogs">
              <img title="Go to logs" alt="Go to logs" src={chat} width={75} height={75} />
            </Link> */}



        </Container>
      </header>
    </div>

  );
};

export default Header;
