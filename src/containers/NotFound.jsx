import React from "react";
import "../assets/styles/NotFound.scss";
import notFoundIcon from "../assets/static/404.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const NotFound = () => {
  return (
    <>
      <Header />
      <main className="main__container">
        <div className="main_container--title">
          <div className="sub__tittle">
            <p>
              Opps! ha ocurrido un{" "}
              <span className="sub__tittle--error">error</span> inesperado, el
              servidor no pudo encontrar el contenido solicitado
            </p>
          </div>

          <div className="main_container--button">
            <Link to="/">
              <button className="button" type="button">
                Regresar
              </button>
            </Link>
            <img src="./src/assets/static/back-arrow.svg" alt="" />
          </div>
        </div>

        <div className="main__container--img">
          <img src={notFoundIcon} alt="" />
        </div>
      </main>
    </>
  );
};

export default NotFound;
