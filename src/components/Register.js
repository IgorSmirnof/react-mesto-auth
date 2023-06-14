import React from "react";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  function handleSubmit(e, password, email) {
    e.preventDefault();
    handleRegister(password, email);
  }

  return (
    <AuthForm
      title="Регистрация"
      pathOfButton="/sign-up"
      handleSubmit={handleSubmit}
      textOfButton="Зарегистрироваться"
    >
      <p className="entry-form__paragraph">
        Уже зарегистрированы?{" "}
        <Link className="entry-form__link" to="/sign-in">
          Войти
        </Link>
      </p>
    </AuthForm>
    // <h2 color="white">register link "/sign-up"</h2>
  );
}

export default Register;
