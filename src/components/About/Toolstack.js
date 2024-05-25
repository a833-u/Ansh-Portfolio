import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiSpring,
  SiVercel,
  SiMacos,
  SiNetlify,
  SiPycharm,
  SiGithub,
  SiBootstrap,
  SiXampp
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
