import * as React from 'react';
import './App.css';

import { Socket, User, Canvas, Chat } from './containers';
import { Overlay } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Socket>socket</Socket>
        <User />
        <Canvas />
        <Chat />
        <Overlay>lalala</Overlay>
      </div>
    );
  }
}

export default App;
