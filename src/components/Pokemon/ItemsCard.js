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

  return (
    <div className={"container-info"}>
          <Row>
            <Col>
              <h3 className={"text-center captura-title "}>{name}</h3>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <img  className="imagen-log imagen-objetos" src={"/spritesObjetos/"+ name +".png"}></img>
            </Col>
            <Col md={8}>
              <p className="text-center">{description}</p>
              <p className="text-center">{'Ruta: '}&nbsp;<b>{route}</b>{'.'}&nbsp;&nbsp;&nbsp;{'Rareza: '}&nbsp;
              <b style={(rarity == 'Poco Comn')?({color: 'lightblue'}):({color: ''})}>{rarity}</b></p>
            </Col>
          </Row>
        </div>
  );
};

export default ItemCard;
