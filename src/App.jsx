import "./App.css";
import logo from "./imgs/mercado-libre-logo.png";

function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary custom_navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Mercado Libre"
              className="logo"
              style={{ width: "150px" }}
            />
          </a>
        </div>
      </nav>
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="row">
          <div className="col-lg-12">
            <article>
              <h1 className="text-center font-weight-bold">
                Ingrese el código de verificación
              </h1>
              <section className="parrafo">
                <p className="text-center py-4 px-5">
                  Te hemos enviado un código de verificación de 6 dígitos a tu
                  dirección de correo electrónico. Por favor, revisa tu bandeja
                  de entrada para confirmar el código.
                </p>
              </section>
              <form className="d-flex justify-content-center">
                <input type="text" name="" autoFocus />
                <input type="text" name="" />
                <input type="text" name="" />
                <input type="text" name="" />
                <input type="text" name="" />
                <input type="text" name="" />
              </form>
              <button className="btn btn-primary d-block mx-auto">
                Verificar el código
              </button>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
