import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Github() {
  const colourTheme = {
    dark: {
      background: "transparent",
      text: "#ffffff",
      grade0: "#c4ffc4",
      grade1: "#4eff4e",
      grade2: "#00eb00",
      grade3: "#00b100",
      grade4: "#008900",
    },
    light: {
      background: 'transparent',
      grade0: "lightgrey",
      grade1: "#grey",
    },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="red">Code</strong>
      </h1>
      <GitHubCalendar
        username="Cal9233"
        blockSize={15}
        blockMargin={5}
        theme={{
          dark: ["#c4ffc4", "#4eff4e", "#00eb00","#00b100", "#008900"],
        }}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;