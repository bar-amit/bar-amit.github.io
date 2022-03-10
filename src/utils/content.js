import homeKitchenImage from "../images/home_kitchen.jpg";
import aroundImage from "../images/around-react.jpg";
import twoThousandFortyEightImage from "../images/2048.jpg";
import newsExplorerImage from "../images/news-explorer.jpg";
import route66Image from "../images/route-66.jpg";

// technologies : react, javascript, node, css, html, mongo

var projects = [
  {
    name: "home kitchen",
    description: "A landing page for a fictional returant.",
    content: `
    This project was made as a colabaration during a hackaton.
    It's a simple landing page for a fictional resturant. In the website
    you can look through a menu and read about the resturant and its stuff.
    Building this project we've used *HTML*, *CSS* and *Vanilla Javascript*.
    `,
    image: homeKitchenImage,
    github: "https://github.com/bar-amit/home-kitchen",
    app: "https://bar-amit.github.io/home-kitchen/",
    technologies: ["css", "html", "javascript"],
    additionalLinks: [{ href: "", text: "" }],
  },
  {
    name: "around the states",
    description: "This is an Instagram-like website.",
    content: `
    I made this project during a Practicum web development course. This is an Instagram-like website.
    In the app, a signed user can post pictures to the feed. Every user can like other users' posts.
    The front-end app is built with *React* and the back-end is built with *Express* and *MongoDB*.
    `,
    image: aroundImage,
    github: "https://github.com/bar-amit/react-around-api-full",
    app: "https://bar-around.students.nomoreparties.sbs/",
    technologies: ["react", "node", "mongo"],
    additionalLinks: [{ href: "", text: "" }],
  },
  {
    name: "2048",
    description:
      "This project is a game called 2048. If you don't know it you could give it a try.",
    content: `
    This project is a game called 2048. If you don't know it you could give it a try.
    The app was built using *React*.
    `,
    image: twoThousandFortyEightImage,
    github: "https://github.com/bar-amit/2048-react",
    app: "https://bar-amit.github.io/2048-react/",
    technologies: ["react", "javascript"],
  },
  {
    name: "news explorer",
    description: "In this app the user can search for news and save articles.",
    content: `
    In this app the user can search for news and save articles. The save news stories
    are sorted by keywords. I made this project during a Practicum web development
    course. The front-end is built with *React*. The news articles are fetch from a
    third party API. The user data is save on a back-end built with *Express* and *MongoDB*.
    `,
    image: newsExplorerImage,
    github: "https://github.com/bar-amit/news-explorer-frontend",
    app: "https://www.bar-news-explorer.students.nomoreparties.sbs",
    technologies: ["react", "node", "mongo"],
  },
  {
    name: "route 66",
    description:
      "Route 66 has beautiful views. This landing page presents some of them.",
    content: `
    Route 66 has beautiful views. This landing page presents some of them.
    I made this project during a Practicum web development course.
    It was built using *HTML* and *CSS*.
    `,
    image: route66Image,
    github: "https://github.com/bar-amit/web_project_3",
    app: "https://bar-amit.github.io/web_project_3",
    technologies: ["css", "html"],
  },
];

export { projects };
