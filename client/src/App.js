import React, { Component } from 'react';
import './App.css';
import ParallaxImage from './components/ParallaxImage'
import History from './components/History'
import Projects from './components/Projects'
import Connect from './components/Connect'

class App extends Component {
  render() {
    return (
      <div>
        <ParallaxImage />
        <History />
        <Projects />
        <Connect linkedin={'https://www.linkedin.com/in/joseph-p-834b20122/'}/>
      </div>
    );
  }
}

export default App;

