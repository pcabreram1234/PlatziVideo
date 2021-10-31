import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";
import Header from "./Header";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    //Usamos props porque ya estamos encapsulando nuestra aplicacion
    //Con el <BrowserRouter>
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <div className="register__container">
        <form className="register__container--form" onSubmit={handleSubmit}>
          <h2>Resgístrate</h2>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
          <div className="singIng__container">
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = () => {
  return {
    registerRequest: registerRequest,
  };
};

Register.propTypes = {
  registerRequest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);
