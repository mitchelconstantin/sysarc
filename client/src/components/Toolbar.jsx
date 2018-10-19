import React, { Component } from 'react';
import { Rect, Text, Group, Circle, Line } from 'react-konva';
import Konva from 'konva';
import dummyData from './dummyDataForReact.jsx'

const toolbarProperties = {
  width: 175,
  height: 175,
  strokeWidth: 1,
  fill: "rgb(232, 232, 232)",
  border: "1px solid #394256"
};

const textProperties = {
  width: 150,
  height: 100,
  fill: '#394256',
  align: 'center',
  y: 20
};

const nodeTypes = ['CLIENT', 'SERVER', 'DATABASE', 'SERVICES', 'MISC'];

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <Group
        draggable={true}
        x={this.props.canvasWidth - toolbarProperties.width}
      >
        <Rect
          cornerRadius={15}
          width={toolbarProperties.width}
          height={toolbarProperties.height}
          fill={toolbarProperties.fill}
          stroke={"#394256"}
          strokeWidth={1}
        />
        {nodeTypes.map((type, i) => (
          <Text
            key={i}
            onClick={(e) => this.props.prepNewNode(type, e)}
            text={`${type} +`}
            fill={textProperties.fill}
            width={textProperties.width}
            align={textProperties.left}
            fontSize={16}
            x={27}
            y={textProperties.y * (i + 1) + 5}
          />
        ))}
      </Group>
    );
  }
}

export default Toolbar;
