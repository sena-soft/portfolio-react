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
          Mis trabajos <strong className="purple">personales </strong> recientes
        </h1>
        <p style={{ color: "white" }}>
          Algunos de los trabajos personales en los que últimamente he estado trabajando
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blog de recetas"
              description="Blog de recetas de comida construido con NextJS, las entradas del blog persisten MySQL, las imágenes son guardadas en Firebase y desplegado en Vercel"
              ghLink="https://github.com/sena-soft/meals-nextjs-app"
              demoLink="https://meals-nextjs-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cortador de Urls"
              description="Mi cortador de URLs personal, construido con NextJS, a cada ruta se le asigna un id y se guarda en MySQL, se devuelve una ruta al usuario con el id y NextJS se encarga de enrutar a su correspondiente ruta."
              ghLink="https://github.com/sena-soft/shortener"
              demoLink="https://shortener-sage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sitio Web"
              description="Sitio web donde se presentan servicios de abogacia, construido con HTML, CSS, Bootstrap y animaciones con la librería wow"
              demoLink="https://leyvaabogado.com"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
