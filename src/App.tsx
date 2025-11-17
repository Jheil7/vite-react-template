import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import React from "react";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <Header /> {/* Always visible */}
      <Projects />
      <Contact />
    </>
  );
};

export default App;
