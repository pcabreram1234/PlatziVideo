import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import gravatar from "../utils/gravatar";
import { logOutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  console.log(props);
  const { user, isLogin, isRegister } = props;
  //Como user es un objeto porque asi es como esta estructurado
  //en el store, se debe usar el metodo Object.Keys para saber la
  //longitud de dicho objeto
  let hasUser = Object.keys(user).length;

  const handleLogOut = () => {
    props.logOutRequest(null);
  };

  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            ////////////////// Se coloca user[0] porque la prop user es un array
            <img src={gravatar(user[0].email)} alt={user[0].email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user[0].name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="/login" onClick={handleLogOut}>
                Cerrar Sesion
              </a>
              {/*      <Link to="/login" onClick={handleLogOut}></Link> */}
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.any.isRequired,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = () => {
  return {
    logOutRequest: logOutRequest,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
