import React, { memo } from 'react';
import { Row, Button } from 'tdesign-react';
import { ChartBubbleIcon, CloudIcon } from 'tdesign-icons-react';

import './style.less';

const prefix = 'header-help';

const AHelp = memo(() => {
  const gotoTDesign = () => {
    window.open('https://tdesign.tencent.com/react/overview');
  };

  const gotoECharts = () => {
    window.open('https://echarts.apache.org/');
  };

  return (
    <div className={`${prefix}`}>
      <Row>
        <Button variant="text" icon={<CloudIcon />} onClick={gotoTDesign}>
          TDesign
        </Button>
      </Row>
      <Row>
        <Button variant="text" icon={<ChartBubbleIcon />} onClick={gotoECharts}>
          ECharts
        </Button>
      </Row>
    </div>
  );
});

export default AHelp;
