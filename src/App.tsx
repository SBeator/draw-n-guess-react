import * as React from 'react'
import './App.css'

import { Socket, User, Canvas, Chat } from './containers'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Socket>socket</Socket>
        <User />
        <Canvas />
        <Chat />
      </div>
    )
  }
}

export default App
