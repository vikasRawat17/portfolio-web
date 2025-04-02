import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import colorsharp2 from "../../assets/img/color-sharp2.png";
import proj1 from "../../assets/img/proj1.png";
import proj2 from "../../assets/img/proj2.png";
import proj3 from "../../assets/img/proj3.png";
import proj4 from "../../assets/img/proj4.png";

function Projects() {
  const projects = [
    {
      title: "GotoO App",
      description: "Design and Devlopment",
      imgUrl: proj1,
    },
    {
      title: "BuyIT",
      description: "Design and Devlopment",
      imgUrl: proj2,
    },
    {
      title: "Crypto Tracker",
      description: "Design and Devlopment",
      imgUrl: proj3,
    },
    {
      title: "Supe Hunt",
      description: "Design and Devlopment",
      imgUrl: proj4,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Developed and implemented multiple full-stack web applications,
              leveraging modern technologies such as React.js, Node.js,
              Express.js, and MongoDB. Projects include e-commerce platforms,
              social networking applications, real-time chat systems, and
              search-based platforms with authentication, database management,
              and third-party integrations. Focused on building scalable,
              secure, and user-friendly applications while ensuring performance
              optimization and responsive UI/UX.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum </Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2} alt="bk-img" />
    </section>
  );
}

export default Projects;
