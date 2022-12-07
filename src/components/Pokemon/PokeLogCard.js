import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { DetermineGenderRate } from "../../functions/utils";

import {equiposPlayers} from "../../data/equipos";

import "./styles.css";

function getClassColorFromUserTeam(username){
  if (username in equiposPlayers){
    if(equiposPlayers[username] == "Magma"){
      return "container-team-magma" 
    }
    else if(equiposPlayers[username] == "Aqua"){
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
  const captureText = [
    "Asegura que no fue una captura fácil.",
    "¡Utilizó por lo menos 0 pokeballs!",
    "¡Practicad bien vuestra puntería!",
    "¡Mejor que te pongas las pilas!"
  ];
  const deadText = [
    "Un minuto de silencio para él.",
    "Descansa en paz, tu entrenador intentará no ser malo en los próximos combates.",
    "¡Debéis acordaros de curar a vuestros Pokémon con objetos o en un centro antes de combatir!"
  ];
  let res = "";

  switch (eventName) {
    case "Captura":
      res = pickRandomItemFromList(captureText);
      break;

    case "Muerte":
      res = pickRandomItemFromList(deadText);
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
  console.log("/fotosJugadores/"+username +".jpeg");
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
            <Col md={2}>
              <img className="imagen-log" src={"/fotosJugadores/"+username +".jpeg"}></img>
            </Col>
            <Col md={8}>
              <p className="text-center">El jugador {username} ha capturado un {pokemon} en {ruta}. {randomLogText(eventName)}</p>
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
            <Col md={2}>
              <img className="imagen-log" src={"/fotosJugadores/"+username +".jpeg"}></img>
            </Col>
            <Col md={8}>
              <p className="text-center">Ha muerto el {pokemon} de {username} mientras ambos estaban
                en {ruta}. {randomLogText(eventName)}</p>
            </Col>
          </Row>
        </div>
      );
      break;

    default:
      break;
  }
  return (<></>)

};

export default PokeLogCards;
