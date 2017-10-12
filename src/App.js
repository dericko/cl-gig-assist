import React, { Component } from 'react';
import GigAssistPanel from './GigAssistPanel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CLGA</h1>
        </header>
        <p className="App-intro">
          Improve gig success with Gig Assistant, the best technology!
        </p>
        <GigAssistPanel />
      </div>
    );
  }
}

export default App;
