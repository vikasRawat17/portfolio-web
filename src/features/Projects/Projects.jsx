import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import colorsharp2 from "../../assets/img/color-sharp2.png";
import proj1 from "../../assets/img/proj1.png";
import proj2 from "../../assets/img/proj2.png";
import proj3 from "../../assets/img/proj3.png";
import proj4 from "../../assets/img/proj4.png";
import proj0 from "../../assets/img/proj0.png";
import projminus1 from "../../assets/img/projminus1.png";

function Projects() {
  const projects = [
    {
      title: "reachInbox",
      description: "Mail system Dashboard",
      imgUrl: projminus1,
      projectLink: "https://main.d1wlayyoa7jew2.amplifyapp.com/",
    },

    {
      title: "Skillswap",
      description: "Barter system for skills",
      imgUrl: proj0,
      projectLink: "https://www.skillswap.dedyn.io/",
    },
    {
      title: "GotoO App",
      description: "Routine Management app",
      imgUrl: proj1,
      projectLink: "https://main.d1txu1z1p6jc0b.amplifyapp.com/",
    },
    {
      title: "BuyIT",
      description: "E-commerce App",
      imgUrl: proj2,
      projectLink: "https://main.d1bac2dviozacd.amplifyapp.com/",
    },
    {
      title: "Crypto Tracker",
      description: "One place for all crpyto market",
      imgUrl: proj3,
      projectLink: "https://main.d25dd0l4krq43u.amplifyapp.com/",
    },
    {
      title: "Supe Hunt",
      description: "Supe Sense",
      imgUrl: proj4,
      projectLink: "https://vikasrawat17.github.io/supeHunt/",
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
