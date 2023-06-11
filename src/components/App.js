import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import { Route, Routes } from 'react-router-dom';
import Register from './sign-up';
import Login from './sign-in';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getInitialCards()])
      .then(([user, card]) => {
        setCurrentUser(user);
        setCards(card);

        // console.log(user);
      })
      .catch((err) => console.log(" еггог получения промиса", err));
  }, []); // <----<< [] -- при монтировании один раз!

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => console.log(" еггог кард лайк", err));
  } 

  function handleCardDelete(card) {
    api.deleteCardApi(card._id)
      .then(() => {
        setCards(state => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log("error delete card :" + err))
      ;
  };

  function handleUpdateUser(value) {
    api.setUserInfoApi(value)    
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups()
      })
      .catch((err) => console.log(" данные пользователя", err))
  };

  function handleUpdateAvatar(value) {
    api.setUserAvatar(value)    
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups()
    })
    .catch((err) => console.log("апдейт аватар", err));
  };
  
  function handleAddPlaceSubmit(value) {
    api.addNewCards(value)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log("добавлениe карточки :", err))
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body-root">
        <Header />
        <Routes>
          <Route path='./sign-up' element={<Register />} />
          <Route path='./sign-in' element={<Login/>} />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onClose={closeAllPopups}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
            />
        </Routes>
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        


        {/* <PopupWithForm
        title='Вы уверены?'
        name='close'
      >
      <div className="popup popup_delete">
        <form
          className="popup__container"
          autoComplete="off"
          name="form-delete"
        >
          <button type="button" className="popup__close button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__button-save button">Да</button>
        </form>
      </div>
      
      </PopupWithForm> */}

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
