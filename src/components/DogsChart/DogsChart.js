import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

import "./DogsChart.scss";

const renderActiveShape = props => {
  // From http://recharts.org/en-US/examples
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, outerRadius, fill, name, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {name}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${value}%`}
      </text>
    </g>
  );
};

class DogsChart extends PureComponent {
  state = {
    activeIndex: 0
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    console.log(this.props);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const radius = (Math.min(width, height) * 0.65) / 2;

    return (
      <PieChart className="dogs-chart" width={width} height={height * 0.85}>
        <Pie
          dataKey="value"
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={this.props.breeds}
          cx={width / 2}
          cy={height / 2.5}
          onMouseEnter={this.onPieEnter}
          outerRadius={radius}
        >
          {this.props.breeds.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
export default DogsChart;
