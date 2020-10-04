import React from 'react';

import { 
    Chart,
    CommonSeriesSettings,
    Series,
    Legend,
    ArgumentAxis,
    ValueAxis 
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

export default class OperationChart extends React.Component {
  render() {
    return (
        <Chart
            id="chart"
            style={{'height': 200}}
            dataSource={dataSource}>
            <CommonSeriesSettings argumentField="date" type="line" />
            <Series valueField="close"/>
            <Legend visible={false} />
            <ArgumentAxis argumentType="day" />
            <ValueAxis visible={false} />
        </Chart>
    );
  }
};
