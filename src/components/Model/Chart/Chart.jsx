import React from 'react';
import ReactECharts from 'echarts-for-react';
import { projection } from '../lib/projection';

export default function Chart({
  seriesData = [820, 932, 901, 934, 1290, 1330, 1320],
  forecast
}) {

  let projectedData = projection(seriesData, forecast)

  const option = {
    xAxis: {
      type: 'category',
      data: projectedData.map((item, index) => index)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: projectedData,
        type: 'line',
        smooth: true
      }
    ]
  };

  return <ReactECharts
    option={option}
    notMerge={true}
    lazyUpdate={true}
  />
}