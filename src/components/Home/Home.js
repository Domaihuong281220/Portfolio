import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/kidpng.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {useState} from 'react';


function Home() {
   const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
    <section style={{position:"relative", zIndex:"-2"}}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{marginBottom:"5rem"}}>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                WE ARE
                <strong className="main-name"> KID EDUCATION</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ padding: 50, textAlign: "left" }}>
                <button 
                style={{ 
                  paddingTop: 10, 
                  paddingBottom: 10, 
                  paddingLeft: 30, 
                  paddingRight: 30, 
                  textAlign: "center", 
                  fontFamily: "Raleway", 
                  width:isHovering ? "180px" : "170px",
                  height:isHovering ? "70px" : "60px",
                  color:"white", 
                  borderRadius:"10px", 
                  fontSize:"1.5rem", 
                  boxShadow:"0 0 50px 15px #48abe0", 
                  border:"0px",  
                  zIndex:"3",
                  position:"absolute",
                  backgroundColor: isHovering ? "#07B207": "#058305"
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >Play now</button>
                  
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
