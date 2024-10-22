import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/blog.png";
import Kalakaar from "../../Assets/Projects/Kalakaar.png";
import EduConnect from "../../Assets/Projects/EduConnect.png";
import PropVista from "../../Assets/Projects/PropVista.png";
import BooknStay from "../../Assets/Projects/BooknStay.png";

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
              imgPath={Kalakaar}
              isBlog={false}
              title="Kalakaar"
              description="KalaKaar is a web application designed to bridge the gap between artists and job opportunities, offering a platform where artists can showcase their portfolios, find work, and connect with potential employers. The app combines the features of LinkedIn, Instagram, and Freelancer to provide a comprehensive experience for both artists and recruiters. Users can post job listings, browse through artist portfolios, and engage with creative talent in various fields like painting, photography, music, and more."
              ghLink="https://github.com/Gaurav151008/kalakaarWeb"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PropVista}
              isBlog={false}
              title="PropVista"
              description="PropVista is a real estate web application developed using the MERN stack, designed to simplify property search and listings for both buyers and sellers. The platform allows users to browse, search, and filter property listings based on their preferences, making it easier to find suitable homes or investment properties. Sellers can also post their properties with detailed descriptions, images, and pricing information."
              ghLink="https://github.com/a833-u/Real-Estate1"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EduConnect}
              isBlog={false}
              title="EduConnect"
              description="EduConnect is an innovative platform designed to bridge the gap between educators, students, and educational institutions. The web application offers a centralized space where users can access and share educational resources, participate in discussions, and connect with mentors. EduConnect provides tools for managing courses, conducting virtual classes, and fostering collaboration among learners and teachers."
              ghLink="https://github.com/a833-u/educonnectt"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BooknStay}
              isBlog={false}
              title="Book'n'Stay"
              description="It is a hotel booking website which can book several hotel rooms, suites, etc."
              ghLink="https://github.com/a833-u/Book-n-Stay"
              // demoLink="https://editor.soumya-jit.tech/"              
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
