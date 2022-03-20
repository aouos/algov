import React, { memo } from 'react';
import { Row, Col, Button, Popup } from 'tdesign-react';
import { LogoGithubIcon, SettingIcon, CloudIcon, ChartIcon } from 'tdesign-icons-react';

const AHeader = memo(() => {
  const gotoGithub = () => {
    window.open('https://github.com/aouos/algo-v');
  };

  const gotoTDesign = () => {
    window.open('https://tdesign.tencent.com/react/overview');
  };

  const gotoECharts = () => {
    window.open('https://echarts.apache.org/');
  };

  return (
    <div>
      <Row gutter={10}>
        <Col>
          <Popup trigger="hover" content="TDesign" showArrow>
            <Button shape="square" size="large" variant="text" onClick={gotoTDesign}>
              <CloudIcon />
            </Button>
          </Popup>
        </Col>
        <Col>
          <Popup trigger="hover" content="ECharts" showArrow>
            <Button shape="square" size="large" variant="text" onClick={gotoECharts}>
              <ChartIcon />
            </Button>
          </Popup>
        </Col>
        <Col>
          <Button shape="square" size="large" variant="text">
            <SettingIcon />
          </Button>
        </Col>
        <Col>
          <Button shape="square" size="large" variant="text" onClick={gotoGithub}>
            <LogoGithubIcon />
          </Button>
        </Col>
      </Row>
    </div>
  );
});

export default AHeader;
