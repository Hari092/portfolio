import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hariharan</span> from{" "}
            <span className="purple">Erode, India.</span>
            <br />I am currently employed as a Frontend Software Developer at{" "}
            <span className="purple">Economizing Futura (OPC).</span>
            <br />I have completed B.E Mechatronics at{" "}
            <span className="purple">BIT Sathy.</span>
            <br />
            <br />
            Apart from coding, here are a few activities I find engaging:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Brainstorming innovative ideas and solutions
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
