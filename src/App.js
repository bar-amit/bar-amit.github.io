import Header from "./components/Header/Header";
import {
  UpSquareFilled,
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./App.css";

function App() {
  var iconStyles = {
    color: "blueviolet",
    fontSize: "50px",
  };
  var arrowStyles = {
    color: "blueviolet",
    fontSize: "70px",
  };
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="about">
          <h2 className="about__title">Who am I?</h2>
          <p className="about__text">
            An up and coming web developer. Always learning and expending my
            knkowladge about web technologies and software development.
          </p>
        </section>
        <section className="projects">
          <h2 className="projects__title">My Works</h2>
          <ul className="projects__container">
            <li className="projects__item projects__item_name_home-kitchen">
              <div className="projects__card">
                <h3 className="projects__project-name">home kitchen</h3>
                <p className="projects__description">
                  A landing page for a fictional resturant.
                </p>
                <button className="projects__button" type="button">
                  See more
                </button>
              </div>
            </li>
            <li className="projects__item projects__item_name_around">
              <div className="projects__card">
                <h3 className="projects__project-name">around the states</h3>
                <p className="projects__description">
                  A instagram-like website.
                </p>
                <button className="projects__button" type="button">
                  See more
                </button>
              </div>
            </li>
            <li className="projects__item projects__item_name_2048">
              <div className="projects__card">
                <h3 className="projects__project-name">2048</h3>
                <p className="projects__description">
                  This project is a game called 2048. If you don't know it you
                  could give it a try.
                </p>
                <button className="projects__button" type="button">
                  See more
                </button>
              </div>
            </li>
            <li className="projects__item projects__item_name_news-explorer">
              <div className="projects__card">
                <h3 className="projects__project-name">news explorer</h3>
                <p className="projects__description">
                  In this app the user can search for news and save articles.
                </p>
                <button className="projects__button" type="button">
                  See more
                </button>
              </div>
            </li>
            <li className="projects__item projects__item_name_route-66">
              <div className="projects__card">
                <h3 className="projects__project-name">route 66</h3>
                <p className="projects__description">
                  Route 66 has beautiful views. This landing page presents some
                  of them.
                </p>
                <button className="projects__button" type="button">
                  See more
                </button>
              </div>
            </li>
            {/* <li className="projects__item">
              <div className="projects__card">
                <h3 className="projects__project-name">react name</h3>
                <p className="projects__description">
                  This project is described here with some elaboration. Maybe
                  two lines.
                </p>
                <button className="projects__button" type="button">
                  See more
                </button>
              </div>
            </li> */}
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

        <UpSquareFilled style={arrowStyles} className="footer__arrow" />
      </footer>
    </div>
  );
}

export default App;
