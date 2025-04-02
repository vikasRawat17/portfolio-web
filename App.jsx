import React from "react";
import NavBar from "./src/features/Navbar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./src/features/Banner/Banner";
import Skills from "./src/features/Skills/Skills";
import Projects from "./src/features/Projects/Projects";
import Contact from "./src/features/Contact/Contact";
import Footer from "./src/features/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
