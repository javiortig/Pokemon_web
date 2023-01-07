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
              <p className="mb-0">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <div className="d-flex">
              <span className="mr-3 text-danger">Domingo, 7 Enero, 2023</span>
              <span className="text-danger">21°C, Ciudad Celeste</span>
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
                  src="/news_images/Ciudad_Celeste_Tienda_Cerrada.jpg"
                  alt="banner"
                  className="img-fluid"
                />
                <div className="banner-content">
                  <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                    Celeste News
                  </div>
                  <h1 className="mb-0 text-white noticias">CERRADO PERMANENTEMENTE</h1>
                  <h3 className="mb-2 text-white noticias">
                    La tienda Pokémon de Ciudad Celeste ha cerrado permanentemente hasta
                    nuevo aviso debido a la repentina desaparición de su dueño.
                  </h3>
                  <div className="fs-12">
                    <span className="mr-2">Photo </span>10 Minutes ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 stretch-card grid-margin">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h2 className="noticias">Latest news</h2>

                  <div
                    className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                  >
                    <div className="pr-3">
                      <h5 className="noticias">Virus Kills Member Of Advising Iran’s Supreme</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Photo </span>10 Minutes ago
                      </div>
                    </div>
                    <div className="rotate-img">
                      <img
                        src="/news_images/assets/images/dashboard/home_1.jpg"
                        alt="thumb"
                        className="img-fluid img-lg"
                      />
                    </div>
                  </div>

                  <div
                    className="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between"
                  >
                    <div className="pr-3">
                      <h5 className="noticias">Virus Kills Member Of Advising Iran’s Supreme</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Photo </span>10 Minutes ago
                      </div>
                    </div>
                    <div className="rotate-img">
                      <img
                        src="/news_images/assets/images/dashboard/home_2.jpg"
                        alt="thumb"
                        className="img-fluid img-lg"
                      />
                    </div>
                  </div>

                  <div
                    className="d-flex pt-4 align-items-center justify-content-between"
                  >
                    <div className="pr-3">
                      <h5 className="noticias">Virus Kills Member Of Advising Iran’s Supreme</h5>
                      <div className="fs-12 noticias">
                        <span className="mr-2 noticias">Photo </span>10 Minutes ago
                      </div>
                    </div>
                    <div className="rotate-img">
                      <img
                        src="/news_images/assets/images/dashboard/home_3.jpg"
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
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">International</a></li>
                    <li><a href="#">Finance</a></li>
                    <li><a href="#">Health care</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Administration</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Game</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Kids</a></li>
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
                            src="/news_images/assets/images/dashboard/home_4.jpg"
                            alt="thumb"
                            className="img-fluid"
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
                        South Korea’s Moon Jae-in sworn in vowing to address
                        North
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Photo </span>10 Minutes ago
                      </div>
                      <p className="mb-0 noticias">
                        Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4 grid-margin">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="/news_images/assets/images/dashboard/home_5.jpg"
                            alt="thumb"
                            className="img-fluid"
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
                        No charges over 2017 Conservative battle bus cases
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Photo </span>10 Minutes ago
                      </div>
                      <p className="mb-0 noticias">
                        Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="/news_images/assets/images/dashboard/home_6.jpg"
                            alt="thumb"
                            className="img-fluid"
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
                        Kaine: Trump Jr. may have committed treason
                      </h2>
                      <div className="fs-13 mb-2 noticias">
                        <span className="mr-2 noticias">Photo </span>10 Minutes ago
                      </div>
                      <p className="mb-0 noticias">
                        Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an
                      </p>
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
