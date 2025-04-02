import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Ui/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fulltext = toRotate[i];
    let updatedtext = isDeleting
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);
    setText(updatedtext);
    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }
    if (!isDeleting && updatedtext == fulltext) {
      setisDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedtext == "") {
      setisDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate-animated animate_fadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {"Hi I am Vikas "}
                    <br />
                    <span className="wrap">{text}</span>
                  </h1>

                  <p>
                    Results-driven Full-Stack Developer with expertise in
                    JavaScript, React.js, Node.js, and MongoDB. Skilled in
                    developing scalable web applications, REST APIs, and
                    microservices. Proficient in HTML, CSS, JavaScript, React,
                    Redux for frontend and Node.js, Express.js, MongoDB, MySQL
                    for backend. Passionate about writing efficient,
                    maintainable code and improving application performance.
                  </p>

                  <button onClick={() => console.log("clicked")}>
                    Let's Connect
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="headerImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
