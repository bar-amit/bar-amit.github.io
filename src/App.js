import React from "react";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import Project from "./components/Project/Project";
import { animateScroll as scroll } from "react-scroll";
import {
  UpSquareFilled,
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { projects } from "./utils/content";
import "./App.css";

function App() {
  const [popup, setPopup] = React.useState({ isOpen: false, data: null });
  const openPopup = (data) => setPopup({ isOpen: true, data });
  const closePopup = () =>
    setPopup((s) => {
      return { ...s, isOpen: false };
    });

  var iconStyles = {
    color: "blueviolet",
    fontSize: "50px",
  };
  var arrowStyles = {
    color: "blueviolet",
    fontSize: "70px",
  };

  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        closePopup();
      }
    }
    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="app">
      <Popup {...popup.data} isOpen={popup.isOpen} onClose={closePopup} />
      <Header />
      <main className="main">
        <section className="about" name="about">
          <h2 className="about__title">Who am I?</h2>
          <p className="about__text">
            An up and coming web developer. Always learning and expending my
            knkowladge about web technologies and software development.
          </p>
        </section>
        <section className="projects">
          <h2 className="projects__title">My Works</h2>
          <ul className="projects__container">
            {projects.map((p) => (
              <Project
                data={p}
                openPopup={openPopup}
                key={`projects-item-${p.name}`}
              />
            ))}
          </ul>
        </section>
        <div className="separator"></div>
      </main>
      <footer className="footer">
        <svg
          className="footer__triangle"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#eee" points="0,0 50,100 100,0" />
        </svg>
        <ul className="footer__social-links">
          <li>
            <a className="footer__link" href="mailto:bar.amit@outlook.com">
              <MailOutlined style={iconStyles} />
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/bar-amit-10b6381a5/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined style={iconStyles} />
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://www.github.com/bar-amit/"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined style={iconStyles} />
            </a>
          </li>
        </ul>
        <div className="footer__container">
          <UpSquareFilled
            style={arrowStyles}
            className="footer__arrow"
            onClick={() => scroll.scrollToTop()}
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
