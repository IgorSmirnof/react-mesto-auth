import React from "react";
import AuthForm from "./AuthForm";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";

function Register({ setIsSuccesRegister, isOpen }) {
  const navigate = useNavigate();

  function handleSubmit(e, password, email) {
    e.preventDefault();
    auth
      .register(password, email)
      .then(() => {
        navigate("/sign-in");
      })
      .then(() => {
        setIsSuccesRegister(true);
        isOpen(true);
      })
      .catch((err) => {
        setIsSuccesRegister(false);
        isOpen(true);
        console.log(err);
      });
  }

  return (
    <AuthForm
      title="Регистрация"
      pathOfButton="/sign-up"
      handleSubmit={handleSubmit}
      textOfButton="Зарегистрироваться"
    >
      <p className="entry-form__paragraph">
        Уже зарегистрированы? &nbsp;
        <Link className="entry-form__link" to="/sign-in">
          Войти
        </Link>
      </p>
    </AuthForm>
    // <h2 color="white">register link "/sign-up"</h2>
  );
}

export default Register;
