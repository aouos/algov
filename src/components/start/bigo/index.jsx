import React, { memo, useEffect } from 'react';
import * as echarts from 'echarts';

import { option } from 'model/start/bigo';

const BigO = memo(() => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('start'));

    myChart.setOption(option);
  }, []);
  return <div id="start"></div>;
});

export default BigO;
