import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, projectLink }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt="projectimg" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
}

export default ProjectCard;
