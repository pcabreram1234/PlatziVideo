import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";

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
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
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
  );
};

const mapDispatchToProps = () => {
  registerRequest;
};

export default connect(null, mapDispatchToProps)(Register);
