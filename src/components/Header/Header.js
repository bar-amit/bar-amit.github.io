import { Link } from "react-scroll";
import BubblesGenerator from "../BubblesGenerator/BubblesGenarator";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <BubblesGenerator />
      <h1 className="header__title">
        Hello, My name is <span className="header__highlight">Bar Amit</span>.
      </h1>
      <p className="header__description"> I am a front-end web developer.</p>
      <Link className="header__button" to="about" smooth={true}>
        About me
      </Link>
    </header>
  );
}

export default Header;
