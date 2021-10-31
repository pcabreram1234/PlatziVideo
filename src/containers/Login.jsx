import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginRequest } from "../actions";
import "../assets/styles/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = (props) => {
  const [form, setValues] = useState({ email: "" });

  /// Cuando se coloca en una funcion el parametro "event"
  /// Se puede obviar en el target que la ejecuta el inidicar dicho argumento

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    ///Como tenemos React-Router podemos usar la propiedad history
    /*  Dicho valor esta disponible porque estamos encapsulando toda 
    nuestra aplicacion con BrowserRouter */
    ///Para movernos a cualquier ruta de nuestra aplicacion
    ///Su metodo push es el encargado de hacer esto
    props.history.push("/");
  };

  return (
    <>
      <Header isLogin />
      <section className="login">
        <div className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Correo"
              name="email"
              onChange={handleInput}
            />
            <input
              type="password"
              className="input"
              placeholder="Contraseña"
              name="password"
              onChange={handleInput}
            />
            <button className="button" type="submit">
              Iniciar sesión
            </button>
            <div className="login__container--remember-me">
              <label htmlFor="">
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
    </>
  );
};

Login.propTypes = {
  loginRequest: PropTypes.func,
};
const mapDispatchToProps = { loginRequest };

export default connect(null, mapDispatchToProps)(Login);
