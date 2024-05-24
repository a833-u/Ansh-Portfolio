import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tyohaar"
              description="E-commerce website for womens clothing wear. Which is built on react.js and node.js. Database used MongoDB.Atracctive user interface as well as admin panel. Currently deployed on render and netlify."
              ghLink="https://github.com/Gaurav151008/tyohaar"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kalakaar"
              description="Web application which is provide play role as interface between local, skilled an talented artist and recruirers whom want to hire them for event or concert etc.It is built on NodeJS, html, css, js."
              ghLink="https://github.com/Gaurav151008/kalakaarWeb"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Campus Cravings"
              description="A food deliver website within university campus area.Can be used in university where hostels are far from canteens and food outlets. Any user either student or faculties can order food from anywhere within campus. Which can save time and energy. Developed in NodeJS, html, css, js, bootstrap."
              ghLink="https://github.com/Gaurav151008/CC"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Vyamanika"
              description="Vyamanika is a company portfolio website which is also sells drone and products. It provides service related to drone like photography, videography, agro spray, etc. Developed in php, mysql database. FutureScope: Shift on node and react js framework and MongoDB database."
              ghLink="https://github.com/Gaurav151008/vimanika"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="IPL Winner Predictor"
              description="This is python based desktop software which uses past 14 years of ipl matches data and process it with machine learning algorithams like SVM, KNN, Decision tree and random forest. Shows accurate probability of winning chances between two teams among all algorithams. Built on python, tkinter, pandas, numpy.ML algos."
              ghLink="https://github.com/Gaurav151008/iplprediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
