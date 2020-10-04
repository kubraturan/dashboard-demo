import React from 'react';

import PieChart, {
  Series,
  Legend,
} from 'devextreme-react/pie-chart';

import { data } from './data.js';
import CenterTemplate from './CenterTemplate.js';

export default class DoughnutChart extends React.Component {
  render() {
        const {
            palette,
            value
        } = this.props;
    return (
        <div >
            <PieChart
                id="pie-chart"
                palette={palette}
                style={{width: 80, height: 80, color: 'red'}}
                dataSource={data}
                innerRadius={0.65}
                centerRender={() => CenterTemplate(value)}
                type="doughnut"
                >
                <Series
                    argumentField="mark"
                    valueField="total">
                </Series>
                <Legend visible={false}></Legend>
            </PieChart>
        </div>
    );
  }
};
