import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/1000014448.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             Ing. en <span className="purple"> TIC's </span> Titulado
            </h1>
            <p className="home-about-body">
              Desarrollador de Software apasionado por la tecnología
              <br />
              <br />Con más de 7 años trabajando con
              <i>
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              Mi enfoque es la construcción de &nbsp;
              <i>
                <b className="purple">Aplicaciones y productos Web </b> y
                También{" "}
                <b className="purple">
                  Desarrollo Móvil.
                </b>
              </i>
              <br />
              <br />
              Cuento con experiencia bajo el entorno de <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Librerías y Frameworks modernos 
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> ReactJS, NextJS y NestJS</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me encuentras en</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sena-soft"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/juan-manuel-serrato-naranjo-sena/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
            <p>
              Sientete libre de <span className="purple">contactar </span>conmigo
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
