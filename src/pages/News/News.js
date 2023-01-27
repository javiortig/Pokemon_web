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
import { getUsername } from "../../functions/utils"

import "./style.css"

function News() {
  var logList = []
  playerLogs.reverse();
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
      <div className="flash-news-banner">
        <div className="container">
          <div className="d-lg-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="badge badge-dark mr-3">Kanto News</span>
              {/* <p className="mb-0">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p> */}
            </div>
            <div className="d-flex">
              <span className="mr-3 text-danger">Viernes, 13 Enero, 2023</span>
              <span className="text-danger">14°C, Ciudad Plateada</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-xl-8 stretch-card grid-margin">
              <div className="position-relative">
                <img
                  src="/news_images/police_house.jpg"
                  alt="banner"
                  className="img-fluid"
                  style={{width: 690, height: 390}}

                />
                <div className="banner-content">
                  <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                    Celeste News
                  </div>
                  <h1 className="mb-0 text-white noticias">HOMICIDIO EN VILLAESPÉNDIDA</h1>
                  <h3 className="mb-2 text-white noticias">
                    Durante la tarde de un miércoles, se ha producido un homicido en el tranquilo
                    barrio de VillaEspléndida, en Ciudad Celeste. La hija del difunto acusa a un varón alto de pelo
                    blanco de los hechos, al que conoció en el gimnasio de Misty.
                  </h3>
                  <div className="fs-12">
                    <span className="mr-2">Foto </span>Hace 3 días
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 stretch-card grid-margin">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h2 className="noticias">Últimas noticias</h2>

                  <div
                    className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                  >
                    <div className="">
                      <h5 className="noticias">Megacorp: Se busca a una mujer medio furra, un enano y un hombre hielo.</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 2 días
                      </div>
                    </div>
                    <div className="rotate-img mi-imagen">
                      <img
                        src="/news_images/fumaos.jpg"
                        alt="thumb"
                        className="img-fluid img-lg"
                      />
                    </div>
                  </div>

                  <div
                    className="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between"
                  >
                    <div className="">
                      <h5 className="noticias">
                        Homicidio a una anciana a las afueras de Ciudad Plateada.</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Fotos </span>Hace 1 semana
                      </div>
                    </div>
                    <div className="rotate-img mi-imagen">
                      <img
                        src="/news_images/senora_sombrero.jpg"
                        alt="thumb"
                        className="img-fluid img-lg"
                      />
                    </div>
                  </div>

                  <div
                    className="d-flex pt-4 align-items-center justify-content-between"
                  >
                    <div className="">
                      <h5 className="noticias">El Team Aqua gana terreno al Team Magma en la ruta 7.</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 2 semanas
                      </div>
                    </div>
                    <div className="rotate-img mi-imagen">
                      <img
                        src="/news_images/team_aqua1.jpg"
                        alt="thumb"
                        className="img-fluid img-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-3 stretch-card grid-margin">
              <div className="card">
                <div className="card-body">
                  <h2>Category</h2>
                  <ul className="vertical-menu">
                    <li><a href="#">Política</a></li>
                    <li><a href="#">Internacional</a></li>
                    <li><a href="#">Finanzas</a></li>
                    <li><a href="#">Pesca</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Trabajo</a></li>
                    <li><a href="#">Comunicación</a></li>
                    <li><a href="#">Administración</a></li>
                    <li><a href="#">Deportes</a></li>
                    <li><a href="#">Videojuegos</a></li>
                    <li><a href="#">Arte</a></li>
                    <li><a href="#">Infantil</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 stretch-card grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 grid-margin">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="/news_images/cilindros.jpg"
                            alt="thumb"
                            className="img-fluid"
                            style={{width: 196, height: 136}}
                          />
                        </div>
                        <div className="badge-positioned">
                          <span className="badge badge-danger font-weight-bold"
                          >Celeste News</span
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8  grid-margin">
                      <h2 className="mb-2 font-weight-600 noticias">
                        ¡2 x 1 en condensadores nocturnos!
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 13 horas
                      </div>
                      <p className="mb-0 noticias">
                        La tienda de Tommy está de liquidación y vende condensadores a mitad 
                        de precio. Máximo 4 por persona.
                      </p>
                      <br></br>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4 grid-margin">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="/news_images/zapdos.jpg"
                            alt="thumb"
                            className="img-fluid"
                            style={{width: 196, height: 136}}
                          />
                        </div>
                        <div className="badge-positioned">
                          <span className="badge badge-danger font-weight-bold"
                          >Kanto News</span
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8  grid-margin">
                      <h2 className="mb-2 font-weight-600 noticias">
                        Avistamiento de un pájaro legendario
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 4 días
                      </div>
                      <p className="mb-0 noticias">
                        El ave legendaria Zapdos ha sido vista en la ruta 3, provocando 
                        una horrible tormenta durante toda la noche.
                      </p>
                      <br></br>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="/news_images/montanero.jpg"
                            alt="thumb"
                            className="img-fluid"
                            style={{width: 196, height: 136}}
                          />
                        </div>
                        <div className="badge-positioned">
                          <span className="badge badge-danger font-weight-bold"
                          >Kanto News</span
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <h2 className="mb-2 font-weight-600 noticias">
                        Lobsa, un trabajador humidle
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 9 días
                      </div>
                      <p className="mb-0 noticias">
                        Don Lobsa, de 64 años, lleva trabajando desde que tiene memoria en la tienda
                        subterránea del Monte Moon. Se queja de que últimamente unos perros vienen a 
                        molestarlo durante la noche. Si le dices que te gusta el musgo, posiblemente
                        te regale algo.
                      </p>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
