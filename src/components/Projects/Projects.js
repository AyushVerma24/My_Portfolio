import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dogecoin from "D:/React/Portfolio-master/Portfolio-master/src/Assets/Web_Photo_Editor-removebg-preview.png"
import p2 from "D:/React/Portfolio-master/Portfolio-master/src/Assets/p2-removebg-preview.png"

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogecoin}
              isBlog={false}
              title="DogeCoin Website Frontend"
              description="The frontend of the website 'DogeCoin' created using React.js. "
              ghLink="https://github.com/AyushVerma24/Dogecoin_Website_Frontend.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Smart Glasses"
              description="Developed a wearable device designed to enhance user interaction with their environment. The glasses were equipped with sensors and integrated with augmented reality (AR) technology, allowing users to access real-time data and information overlays."
              ghLink="https://github.com/AyushVerma24/Smart-Glasses-Btech-mini-project.git"
              demoLink=""
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
