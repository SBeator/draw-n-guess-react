import * as React from 'react';
import './App.css';

import { Socket, User } from './containers';
import Canvas from './containers/Canvas/Canvas';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Socket>socket</Socket>
        <User />
        <Canvas />
      </div>
    );
  }
}

export default App;
