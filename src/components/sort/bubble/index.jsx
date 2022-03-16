import React, { useEffect, useState, memo } from 'react';
import * as echarts from 'echarts';
import { Button, Row, Col, Slider } from 'tdesign-react';
import { CaretRightIcon, RefreshIcon, StopCircleIcon } from 'tdesign-icons-react';

import { getBubbleData } from 'model/sort/bubble';

import './style.less';

let myChart = null;

const bubbleSort = memo(() => {
  const [value, setValue] = useState(2);
  const [disabled, setDisabled] = useState(false);
  const getData = getBubbleData();

  useEffect(() => {
    myChart = echarts.init(document.getElementById('algo'));
    getData.next();

    const ret = getData.next();
    myChart.setOption(ret.value);
  }, []);

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
    <div className="contral-bar">
      <Row gutter={20}>
        <Col>
          <Button icon={<RefreshIcon />} disabled={true}></Button>
        </Col>

        <Col>
          <Button
            icon={!disabled ? <CaretRightIcon /> : <StopCircleIcon />}
            onClick={playAnimation}
            disabled={disabled}
          ></Button>
        </Col>

        <Col>
          <Slider className="contral-slider" value={value} min={1} max={5} onChange={setValue} disabled={true}></Slider>
        </Col>
      </Row>
    </div>
  );
});

export default bubbleSort;
