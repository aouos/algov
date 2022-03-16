import React, { useEffect, memo } from 'react';
import * as echarts from 'echarts';

import { getBubbleData } from 'model/sort/bubble';
let myChart = null;

const bubbleSort = memo(() => {
  useEffect(() => {
    myChart = echarts.init(document.getElementById('algo'));
    myChart.setOption({});

    const data = getBubbleData();
    data.next();

    const timer = setInterval(() => {
      const ret = data.next();
      if (ret.done) {
        clearInterval(timer);
      } else {
        myChart.setOption(ret.value);
      }
    }, 2000);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', myChart.resize());
  });

  return <></>;
});

export default bubbleSort;
