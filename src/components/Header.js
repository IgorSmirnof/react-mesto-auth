import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo-blanco.svg";

export default function Header({ email, loggedIn, isSign }) {
  // const inn = 'Войти';
  // const email = 'email@mail.com'
  const currentLocation = useLocation();
  const [buttonInfo, setButtonInfo] = useState({ path: "", textOfButton: "" });
  
  console.log(loggedIn, isSign);

  useEffect(() => {
    if (currentLocation.pathname === "/sign-in") {
      setButtonInfo({ path: "sign-up", textOfButton: "Зарегистрироваться" });
    } else if (currentLocation.pathname === "/sign-up") {
      setButtonInfo({ path: "sign-in", textOfButton: "Войти" });
    }
  }, [currentLocation.pathname]);

  return (
    <header className="header">
      <img src={logo} alt="Логотип Место Россия." className="header__logo" />
      <nav className="header__entry">
        <article>{loggedIn ? email : ""}</article>
        <Link
          to={loggedIn === false ? buttonInfo.path : "/"}
          className="header__button"
          style={loggedIn ? {} : { display: "block" }}
          onClick={isSign}
        >
          {loggedIn === false ? buttonInfo.textOfButton : "Выйти"}
        </Link>
        {/* <button className="header__entry" onClick={isSign}> {loggedIn? 'Выйти':'Войти'}</button> */}
      </nav>
    </header>
  );
}
