import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { DetermineGenderRate } from "../../functions/utils";

import { equiposPlayers } from "../../data/equipos";

import "./styles.css";

function getClassColorFromUserTeam(username) {
  if (username in equiposPlayers) {
    if (equiposPlayers[username] == "Magma") {
      return "container-team-magma"
    }
    else if (equiposPlayers[username] == "Aqua") {
      return "container-team-aqua"
    }
  }

  return "";
}


function pickRandomItemFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomLogText(eventName) {
  const defaultText = [
    "Después de eso se fue a tomarse una pipsa con sus mapsas.",
    "Al cabo de un rato se echó una siesta."
  ];
  const inicioText = [
    "¡Cuidado, que no os pise los talones!",
    "Os quiere reventar a todos."
  ];
  const captureText = [
    "Asegura que no fue una captura fácil.",
    "¡Utilizó por lo menos 0 pokeballs!",
    "¡Practicad bien vuestra puntería!",
    "¡Mejor que te pongas las pilas!"
  ];
  const shinyCaptureText = [
    "Un cabrón con suerte.",
    "Después de eso se dice que le vieron en el casino de ciudad Azulona.",
    "Alguien le vió poco después metiéndo todos sus ahorros al rojo en el casino de ciudad Azulona."
  ];
  const deadText = [
    "Un minuto de silencio para él.",
    "Descansa en paz, tu entrenador intentará no ser malo en los próximos combates.",
    "¡Debéis acordaros de curar a vuestros Pokémon con objetos o en un centro antes de combatir!"
  ];
  const enfrentamientoText = [
    "Ha sido una batalla épica.",
    "¡Es como si hubiesen chocado dos titanes!",
    "Sin duda no ha sido moco de pavo.",
    "¿Quién será su próxima víctima?"
  ];
  const bossText = [
    "Ha sido una batalla épica.",
    "Se ha sentido en toda la región.",
    "Ha jugado con todo lo que tenía.",
    "Algunos paisanos tuvieron que huír de los temblores que había."
  ];
  let res = "";

  switch (eventName) {
    case "Captura":
      res = pickRandomItemFromList(captureText);
      break;

    case "Muerte":
      res = pickRandomItemFromList(deadText);
      break;

    case "Inicio":
      res = pickRandomItemFromList(inicioText);
      break;

    case "Captura Shiny":
      res = pickRandomItemFromList(shinyCaptureText);
      break;

    case "Alistamiento":
      res = pickRandomItemFromList(defaultText);
      break;

    case "Enfrentamiento":
      res = pickRandomItemFromList(enfrentamientoText);
      break;

    case "Boss Battle":
      res = pickRandomItemFromList(bossText);
      break;

    default:
      res = pickRandomItemFromList(defaultText);
      break;
  }

  return res;
}

const PokeLogCards = ({
  username,
  eventName,
  pokemon,
  ruta
}) => {
  // console.log("/fotosJugadores/"+username +".jpeg");
  switch (eventName) {
    case "Captura":
      return (
        <div className={"container-info " + getClassColorFromUserTeam(username)}>
          <Row>
            <Col>
              <h3 className={"text-center captura-title "}>¡Captura!</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + username + ".jpeg"}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">El jugador <b>{username}</b> ha capturado un <u>{pokemon}</u> en {ruta}. {randomLogText(eventName)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

    case "Muerte":
      return (
        <div className={"container-info " + getClassColorFromUserTeam(username)}>
          <Row>
            <Col>
              <h3 className="text-center muerte-title ">¡Muerte!</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + username + ".jpeg"}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">Ha muerto el <u>{pokemon}</u> de <b>{username}</b> mientras ambos estaban
                en {ruta}. {randomLogText(eventName)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

    case "Inicio":
      console.log("/fotosJugadores/" + username + ".jpeg");
      return (
        <div className={"container-info " + getClassColorFromUserTeam(username)}>
          <Row>
            <Col>
              <h3 className="text-center inicio-title ">¡Inicio!</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + username + ".jpeg"}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">El jugador <b>{username}</b> se ha unido al mundo Pokémon con un <u>{pokemon}</u>. {randomLogText(eventName)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

    case "Captura Shiny":
      console.log("/fotosJugadores/" + username + ".jpeg");
      return (
        <div className={"container-info " + getClassColorFromUserTeam(username)}>
          <Row>
            <Col>
              <h3 className="text-center captura-shiny-title ">¡Captura Shiny!</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + username + ".jpeg"}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">El jugador <b>{username}</b> ha capturado un <u>{pokemon} Shiny</u> en {ruta}. {randomLogText(eventName)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

      case "Alistamiento":
      console.log("/fotosJugadores/" + username + ".jpeg");
      return (
        <div className={"container-info " + getClassColorFromUserTeam(username)}>
          <Row>
            <Col>
              <h3 className="text-center alistamiento-title ">¡Alistamiento!</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + username + ".jpeg"}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">El jugador <b>{username}</b> se ha enrolado en el team <u>{pokemon}</u>.  
              {(pokemon =='Magma')? (<i className="italic-a"> "Expandiremos la tierra, destruiremos los océanos y encontraremos la esfera roja para revivir a Groudon."</i>):
              (<i className="italic-a"> "Expandiremos los océanos, inundaremos los continentes y encontraremos la esfera azul para revivir a Kyogre."</i>)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

      case "Enfrentamiento":
      console.log("/fotosJugadores/" + username + ".jpeg");
      return (
        <div className={"container-info " + getClassColorFromUserTeam(username)}>
          <Row>
            <Col>
              <h3 className="text-center enfrentamiento-title "><u>¡Enfrentamiento!</u></h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + username + ".jpeg"}></img>
            </Col>
            <Col className="text-center mb-3">
              <img className="vs-log" src={"/vs.png"}></img>
            </Col>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + pokemon + ".jpeg"}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">El jugador <b>{username}</b> se enfrentó a <b>{pokemon}</b> en un combate, 
              en el que salió <b>{username}</b> victorioso. {randomLogText(eventName)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

      case "Boss Battle":
      console.log("/fotosJugadores/" + username + ".jpeg");
      return (
        <div className={"container-info " + getClassColorFromUserTeam(username)}>
          <Row>
            <Col>
              <h3 className="text-center boss_battle-title "><u>¡Boss Battle!</u></h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + username + ".jpeg"}></img>
            </Col>
            <Col className="text-center mb-3">
              <img className="vs-log" src={"/vs.png"}></img>
            </Col>
            <Col className="text-center mb-3">
              <img className="imagen-log" src={"/fotosJugadores/" + pokemon + ".jpeg"}></img>
            </Col>
          </Row>
          <Row>
            <Col>
            <p className="text-center"><b>{username}</b> ha derrotado al boss <b>{pokemon}</b> en un duro enfrentamiento, {randomLogText(eventName)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

    default:
      break;
  }
  return (<></>);

};

export default PokeLogCards;
