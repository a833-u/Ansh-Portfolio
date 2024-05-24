import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ansh Kansara </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently a Software developer, web developer.
            <br />
            I am pursuing B.Tech in Information Technology at Parul University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's not a bug - it's an undocumented feature. 😉"{" "}
          </p>
          <footer className="blockquote-footer">Ansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
