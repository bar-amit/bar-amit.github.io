import "./Popup.css";

function Popup({ name, content, github, app, isOpen, onClose }) {
  const handleOverlayClick = (e) => {
    if (Array.from(e.target.classList).includes("popup")) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_visible" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}>
          [ X ]
        </button>
        <h3 className="popup__title">{name}</h3>
        <p>{content}</p>
        <a
          className="popup__link"
          href={github}
          rel="noreferrer"
          target="_blank"
        >{`<Code />`}</a>
        <a className="popup__link" href={app} rel="noreferrer" target="_blank">
          Live App
        </a>
      </div>
    </div>
  );
}

export default Popup;
