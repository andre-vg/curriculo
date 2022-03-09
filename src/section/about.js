import "../static/styles.css";
import "../static/bootstrap/css/bootstrap.min.css";
import "../static/bootstrap-icons/bootstrap-icons.css";
import "../static/boxicons/css/boxicons.min.css";
import "../static/boxicons/css/animations.css";
import "bootstrap/dist/css/bootstrap.min.css";
import minhaFoto from "../static/perfilRoxa.png";
import { useEffect, useState } from "react";

function About() {
  const data = useState();

  useEffect(() => {
    const d = new Date();
    const dia = d.getDate();
    const mes = d.getMonth() + 1;
    const ano = d.getFullYear();
    const hoje = dia + "/" + mes + "/" + ano;
    document.getElementById("dataJS").innerHTML = hoje;
  }, []);

  return (
    <div className="About">
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>Sobre</h2>
            <p>
              Olá, meu nome é André e atualmente sou estudante do 4° Semestre de
              Ciência da Computação no Centro Educacional CEUB e procuro novas
              oportunidades na área da Tecnologia da Informação.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <img src={minhaFoto} class="img-fluid" alt="" id="info" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Informações Pessoais:</h3>
              <br />
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>Data de Nascimento:</strong>
                      <span>24/11/2000</span>
                    </li>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>Lattes:</strong>
                      <span>
                        <a href="https://url.gratis/0nD6Xz">Lattes</a>
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>N° Celular:</strong>
                      <span>+55 (61) 98283-0376</span>
                    </li>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>Cidade:</strong>
                      <span>Brasília - DF</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>Idade:</strong>
                      <span>21</span>
                    </li>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>Formação:</strong>
                      <span>Ensino Superior em andamento</span>
                    </li>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>Email:</strong>
                      <span>avictorg@gmail.com</span>
                    </li>
                    <li>
                      <i class="bi bi-arrow-right"></i>
                      <strong>Estado Civil:</strong> <span>Solteiro</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Todas as informações estão corretas e foram atualizadas no dia:
                <span id="dataJS"> {data}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
