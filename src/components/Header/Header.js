import BubblesGenerator from "../BubblesGenerator/BubblesGenarator";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <BubblesGenerator />
      <h1 className="header__title">
        Hello, My name is <span className="header__highlight">Bar Amit</span>.
      </h1>
      <p className="header__description"> I am a full-stack web developer.</p>
      <button className="header__button" type="button">
        About me
      </button>
    </header>
  );
}

export default Header;
