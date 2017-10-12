import React, { Component } from 'react';
import CLForm from './CLForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CL Gig Assist</h1>
        </header>
        <p className="App-intro">
          Improve your gig success with this, the best technology!
        </p>
        <CLForm />
      </div>
    );
  }
}

export default App;
