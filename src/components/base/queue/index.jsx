import React, { memo, useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import { Button, Row, Col, Popup } from 'tdesign-react';

import { baseColumnar } from 'model/basic';
import { getRandomArray, getRandomNumber } from 'utils/random';

import './style.less';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const AQueue = memo(() => {
  const [disabled, setDisabled] = useState(false);
  const [array, setArray] = useState(getRandomArray(5));
  let myChart = null;
  const TreeNode = JSON.parse(JSON.stringify(baseColumnar));

  useEffect(() => {
    myChart = echarts.init(document.getElementById('algo'));
  });

  useEffect(() => {
    TreeNode.series[0].data = array;
    myChart.setOption(TreeNode);

    return () => clearChartData();
  }, [array]);

  const clearChartData = () => {
    myChart && (myChart = null);
  };

  const handlePush = () => {
    setDisabled(true);

    setTimeout(() => {
      const _array = [...array, getRandomNumber()];

      setArray(_array);
      setDisabled(false);
    }, 1000);
  };

  const handlePop = () => {
    setDisabled(true);

    setTimeout(() => {
      const _array = [...array];
      _array.shift();

      setArray(_array);
      setDisabled(false);
    }, 1000);
  };

  return (
    <>
      <div id="algo"></div>

      <div className="contral-bar">
        <Row gutter={20}>
          <Col>
            <Popup showArrow content={array.length ? 'false' : 'true'}>
              <Button theme="default">isEmpty()</Button>
            </Popup>
          </Col>

          <Col>
            <Popup showArrow content={array.length}>
              <Button theme="warning">size()</Button>
            </Popup>
          </Col>

          <Col>
            <Button theme="danger" onClick={handlePop} disabled={array.length === 0 || disabled}>
              shift()
            </Button>
          </Col>

          <Col>
            <Button theme="success" onClick={handlePush} disabled={array.length >= 12 || disabled}>
              push()
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
});

export default AQueue;
