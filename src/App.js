import "./static/styles.css";
import "./static/bootstrap/css/bootstrap.min.css";
import "./static/bootstrap-icons/bootstrap-icons.css";
import "./static/boxicons/css/boxicons.min.css";
import "./static/boxicons/css/animations.css";
import About from "./section/about";
import Contact from "./section/contact";
import Hero from "./section/hero";
import Resume from "./section/resume";
import Services from "./section/services";

function App() {
    return (
        <div className="App">
            <header
                id="header"
                class="d-flex flex-column justify-content-center"
            >
                <nav id="navbar" class="navbar nav-menu">
                    <ul>
                        <li>
                            <a href="#hero" class="nav-link scrollto active">
                                <i class="bx bx-home"></i> <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" class="nav-link scrollto">
                                <i class="bx bx-user"></i> <span>Sobre</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume" class="nav-link scrollto">
                                <i class="bx bx-file-blank"></i>{" "}
                                <span>Resumo</span>
                            </a>
                        </li>
                        <li>
                            <a href="#services" class="nav-link scrollto">
                                <i class="bx bx-server"></i>{" "}
                                <span>Linguagens</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projetos" class="nav-link scrollto">
                                <i class="bi bi-code-slash"></i>{" "}
                                <span>Projetos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" class="nav-link scrollto">
                                <i class="bx bx-envelope"></i>{" "}
                                <span>Contato</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Hero />
            <About />
            <Resume />
            <Services />
            <Contact />
        </div>
    );
}

export default App;
