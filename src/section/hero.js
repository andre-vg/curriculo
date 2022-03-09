import "../static/styles.css";
import "../static/bootstrap/css/bootstrap.min.css";
import "../static/bootstrap-icons/bootstrap-icons.css";
import "../static/boxicons/css/boxicons.min.css";
import "../static/boxicons/css/animations.css";
import logoroxoxlaro from "../static/logoroxoclaro.jpg";

function Hero() {
  return (
    <div className="About">
      <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container">
          <div class="row">
            <div class="col centro">
              <h1 id="meuNome">André Gonçalves</h1>
              <p>Currículo WEB</p>
              <div class="social">
                <a href="https://twitter.com/dedez00" class="twitter">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="https://twitch.tv/dedz_1" class="twitch">
                  <i class="bx bxl-twitch"></i>
                </a>
                <a href="https://instagram.com/andre.vg_" class="instagram">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/andre-vg" class="github">
                  <i class="bx bxl-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/andré-gonçalves-a74535163/"
                  class="linkedin"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="imagemindex">
                <img id="logo" src={logoroxoxlaro} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
