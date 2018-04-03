import * as React from 'react'
import { Component, MouseEvent } from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './Canvas.css'

import { paint as paintAction } from '../../redux/actions'
import { PaintTools } from '../../components'
import { IPaintMethod } from '../../declarations'

import {
  IDrawData,
  IPosition,
  IRootState,
  IPaintAction,
} from '../../declarations'

const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 600

class Canvas extends Component<Props, State> {
  canvas: HTMLCanvasElement
  painting: boolean
  paintStart: IPosition
  paintEnd: IPosition

  state = {
    paintMethod: {
      color: '#000',
      lineWidth: 2,
    },
  }

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    this.canvas.width = CANVAS_WIDTH
    this.canvas.height = CANVAS_HEIGHT
  }

  componentDidUpdate(prevProps: Props) {
    const prevDrawDatas = prevProps.paint.drawDatas
    const currentDrawDatas = this.props.paint.drawDatas
    const moreDrawDatas = currentDrawDatas.slice(prevDrawDatas.length)

    moreDrawDatas.forEach(this.drawLine)
  }

  onMouseDown = (event: MouseEvent<HTMLCanvasElement>) => {
    this.painting = true
    const { left, top, width, height } = this.getCanvasRect()
    const { pageX, pageY } = event

    this.paintStart = {
      x: (pageX - left) / width,
      y: (pageY - top) / height,
    }
  }

  onMouseUp = () => {
    this.painting = false
  }

  onMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
    if (this.painting && event.buttons) {
      const { left, top, width, height } = this.getCanvasRect()
      const { pageX, pageY } = event
      this.paintEnd = {
        x: (pageX - left) / width,
        y: (pageY - top) / height,
      }

      const start = Object.assign({}, this.paintStart)
      const end = Object.assign({}, this.paintEnd)

      this.props.draw({
        start,
        end,
        color: this.state.paintMethod.color,
        lineWidth: this.state.paintMethod.lineWidth,
      })

      this.paintStart = this.paintEnd
    }
  }

  drawLine = (dataLine: IDrawData) => {
    const { start, end, color, lineWidth } = dataLine

    const context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    context.beginPath()
    context.lineWidth = lineWidth
    context.lineCap = 'round'
    context.moveTo(start.x * CANVAS_WIDTH, start.y * CANVAS_HEIGHT)
    context.lineTo(end.x * CANVAS_WIDTH, end.y * CANVAS_HEIGHT)
    context.strokeStyle = color
    context.stroke()
  }

  onPaintMethodChange = (paintMethod: IPaintMethod) => {
    this.setState({
      paintMethod,
    })
  }

  getCanvasRect() {
    return this.canvas.getBoundingClientRect()
  }

  render() {
    return (
      <div>
        <PaintTools
          onChange={this.onPaintMethodChange}
          {...this.state.paintMethod}
        />
        <canvas
          ref={canvas => {
            this.canvas = canvas as HTMLCanvasElement
          }}
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}
        />
      </div>
    )
  }
}

interface State {
  paintMethod: IPaintMethod
}

export interface Props {
  paint: {
    drawDatas: IDrawData[]
  }
  draw: (drawData: IDrawData) => IPaintAction
}

const mapStateToProps = (state: IRootState) => ({
  paint: state.paint,
})

const mapDispatchToProps = (dispatch: Dispatch<IRootState>) =>
  bindActionCreators(
    {
      draw: paintAction.draw,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
