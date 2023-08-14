import "./App.css";
import Navbar from "./components/navbar";
import Education from "./components/education";
import Intro from "./components/intro";
import Work from "./components/work";
import Footer from "./components/footer"
import Skills from "./components/skills"
import { useState } from "react";
function App() {
  
  return <div className="App">
    <Navbar/>
    <Intro customName/>
    <Skills/>

    <Education/>
    <Work/>
    <Footer/>
  </div>;
}

export default App;
