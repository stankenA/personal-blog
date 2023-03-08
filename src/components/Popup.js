import React from 'react';

export default function Popup({ children, isOpened, onClose }) {

  function closePopup() {
    onClose();
  }

  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`} onClick={closePopup}>
      <div className="popup__container" onClick={evt => evt.stopPropagation()}>
        <div className="popup__content">
          {children}
        </div>
        <button type="button" className="popup__close" onClick={closePopup}></button>
      </div>
    </div>
  )
}
