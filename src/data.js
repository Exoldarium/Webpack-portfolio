import gameDealsAnimation from "./images/animation.gif";
import sneakersAnimation from "./images/sneakersAnimation.gif";
import githubImage from "./images/github.svg";
import linkedinImage from "./images/linkedin.svg";
import mailImage from "./images/mail.svg";

export const projects = [
  {
    title: "Game Deals Searching App",
    description:
      "Game deals searching app using CheapShark API, made completely from scratch without using any frameworks, libraries or compilers. Just pure vanilla JavaScript, CSS and HTML",
    image: gameDealsAnimation,
    link: "https://exoldarium.github.io/Game-Deals-Page/",
  },
  {
    title: "Super Cool Shoes",
    description: 
      "A product page built using React. The user can add and delete product from the cart. The cart data persists on page reload. User can also browse through pictures or enlarge the selected picture from the gallery. It's built using responsive design and accesibility in mind.",
    image: sneakersAnimation,
    link: "https://exoldarium.github.io/Super-Cool-Sneakers/"
  }
];

export const skills = ['JavaScript' , "HTML", "CSS", "React", "Git"];

export const socialImages = [
  {
    linkedinImage,
    githubImage,
    mailImage,
    linkedinLink: 'https://www.linkedin.com/in/dusan-milosavljevic-675ab5230/',
    githubLink: 'https://github.com/Exoldarium',
  }
];