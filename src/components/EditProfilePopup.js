import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
    
  }
  function handleSetName(e) {
    setName(e.target.value);
  }
  function handleSetDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
        <input
          id="input-name"
          className="popup__input popup__input_field_name"
          minLength="2"
          maxLength="40"
          required
          placeholder=" Введите имя"
          onChange={handleSetName}
          name="name"
          value={name ?? ""}
        />
        <span className="input-name-error input-error"></span>

        <input
          id="input-description"
          className="popup__input popup__input_field_description"
          minLength="2"
          maxLength="200"
          required
          placeholder=" Вид деятельности"
          onChange={handleSetDescription}
          name="about"
        value={description ?? ""}
        />
        <span className="input-description-error input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
