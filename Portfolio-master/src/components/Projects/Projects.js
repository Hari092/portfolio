import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
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
              title="Youtube clone"
              description="I developed a YouTube clone with core features such as a responsive landing page displaying trending videos and an intuitive search functionality to find content easily. The project includes a seamless video playback experience with essential controls. Users can engage via real-time live comments while watching videos. Additionally, the platform supports live video streaming with interactive chat features. Built using modern web technologies, the project ensures a smooth and responsive user experience."
              ghLink="https://github.com/Hari092/react-youtube"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="IMDb clone"
              description="I developed a simple IMDb clone featuring a responsive landing page that showcases popular movies and trailers. Users can watch movie trailers with an intuitive video player and explore details about top-rated and upcoming movies. The project includes a powerful search functionality to find movies quickly. Each movie page displays comprehensive details, including the cast and crew. Built with modern web technologies, the platform offers a smooth and engaging user experience."
              ghLink="https://github.com/Hari092/movierecommendation"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="File Storage System with AWS S3"
              description="I developed a simple file storage system that allows users to securely upload, manage, and store images, PDFs, and other file types in an AWS S3 bucket. The system includes features for uploading files, updating file names, deleting files, and re-uploading them when needed. Leveraging AWS S3 ensures scalability, security, and high availability of stored files. This project provides an intuitive user interface and efficient file management capabilities for seamless cloud storage."
              ghLink="https://github.com/Hari092/node-fileupload"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Food App"
              description="I created a Swiggy clone that provides a seamless food ordering experience with features like a dynamic landing page displaying popular restaurants and trending dishes. Users can explore menus, search for their favorite cuisines, and discover top-rated and newly added restaurants. The project allows easy cart management and order placement with intuitive navigation. Each restaurant profile includes detailed menu options. Developed using modern web technologies, the platform ensures a smooth and engaging user experience."
              ghLink="https://github.com/Hari092/swiggyfinal"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
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
