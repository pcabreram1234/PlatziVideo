import React from "react";
import "../assets/styles/Player.scss";

const Player = (props) => {
  /// Estos datos se obtienen al renderizar el componente
  /// Como toda la aplicacion esta encapsulada con <BrowserRouter>
  /// El mismo brinda estas propiedades para acceder a los parametros pasados a las URL
  const { id } = props.match.params;
  return (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
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
  );
};

export default Player;
