import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hola, mi nombre es <span className="purple">Juan Manuel Serrato </span>
            soy de <span className="purple"> Michoacán, México.</span>
            <br />
            Desarrollador Frontend desde el 2017,
            con experiencia en la creación de interfaces de usuario atractivas y funcionales. Experto en HTML, CSS y JavaScript, 
            con sólidos conocimientos en frameworks como React y Angular.
            <br />
            <br />
            Apasionado por la resolución de problemas y el aprendizaje continuo, 
            comprometido con la excelencia en el desarrollo de software.
            <br />
            <br />
            Soy una persona que ama y distruta de la naturaleza dentro de mis Hobbies están:

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Senderismo
            </li>
            <li className="about-activity">
              <ImPointRight /> Pasear con mi perro
            </li>
            <li className="about-activity">
              <ImPointRight /> Conocer nuevos lugares, sólo o con mi novia
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "El trabajo duro y la perseverancia siempre te encamina a cumplir cualquier objetivo!"{" "}
          </p>
          <footer className="blockquote-footer">Juan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
