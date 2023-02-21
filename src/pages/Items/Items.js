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


import { objetos } from "../../data/objetos";
import { getUsername } from "../../functions/storage";

const ItemCard_Style = {
  margin: '1% 0% 0% 0%',
};

function sortByProperty(property){  
  return function(a,b){  
     if(a[property] > b[property])  
        return 1;  
     else if(a[property] < b[property])  
        return -1;  
 
     return 0;  
  }  
}

function Items({ history, ...props }) {
  var itemList = []
  
  var username = getUsername();

  var sortedObjetos = objetos;
  sortedObjetos.sort(sortByProperty('Nombre'));

  for (let i = 0; i < sortedObjetos.length; i++) {
    // if (sortedObjetos[i][username] === '') {
    //   itemList.push(
    //   <div style={ItemCard_Style}>
    //       <ItemCard name={'????'}
    //         description={'¡Explora la región para encontrarlo!.'}
    //         route={'????'}
    //         rarity={'?'}>
    //       </ItemCard >
    //     </div>
    //   );
    // }
    // else {
      itemList.push(
        <div style={ItemCard_Style}>
          <ItemCard name={sortedObjetos[i].Nombre}
            description={sortedObjetos[i].Descripcion}
            route={sortedObjetos[i].Ruta}
            rarity={sortedObjetos[i].Rareza}>
          </ItemCard >
        </div>
      );
    // }


  }
  return (
    <div>
      <Header />
      <Container fluid className="text-light mb-4">
        {itemList}
      </Container>
      <Footer />
    </div>

  );
}

export default Items;
