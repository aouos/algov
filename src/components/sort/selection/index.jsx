import React, { memo, useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { Button, Row, Col, Slider } from 'tdesign-react';
import { PlayCircleIcon, RefreshIcon, StopCircleIcon } from 'tdesign-icons-react';

import { getSelectionSort } from 'model/sort/selection';
import { getRandomLength, getRandomArray } from 'utils/random';

import './style.less';

const SelectionSort = memo(() => {
  const [value, setValue] = useState(1);
  const [disabled, setDisabled] = useState(false);
  let getData = null;
  let myChart = null;

  useEffect(() => {
    setChartData(getRandomArray(getRandomLength()));

    return () => clearChartData();
  }, []);

  const setChartData = (array) => {
    getData = getSelectionSort(array);
    myChart = echarts.init(document.getElementById('algo'));

    myChart.setOption(getData.next().value);
  };

  const clearChartData = () => {
    getData && getData.return();
    myChart && (myChart = null);
  };

  const playAnimation = () => {
    setDisabled(true);

    const timer = setInterval(() => {
      const ret = getData.next();
      if (ret.done) {
        clearInterval(timer);
      } else {
        myChart.setOption(ret.value);
      }
    }, 1000);
  };

  return (
    <>
      <div id="algo"></div>

      <div className="contral-bar">
        <Row gutter={20}>
          <Col>
            <Button theme="default" icon={<RefreshIcon />} disabled></Button>
          </Col>

          <Col>
            <Button
              icon={!disabled ? <PlayCircleIcon /> : <StopCircleIcon />}
              theme="default"
              onClick={playAnimation}
              disabled={disabled}
            ></Button>
          </Col>

          <Col>
            <Slider
              className="contral-slider"
              value={value}
              min={1}
              max={5}
              onChange={setValue}
              disabled={true}
            ></Slider>
          </Col>
        </Row>
      </div>
    </>
  );
});

export default SelectionSort;
