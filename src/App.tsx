import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import React from "react";
import "./index.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header /> {/* Always visible */}
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default App;
