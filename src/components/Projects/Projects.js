import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import easytask from "../../Assets/Projects/leaf.png";
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
              imgPath={suicide}
              isBlog={false}
              title="Planificador de gastos"
              ghLink="https://github.com/sena-soft/expenses-planning"
              description="Planificador de gastos creado con Vite, ReactJs y Typescript, es un planificador de gastos donde se define un presupuesto y se agregan gatos por categoría, los cuales se pueden filtrar y además se tiene una gráfica que representa el porcentaje gastado. Se usan tecnologías como COntext API, Use Reducer, TailwindCSS y las librerîas react-swipeable-list y react-circular-progressbar para su construcción."
              demoLink="https://expenses-planning.vercel.app"              
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easytask}
              isBlog={false}
              title="Administrador de Tareas"
              description="Administrador de tareas con Angular v18, utilizando las nuevos features que proporciona la versión 18, Typescript, Input, Output, @for, @if, services, Two way binding, Independency Injection, propiedades computadas"
              ghLink="https://github.com/sena-soft/easytask"
              demoLink="https://easytask-zeta.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
