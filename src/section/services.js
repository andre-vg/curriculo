import "../static/styles.css";
import C from "../static/linguagens/C.png";
import css from "../static/linguagens/css3.png";
import html from "../static/linguagens/HTML5.png";
import js from "../static/linguagens/js.png";
import java from "../static/linguagens/java.png";
import mysql from "../static/linguagens/MySQL2.png";
import python from "../static/linguagens/python.png";
import react from "../static/linguagens/React-icon.png";

function Services() {
  return (
    <div className="Services">
      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <h2>Linguagens</h2>
            <p>
              Abaixo algumas linguagens que já trabalhei ou tenho conhecimento
              pleno sobre:
            </p>
          </div>
          <div class="slide-img">
            <img src={C} class="slide1" alt="" />
            <img src={css} class="slide2" alt="" />
            <img src={html} class="slide3" alt="" />
            <img src={js} class="slide4" alt="" />
            <img src={java} class="slide5" alt="" />
            <img src={mysql} class="slide6" alt="" />
            <img src={python} class="slide7" alt="" />
            <img src={react} class="slide8" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
