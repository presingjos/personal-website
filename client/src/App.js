import React, { Component } from "react";
import "./App.css";
import ParallaxImage from "./components/ParallaxImage"
import History from "./components/History"
import Projects from "./components/Projects"
import Connect from "./components/Connect"

// Load the data to display
import { experiences, projects, linkedin } from "./store"

class App extends Component {
  render() {
    return (
      <div>
        <ParallaxImage />
        <History experiences={experiences}/>
        <Projects projects={projects}/>
        <Connect linkedin={linkedin}/>
      </div>
    );
  }
}

export default App;

