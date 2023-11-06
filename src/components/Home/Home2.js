import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Screenshot.png";
import myImg2 from "../../Assets/Screenshot2.png";
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
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME <span className="purple"> TO </span> KID EDUCATION
            </h1>
            <p className="home-about-body">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.🤷‍♂️
              <br />
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <i>
                <b className="purple"> sed do eiusmod tempor incididunt ut. </b>
              </i>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit &nbsp;
              <i>
                <b className="purple">Lorem ipsum dolor sit amet </b> and
                consectetur adipiscing elit{" "}
                <b className="purple">
                Lorem ipsum.
                </b>
              </i>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit <b className="purple"> adipiscing elit</b> and
              <i>
                <b className="purple">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </b>
              </i>
              &nbsp;elit
              <i>
                <b className="purple">Lorem ipsum dolor sit amet</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <Tilt>
              <img src={myImg2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
