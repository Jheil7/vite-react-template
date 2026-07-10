import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import React from "react";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <Header /> {/* Always visible */}
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
