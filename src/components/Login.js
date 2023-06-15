import React from 'react';
import AuthForm from './AuthForm';
import { useNavigate } from 'react-router-dom';
import * as auth from "../utils/auth";

function Login({ handleAuthorize, infoTooltipSetter, setLoggedIn }) {


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
      })
      .catch((err) => {
        infoTooltipSetter(true, false);
        console.log(err);
      });
  }

  function onLogin(email, data) {
    localStorage.setItem("jwt", data.token);
    localStorage.setItem("email", email);
    setLoggedIn(true);
  }


  return (
    <AuthForm
      title='Вход'
      textOfButton='Войти'
      handleSubmit={handleSubmit}
    />
  );
}

export default Login; 