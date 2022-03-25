import React, { memo, useEffect } from 'react';
import * as echarts from 'echarts/core';

import { GridComponent, LegendComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LegendComponent, LineChart, CanvasRenderer, UniversalTransition]);

import { option } from 'model/start/bigo';

const BigO = memo(() => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('start'));

    myChart.setOption(option);
  }, []);
  return <div id="start"></div>;
});

export default BigO;
