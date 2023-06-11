import React from "react";

function ImagePopup({ card, onClose }) {
  // console.log(card);
  return (
    <div className={`popup popup_picture ${card ? "popup_opened" : ""}`}>
      <figure className="popup__figure">
        <button
          type="button"
          className="popup__close button"
          onClick={onClose}
        />
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="popup__full"
        />
        <figcaption className="popup__caption">
          {card ? card.name : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
