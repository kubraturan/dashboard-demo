import React from 'react';

import {
  Chart,
  Series,
  Legend,
  ValueAxis,
  VisualRange,
  Label,
  ConstantLine,
  Export
} from 'devextreme-react/chart';
import { ciroData } from './data.js';

export default class CiroChart extends React.Component {
  render() {
    return (
      <Chart
        id="chart"
        style={{'height': 220, 'width': '100%'}}
        dataSource={ciroData}>
        <Series
          argumentField="day"
          valueField="value"
          type="bar"
          color="#71bb03"
        />
        <Legend visible={false} />
      </Chart>
    );
  }
}

