import React, { Component } from 'react';
import { Rect, Text, Group, Circle, Line } from 'react-konva';
import Konva from 'konva';

const nodeProperties = {
  width: 150,
  height: 150,
  strokeWidth: 1,
  fill: "rgba(255, 255, 255, 0.2)"
}

class NodeShape extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Rect
        width={nodeProperties.width}
        height={nodeProperties.height}
        fill={nodeProperties.fill}
        stroke={this.props.color}
        strokeWidth={nodeProperties.strokeWidth}
      />
    );
  }
}

export default NodeShape;