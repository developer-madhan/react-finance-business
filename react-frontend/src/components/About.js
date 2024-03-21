import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
const About = () => {
  return (
    <div className="welcome-wrap" id="about">
      <Container>
        <Row>
          <Col md={6}>
            <div className="mt-3 mt-md-4 mt-lg-5">
              <h1>
                Welcome to <span>Finance Business</span>
              </h1>
              <h3 className="mt-4">Nunc porta turpis at leo posuere convallis</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                at metus sem. Sed at risus eget tellus auctor auctor. Sed id
                tempus sem. Praesent vitae mattis ante. Sed ut pretium metus.
                Aliquam tempor porta elit. Aenean faucibus velit nec tortor
                egestas aliquam. Donec nulla magna, efficitur lacinia vulputate
                ornare, sollicitudin non ligula.
              </p>
              <ul className="welcomeLinks p-0">
                <li><FaArrowAltCircleRight color="red" size={20} /> Suspendisse aliquam ligula eget odio ornare</li>
                <li><FaArrowAltCircleRight color="red" size={20} /> Mauris interdum at elit quis ultrice</li>
                <li><FaArrowAltCircleRight color="red" size={20} /> Mauris interdum at elit quis ultrices</li>
              </ul>
              <div className="readmore">
                <a href="#">Read More</a>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="welcomeImg">
              <img src="images/about.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
