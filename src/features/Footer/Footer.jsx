import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/github-brands.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import MailChimpForm from "../MailChimpForm/mailChimp";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img className="logoImg" src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-icon">
              <a href="https://www.linkedin.com/in/vikas-rawat-8b6252306/">
                <img src={navIcon1} />
              </a>
              <a href="https://github.com/dashcol">
                <img src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/condensed_flame/">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2024.All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
