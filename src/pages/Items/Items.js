import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../../components/Header/Header";
import PokeCard from "../../components/Pokemon/PokeCard";
import Search from "../../components/Others/Search";
import LoadingCard from "../../components/Loading/LoadingCard";
import Footer from "../../components/Others/Footer";
import ItemCard from "../../components/Pokemon/ItemsCard";
import api from "../../services/api";
import Colors from "../../styles/Colors";

//TODO: descargar sprites, meterlas en data y que ItemCard coja 
// la imagen y los datos por parametro parecido a los logs con 
// los estilos de PokemonCard

var itemsOriginal = [];
const perPage = 16;
const limit = 898; //default = 898
var max = 20; //num de objetos totales en el juego

function Items({ history, ...props }) {
  return (
    <div>
      <Header />
      <Container fluid className="text-light mb-4">
          <ItemCard name={"Carbón"} 
            description={"pa capturar Pokémon que estén en la hierba o por ahi tiraos"}
            route={"12"}
            rarity={"Poco Común"}>

            </ItemCard>
      </Container>
      <Footer />
    </div>

  );
}

export default Items;
