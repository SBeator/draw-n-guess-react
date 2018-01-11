import * as React from 'react';
import { Component, MouseEvent } from 'react';

import { IDrawData, IPosition } from '../../declarations';

class Canvas extends Component<Props> {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  painting: boolean;
  paintStart: IPosition;
  paintEnd: IPosition;

  constructor(props: Props) {
    super(props);

    this.setContext = this.setContext.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    const { width, height } = this.getCanvasRect();

    this.props.dataLines.forEach(dataLines => {
      const { start, end, color, lineWidth } = dataLines;

      this.context.beginPath();
      this.context.lineWidth = lineWidth;
      this.context.moveTo(start.x * width, start.y * height);
      this.context.lineTo(end.x * width, end.y * height);
      this.context.strokeStyle = color;
      this.context.stroke();
    });
  }

  onMouseDown(event: MouseEvent<HTMLCanvasElement>) {
    this.painting = true;
    const { left, top, width, height } = this.getCanvasRect();
    const { pageX, pageY } = event;

    this.paintStart = {
      x: (pageX - left) / width,
      y: (pageY - top) / height,
    };

    console.log(this.paintStart);
  }

  onMouseUp() {
    this.painting = false;
  }

  onMouseMove(event: MouseEvent<HTMLCanvasElement>) {
    if (this.painting) {
      const { left, top, width, height } = this.getCanvasRect();
      const { pageX, pageY } = event;
      this.paintEnd = {
        x: (pageX - left) / width,
        y: (pageY - top) / height,
      };

      console.log(this.paintEnd);

      this.paintStart = this.paintEnd;
    }
  }

  setContext(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  getCanvasRect() {
    return this.canvas.getBoundingClientRect();
  }

  render() {
    return (
      <div>
        <canvas
          ref={this.setContext}
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}
        />
      </div>
    );
  }
}

export interface Props {
  dataLines: IDrawData[];
}

export default Canvas;
