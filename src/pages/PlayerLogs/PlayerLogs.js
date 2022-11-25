import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LoadingDetails from "../../components/Loading/LoadingDetails";
import Header from "../../components/Header/Header";
import PokeCard from "../../components/Pokemon/PokeCard";
import PokeOverview from "../../components/Pokemon/PokeOverview";
import PokeInfo from "../../components/Pokemon/PokeInfo";
import PokeStats from "../../components/Pokemon/PokeStats";
import PokeEvolution from "../../components/Pokemon/PokeEvolution";
import Footer from "../../components/Others/Footer";
import ModalError from "../../components/Others/ModalError";
import api from "../../services/api";
import axios from "axios";
import PokeCartasFisicas from "../../components/Pokemon/PokeCartasFisicas";

import { GetDescubiertoByName, GetMyPokemonByName, GetStatsByPokemonName, GetAbilitiesByPokemonName } from "../../functions/utils";
import PokeLogCards from "../../components/Pokemon/PokeLogCard";
import { playerLogs } from "../../data/playerLogs";

function PlayerLogs() {
  var logList = []
  playerLogs.forEach(element => {
    logList.push(
    <Container fluid className="text-light mb-4">
        <PokeLogCards username={element["username"]} eventName={element["eventName"]} pokemon={element["pokemon"]} ruta={element["ruta"]}>
          
        </PokeLogCards> 
      </Container>);
  });
  return (

    <div>
      <Header></Header>
      {/* <Container fluid className="text-light mb-4">
        <PokeLogCards username={"Aurek"} eventName={"Captura"} pokemon={"Machamp"} ruta={"Ruta 22"}>
          
        </PokeLogCards> 
      </Container> */}
      {logList}
    </div>
  );
}

export default PlayerLogs;
