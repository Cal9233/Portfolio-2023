import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="red"> Calvin Malagon </span> 
            from  <span className="red">California, USA</span>
            <br /> I am a Software Engineer who's on the road to becoming one of the most memorable programmer <strong className="blue">EVER</strong>
            <br />
            <br />
            Apart from coding, some other activities that I love to do are
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Muay Thai
            </li>
          </ul>
          <br />
          <p style={{ marginBlockEnd: 0, color: "#b2a59f"}}>
            "I fear living a life where I could have accomplished something and didn't."{" "}
          </p>
          <br />
          <footer className="blockquote-footer">Neil degrasse Tyson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;