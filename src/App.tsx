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
        <Canvas
          dataLines={[
            {
              start: { x: 0.3, y: 0.3 },
              end: { x: 0.7, y: 0.7 },
              color: '#000',
              lineWidth: 2,
            },
            {
              start: { x: 0.7, y: 0.7 },
              end: { x: 0.6, y: 0.2 },
              color: 'green',
              lineWidth: 2,
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
