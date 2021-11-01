import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { searchInput } from "../actions";
import "../assets/styles/components/Search.scss";

//Al colocar entre parentesis isHome le indicamos al componente
//Que esto es el igual declarar props y luego en la logica destructurala
const Search = (props) => {
  const { isHome } = props;
  const inputStyle = classNames("input", { isHome });
  const [search, setSearch] = useState([]);

  const handleInput = (event) => {
    setSearch(event.currentTarget.value.toString());
    searchInput(search);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={handleInput}
      />
      <label htmlFor="">Resultados para {search}</label>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    currentSearch: state.currentSearch,
  };
};

const mapDispatchToProps = () => {
  return {
    currentSearch: searchInput,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
