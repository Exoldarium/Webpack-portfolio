import React from "react";
import About from './components/About'
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";

function App(props) {
  return (
    <main>
      <NavBar />
      <About socialImages={props.socialImages}/>
      <Projects projects={props.projects}/>
      <Skills skills={props.skills}/>
      <Contact />
    </main>
  );
}

export default App;
