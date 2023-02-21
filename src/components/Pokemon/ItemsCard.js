import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import { GetImageById, GetDescubiertoByName } from "../../functions/utils";

import { Text } from "react";

import pokemon_placeholder from "../../assets/img/pokemon-placeholder.png";



const ItemCard = ({
  name,
  description,
  route,
  rarity
}) => {

  // if (name === '????'){
  //   return(
  //     <div className={"container-info"}>
  //           <Row>
  //             <Col>
  //               <h3 className={"text-center captura-title "}>{name}</h3>
  //             </Col>
  //           </Row>
  //           <Row>
  //             <Col className="text-center mb-3">
  //             <img className="imagen-log animation-up-down"
  //             src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png"}></img>
  //             </Col>
  //           </Row>
  //           <Row>
  //             <Col>
  //               <p className="text-center">{description}</p>
  //               <p className="text-center">{'Rareza: '}&nbsp;
  //               <b className={
  //                 (rarity === 'Legendaria')?('rareza-legendaria')
  //                 :((rarity === 'Épica')?('rareza-epica')
  //                 :((rarity === 'Poco Común')?('rareza-poco-comun')
  //                 :('rareza-comun')))
  //               }>{rarity}</b></p>
  //             </Col>
  //           </Row>
  //         </div>
  //   );
  // }
  // else{
    return (
      <div className={"container-info"}>
            <Row>
              <Col>
                <h3 className={"text-center captura-title "}>{name}</h3>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mb-3">
                <img  className="imagen-log imagen-objetos" src={"/spritesObjetos/"+ name +".png"}></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-center">{description}</p>
                <p className="text-center">{'Rareza: '}&nbsp;
                <b className={
                  (rarity === 'Legendaria')?('rareza-legendaria')
                  :((rarity === 'Épica')?('rareza-epica')
                  :((rarity === 'Poco Común')?('rareza-poco-comun')
                  :('rareza-comun')))
                }>{rarity}</b></p>
              </Col>
            </Row>
          </div>
    );
  // }

};

export default ItemCard;
