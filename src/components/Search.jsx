import React from "react";
import classNames from "classnames";
import "../assets/styles/components/Search.scss";

//Al colocar entre parentesis isHome le indicamos al componente
//Que esto es el igual declarar props y luego en la logica destructurala
const Search = ({ isHome }) => {
  const inputStyle = classNames("input", { isHome });
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." />
    </section>
  );
};

export default Search;
