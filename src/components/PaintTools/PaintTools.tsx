import * as React from 'react'
import { Component } from 'react'

import './PaintTools.css'
import { IPaintMethod } from '../../declarations'

export default class PaintTools extends Component<Props> {
  colorInput: HTMLInputElement
  lineWidthInput: HTMLInputElement

  onChange = () => {
    const color = this.colorInput.value
    const lineWidth = Number.parseInt(this.lineWidthInput.value, 10)

    this.props.onChange({
      color,
      lineWidth,
    })
  }

  render() {
    return (
      <div>
        <input
          type="color"
          defaultValue={this.props.color}
          ref={input => {
            this.colorInput = input as HTMLInputElement
          }}
          onChange={this.onChange}
        />
        <input
          type="number"
          max="20"
          min="2"
          defaultValue={this.props.lineWidth.toFixed(0)}
          ref={input => {
            this.lineWidthInput = input as HTMLInputElement
          }}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export interface Props {
  color: string
  lineWidth: number
  onChange: (paintMethod: IPaintMethod) => void
}
