import "../static/styles.css";
import salles from "../static/salles.png";
import unb from "../static/unb.png";
import logoceub from "../static/logoceub.png";
import embrapa from "../static/embrapa.png";

function Resume() {
  return (
    <div className="About">
      <section id="resume" class="resume">
        <div class="container">
          <div class="section-title">
            <h2>Currículo</h2>
            <p>
              Abaixo consta um pequeno resumo da minha formação e da minha
              experiência profissional.
            </p>
          </div>
          <div class="row left">
            <div class="col-lg-6">
              <img id="salles" class="instituicoes" src={salles} alt="" />
              <br />
              <div class="resume-item pb-0">
                <h4>Ensino Médio</h4>
                <h5>2015 - 2017</h5>
                <p>
                  <em>
                    Ensino Médio (2º grau). Colégio Madre Carmen Salles, CMCS,
                    Brasil.
                  </em>
                </p>
                <ul>
                  <li>Completo</li>
                  <li>Todas as etapas do PAS realizadas</li>
                </ul>
              </div>

              <img class="instituicoes" src={unb} alt="" />
              <div class="resume-item">
                <h4>Engenharia Eletrônica</h4>
                <h5>2018 - 2020</h5>
                <p>
                  <em>Graduação Interrompida no 4° semestre.</em>
                </p>
                <p>
                  Durante o período realização de atividades extra-classes como:
                </p>
                <ul>
                  <li>Monitoria</li>
                  <li>UnB nas escolas</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <img id="ceub" class="instituicoes" src={logoceub} alt="" />
              <div class="resume-item">
                <h4>Ciência da Computação</h4>
                <h5>2020 - Atualmente</h5>
                <p>
                  <em>
                    Atualmente cursando CC no CEUB, 4° semestre letivo e
                    expectativa de témino em 2023.
                  </em>
                </p>
                <br />
                <br />
              </div>
              <div class="resume-item">
                <h3>Experiência Profissional</h3>
                <img class="instituicoes" src={embrapa} alt="" />
                <h5>2021 - Atualmente</h5>
                <p>
                  <em>
                    Atuando como estagiário de desenvolvimento, auxiliando nas
                    seguintes áreas:
                  </em>
                </p>
                <ul>
                  <li>
                    Apoio à gestão de conteúdos de sistemas gestão de dados e
                    informações de recursos genéticos;
                  </li>
                  <li>
                    Apoio a atividades de documentação de sistema em ambiente
                    Wiki e Sistema da Qualidade (SQ);
                  </li>
                  <li>
                    Apoio no incremento, atualização, revisão e padronização de
                    tabela de bancos de dados;
                  </li>
                  <li>
                    Apoio na revisão de dados e informações de planilhas de
                    documentação de acervos de materiais biológicos e migração
                    assistida para base de dados especializada em padrão SQL;
                  </li>
                  <li>
                    Apoio às atividades de desenvolvimento e manutenção de
                    sistemas componentes da Plataforma Alelo Recursos Genéticos
                    de gestão de dados e informações das vertentes animal,
                    vegetal e de microrganismos;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
