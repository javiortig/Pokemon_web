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
              <span className="mr-3 text-danger">Jueves, 2 Marzo, 2023</span>
              <span className="text-danger">35°C, Ciudad Azafrán</span>
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
                  src="/news_images/coliseo.webp"
                  alt="banner"
                  className="img-fluid"
                  style={{width: 690, height: 390}}

                />
                <div className="banner-content">
                  <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                    Plateada News
                  </div>
                  <h1 className="mb-0 text-white noticias">Victoria Mayúscula del Team Magma</h1>
                  <h3 className="mb-2 text-white noticias">
                    En el coliseo de Ciudad Plateada, ambos equipos contrincantes se jugaron el control
                    de la ruta 7, que lleva en conflicto desde hace 50 años. El team Aqua fue derrotado en
                    los tres combates del evento, tanto los individuales como el combate doble, por los oficiales
                    Patrick Bateman y Aurek. A raíz de su victoria, estos obtenieron la codiciada eviolita

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
                      <h5 className="noticias">Beneficios en el casino de Ciudad Azulona</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 17 días
                      </div>
                    </div>
                    <div className="rotate-img mi-imagen">
                      <img
                        src="/news_images/casino.jpg"
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
                        Megacorp anuncia que pronto lanzará a la venta sus protomascotas</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Fotos </span>Hace 30 días
                      </div>
                    </div>
                    <div className="rotate-img mi-imagen">
                      <img
                        src="/news_images/Protopet.jpg"
                        alt="thumb"
                        className="img-fluid img-lg"
                      />
                    </div>
                  </div>

                  <div
                    className="d-flex pt-4 align-items-center justify-content-between"
                  >
                    <div className="">
                      <h5 className="noticias">Megacorp mueve sus hilos políticos en el Archipiélago Seafoam</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 3 semanas
                      </div>
                    </div>
                    <div className="rotate-img mi-imagen">
                      <img
                        src="/news_images/corrupcion.jpg"
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
                            src="/news_images/silueta_mewtwo.jpg"
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
                        ¡Ha aparecido un nuevo Pokémon en la Pokédex!
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 13 horas
                      </div>
                      <p className="mb-0 noticias">
                        La famosa Pokédex del Profesor Oak ha recibido una actualización. Ha aparecido un Pokémon
                        nunca antes visto en la región. Los usuarios ya han abierto todo tipo de teorías,
                        incluso de que se trata de un legendario
                      </p>
                      <br></br>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4 grid-margin">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="/news_images/team_magma.jpg"
                            alt="thumb"
                            className="img-fluid"
                            style={{width: 196, height: 136}}
                          />
                        </div>
                        <div className="badge-positioned">
                          <span className="badge badge-danger font-weight-bold"
                          >Azafrán News</span
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8  grid-margin">
                      <h2 className="mb-2 font-weight-600 noticias">
                          Desfile del Team Magma en la ruta 7
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 5 días
                      </div>
                      <p className="mb-0 noticias">
                        Para celebrar la victoria y conquista de la ruta, el team magma ha declarado 2 semanas
                        festivas en el lugar, colgando carteles de su insignia y de sus dos oficiales, Aurek
                        y Patrick Bateman. Si no eres del team Aqua, puedes ir para que te inviten a su delicioso
                        oden hirviendo.
                      </p>
                      <br></br>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="/news_images/tunel_roca.jpg"
                            alt="thumb"
                            className="img-fluid"
                            style={{width: 196, height: 136}}
                          />
                        </div>
                        <div className="badge-positioned">
                          <span className="badge badge-danger font-weight-bold"
                          >OldWood News</span
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <h2 className="mb-2 font-weight-600 noticias">
                        ALta circulación en el Túnel Roca
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Foto </span>Hace 9 días
                      </div>
                      <p className="mb-0 noticias">
                        Últimamente está la cosa difícil para los montañeros. En el último mes, ambas facciones
                        han cometido terribles asesinatos el nuestro preciado Túnel. Además, las apuestas clandestinas
                        están en auge, incluso organizando codiciosos torneos de póker pirata, con valiosos premios
                        como el Amuleto Iris.
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
