import React from "react";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register__container">
      <form className="register__container--form">
        <h2>Resgístrate</h2>
        <input type="text" className="input" placeholder="Nombre" />
        <input type="email" className="input" placeholder="Correo" />
        <input type="password" className="input" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
        <div className="singIng__container">
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
