import * as React from 'react'
import { Component } from 'react'

import './PaintTools.css'

export interface Props {
  children: React.ReactNode
}

export default class PaintTools extends Component {
  onColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target
    console.debug(input.value)
  }

  render() {
    return (
      <div>
        <input type="color" onChange={this.onColorChange} />
      </div>
    )
  }
}
