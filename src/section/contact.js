import "../App.css";

function Contact() {
  return (
    <div className="About">
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contato</h2>
            <p>Gostou do que viu? Sinta-se livre para me mandar um email:</p>
          </div>
          <form
            action="https://formsubmit.co/cea2303be57fadb999b68b0a149f9b8d"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Novo contato!!" />
            <div className="fomulario">
              <div class="row">
                <div class="col">
                  <input
                    type="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <input
                    type="email"
                    name="email"
                    class="email"
                    placeholder="Seu email"
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row col-lg-8 center">
                <input
                  type="hidden"
                  name="_next"
                  value="https://andre-vg.github.io/Curriculo-Web/templates/index.html#contact"
                />
                <textarea
                  type="text"
                  name="message"
                  class="message"
                  placeholder="Escreva sua mensagem."
                ></textarea>
              </div>
              <br />
              <div class="row row-cols-auto">
                <div class="alinharCentro">
                  <button type="submit" class="btn btn-outline-dark">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
