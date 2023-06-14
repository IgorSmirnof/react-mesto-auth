import React from 'react';
import AuthForm from './AuthForm';

function Login({ handleAuthorize }) {

  function handleSubmit(e, password, email) {
    e.preventDefault();

    handleAuthorize(password, email)
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