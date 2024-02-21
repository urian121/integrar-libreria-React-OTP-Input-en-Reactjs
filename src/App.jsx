import { useState } from "react";
import "./App.css";

import OtpInput from "react-otp-input";
import NavBar from "./components/NavBar";

function App() {
  const [otp, setOtp] = useState("");

  return (
    <>
      <NavBar />

      <div className="container d-flex align-items-center justify-content-center vh-90">
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

              <form>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>&nbsp;</span>}
                  renderInput={(props) => <input {...props} />}
                />
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
