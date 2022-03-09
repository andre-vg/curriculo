import "./static/styles.css";
import "./static/bootstrap/css/bootstrap.css";
import "./static/bootstrap-icons/bootstrap-icons.css";
import "./static/boxicons/css/boxicons.css";
import "./static/boxicons/css/animations.css";
import About from "./section/about";
import Contact from "./section/contact";
import Hero from "./section/hero";
import Resume from "./section/resume";
import Services from "./section/services";
import Projetos from "./section/projetos";

function App() {
  return (
    <div className="App">
      <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" class="nav-link scrollto">
                <i class="bx bx-home"></i>
              </a>
            </li>
            <li>
              <a href="#about" class="nav-link scrollto">
                <i class="bx bx-user"></i>
              </a>
            </li>
            <li>
              <a href="#resume" class="nav-link scrollto">
                <i class="bx bx-file-blank"></i>
              </a>
            </li>
            <li>
              <a href="#services" class="nav-link scrollto">
                <i class="bx bx-server"></i>
              </a>
            </li>
            <li>
              <a href="#projetos" class="nav-link scrollto">
                <i class="bi bi-code-slash"></i>
              </a>
            </li>
            <li>
              <a href="#contact" class="nav-link scrollto">
                <i class="bx bx-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Hero />
      <About />
      <Resume />
      <Services />
      <Projetos />
      <Contact />
    </div>
  );
}

export default App;
