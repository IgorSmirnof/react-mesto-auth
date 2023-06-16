import React from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";

function Login({ setIsSuccesRegister, setLoggedIn, isOpen }) {
  const navigate = useNavigate();

  function handleSubmit(e, password, email) {
    e.preventDefault();

    auth
      .authorize(password, email)
      .then((data) => {
        if (data.token) {
          onLogin(email, data);
        }
      })
      .then(() => {
        navigate("/");
        setIsSuccesRegister(true);
      })
      .catch((err) => {
        setIsSuccesRegister(false);
        console.log(err);
        isOpen(true);
      });
  }

  function onLogin(email, data) {
    localStorage.setItem("jwt", data.token);
    localStorage.setItem("email", email);
    setLoggedIn(true);
  }

  return (
    <AuthForm title="Вход" textOfButton="Войти" handleSubmit={handleSubmit} />
  );
}

export default Login;
