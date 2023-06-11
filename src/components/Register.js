import React from "react";
import Link from 'react-router-dom';

function Register() { 
  function handleSubmit(e, password, email) {
    e.preventDefault();
    handleRegister(password, email)
  }

  return (
    <AuthForm
      title='Регистрация'
      pathOfButton='/sign-up'
      handleSubmit={handleSubmit}
      textOfButton='Зарегистрироваться'
    >
      
      <p className='intro-form__paragraph'>Уже зарегистрированы? <Link className='intro-form__link' to="/sign-in">Войти</Link>
      </p>
    </AuthForm>
  )
};

export default Register;
