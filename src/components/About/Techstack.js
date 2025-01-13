import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from "react-icons/di";
import {
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana
} from "react-icons/si";
import {
  FaAws
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
    </Row>
  );
}

export default Techstack;
