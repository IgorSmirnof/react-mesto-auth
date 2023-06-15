import React from "react";
// import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo-blanco.svg";

export default function Header({ email, loggedIn, isSign }) {
  // const inn = 'Войти';
  // const email = 'email@mail.com'
  const location = useLocation();
  // const [buttonInfo, setButtonInfo] = useState({ path: "", textButton: "" });
  
  console.log(email);

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      {
        loggedIn
          ? (
            <div className="header__entry">
              <p>{email}</p>
              <Link
                className="header__link"
                to="/sign-in"
                onClick={isSign}>
                Выйти
              </Link>
            </div>
          )
          : (
            <Link
              className="header__button"
              to={(location.pathname === "/sign-in") ? "/sign-up" : "/sign-in"}>
              {(location.pathname === "/sign-in") ? "Регистрация" : "Войти"}
            </Link>
          )
      }
    </header>
  )


  // useEffect(() => {
  //   if (location.pathname === "/sign-in") {
  //     setButtonInfo({ path: "sign-up", textButton: "Зарегистрироваться" });
  //   } else if (location.pathname === "/sign-up") {
  //     setButtonInfo({ path: "sign-in", textButton: "Войти" });
  //   }
  // }, [location.pathname]);

  // return (
  //   <header className="header">
  //     <img src={logo} alt="Логотип Место Россия." className="header__logo" />
  //     <nav className="header__entry">
  //       <div>{loggedIn ? email : ""}</div>
  //       <Link
  //         to={loggedIn === false ? buttonInfo.path : "/"}
  //         className="header__button"
  //         style={loggedIn ? {} : { display: "block" }}
  //         onClick={isSign}
  //       >
  //         {loggedIn === false ? buttonInfo.textButton : "Выйти"}
  //       </Link>
  //       {/* <button className="header__entry" onClick={isSign}> {loggedIn? 'Выйти':'Войти'}</button> */}
  //     </nav>
  //   </header>
  // );
}
