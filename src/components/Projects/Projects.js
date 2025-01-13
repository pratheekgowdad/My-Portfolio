import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Streamlining E-commerce Operations with Container Orchestration"
              description="Optimizing E-commerce Operations with a Customized Kubernetes Cluster and Helm Chart Deployment
              Boosting E-commerce System Uptime and Performance with Advanced Kubernetes Features like Resources, Liveness Probes,and Readiness Probes"
              ghLink="https://github.com/JasonDsouza212/k8s-shopping-app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Optimizing Maven Development with Jenkins CI/CD"
              description="Efficient App Building and Version Management with Maven, Securing and Managing Docker Images with Docker Hub
              Automating Server Provisioning with Terraform and Accelerating Application Deployment to AWS EC2 with Docker Hub Image."
              ghLink="https://github.com/JasonDsouza212/maven-jenkins-job"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Terraform and Ansible for AWS EC2 Deployment"
              description="Leveraged Terraform to automate the setup of a server, and
              utilized Ansible to fetch a Maven Docker image and deploy it on the created infrastructure.
              The integration of Terraform and Ansible created a powerful DevOps workflow, enabling fast and seamless provisioning and deployment"
              ghLink="https://github.com/JasonDsouza212/Terraform-Integration-with-Ansible"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Recipe storing App"
              description="Built an app for Storing the recipe of food. Developed to add, delete and update the recipe as many times as we want. It stores all data inside the Local storage. It can store a maximum of 5Mb data as it's in local storage."
              ghLink="https://github.com/JasonDsouza212/Recipee_app"
              demoLink="https://recipeehub.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Roy makeup Studio"
              description="Developed a front-end application to improve the user experience and operational efficiency of a ROY MakeUp studio, providing a user-friendly platform for clients and enabling enhanced workflow"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://roymakeupstudio.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
