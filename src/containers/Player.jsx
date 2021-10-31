import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import NotFound from "../containers/NotFound";
import "../assets/styles/Player.scss";
import Header from "../components/Header";

const Player = (props) => {
  /// Estos datos se obtienen al renderizar el componente
  /// Como toda la aplicacion esta encapsulada con <BrowserRouter>
  /// El mismo brinda estas propiedades para acceder a los parametros pasados a las URL
  const { id } = props.match.params;

  //Con esta variable se obtiene del store la longintud del id de la propiedad playing del store
  //Esto permite determinar si al dar click en el boton de play se esta reproduciendo o no
  const hasPlaying = Object.keys(props.playing).length > 0;

  //Al usar useEffect se ejecuta una funcion cuando el componente se renderiza
  //Dicha funsion es ejecutar el action getVideoSource que envia el id del video a buscar
  //useLayoutEffect permite los mismo que useEffect solo que renderiza
  //Los cambios en el componente de manera sincronica, es decir despues
  //Que el DOM haya pintado todo
  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <>
      <Header />
      <div className="Player">
        <video controls autoPlay>
          {/*a la propiedad source se pasa el valor del source en el store}*/}
          <source src={props.playing.source} type="video/mp4" />
        </video>

        <div className="Player-back">
          <button
            type="button"
            onClick={() => {
              //Como nuestra aplicacion esta encapsulado con <BrowserRouter>
              //Podemos usar el metodo goBack() del history para volver a la pagina anterior
              props.history.goBack();
            }}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
};

Player.propTypes = {
  loginRequest: PropTypes.func,
};

//Tanto las funciones o variables que conectan o envian informacion al store
//Deben retornar un objeto plano con las propiedades necesarias
const mapStateToProps = (state) => {  
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
