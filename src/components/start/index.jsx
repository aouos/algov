import React, { memo, useEffect } from 'react';
import * as echarts from 'echarts';

import { option } from 'model/start/welcome';

let myChart = null;

const AStart = memo(() => {
  useEffect(() => {
    myChart = echarts.init(document.getElementById('algo'));

    myChart.setOption(option);
  }, []);
  return <div id="algo">AStart</div>;
});

export default AStart;
