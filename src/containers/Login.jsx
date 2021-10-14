import React from "react";
import "../assets/styles/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form">
          <input type="text" className="input" placeholder="Correo" />
          <input type="password" className="input" placeholder="Contraseña" />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label for="">
              <input type="checkbox" id="cbox1" value="checkbox" />
              Recuérdame
            </label>
            <Link to="/login">Olvidé mi contraseña</Link>
          </div>
        </form>

        <div className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Incia sesión con Google" />
            Incia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="Incia sesión con Twitter" />
            Incia sesión con Twitter
          </div>
        </div>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register">Registrate</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
