import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

import { Content } from './components';
import { Socket, User } from './containers';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Content />
        <Socket>socket</Socket>
        <User />
      </div>
    );
  }
}

export default App;