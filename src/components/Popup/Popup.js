import {
  DiReact,
  DiMongodb,
  DiJsBadge,
  DiNodejs,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import "./Popup.css";

function Popup({
  name,
  content = "",
  github,
  app,
  technologies = [],
  isOpen,
  onClose,
}) {
  let contentWithHightlighedText = content.split("*").map((text, idx) =>
    idx % 2 === 0 ? (
      text
    ) : (
      <span className="popup__highlight" key={`highlight-text-${idx}`}>
        {text}
      </span>
    )
  );

  var icons = {
    react: <DiReact key="symbol-react" className="popup__icon" />,
    javascript: <DiJsBadge key="symbol-javascript" className="popup__icon" />,
    node: <DiNodejs key="symbol-node" className="popup__icon" />,
    css: <DiCss3 key="symbol-css" className="popup__icon" />,
    html: <DiHtml5 key="symbol-html" className="popup__icon" />,
    mongo: <DiMongodb key="symbol-mongo" className="popup__icon" />,
  };

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
        <p className="popup__content">{contentWithHightlighedText}</p>
        <div>
          <a
            className="popup__link"
            href={github}
            rel="noreferrer"
            target="_blank"
          >{`<Code />`}</a>
          <a
            className="popup__link"
            href={app}
            rel="noreferrer"
            target="_blank"
          >
            Live App
          </a>
        </div>
        <div className="popup__tech-icons">
          {technologies.map((t) => icons[t])}
        </div>
      </div>
    </div>
  );
}

export default Popup;
