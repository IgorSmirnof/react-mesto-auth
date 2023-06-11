import React from "react";
import logo from "../images/logo-blanco.svg";

export default function Header({loggedIn, onSignout}) {
const inn = 'Войти'

  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип Место Россия."
        className="header__logo"
      />
      <button  className="header__logged">{inn}</button>
    </header>
  );
}


