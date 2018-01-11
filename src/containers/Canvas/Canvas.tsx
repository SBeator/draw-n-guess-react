import * as React from 'react';
import { Component } from 'react';

import { IDrawData } from '../../declarations';

class Canvas extends Component<Props> {
  context: CanvasRenderingContext2D;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { width, height } = this.context.canvas.getBoundingClientRect();

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

  render() {
    return (
      <div>
        <canvas
          ref={canvas => {
            this.context = (canvas as HTMLCanvasElement).getContext(
              '2d'
            ) as CanvasRenderingContext2D;
          }}
        />
      </div>
    );
  }
}

export interface Props {
  dataLines: IDrawData[];
}

export default Canvas;
