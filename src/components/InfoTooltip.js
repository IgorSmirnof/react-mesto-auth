import React from "react";
import errorImage from '../images/fail.svg';
import successImage from '../images/success.svg'


function InfoTooltip({
  isOpen,
  onClose,
  isSuccessRegister
}) {
// console.log('run InfoTooltip')
  return (
    <div className={`popup popup__title_entry ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
        />
        <img
          className="popup__image"
          src={isSuccessRegister ? successImage : errorImage}
          alt={isSuccessRegister ? "Успешная регистрация" : "Ошибки при регистрации"}
        />
        <h2 className="popup__title popup__title_entry">
          {isSuccessRegister ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."} 
        </h2>

      </div>
    </div>
  );
}

export default InfoTooltip;