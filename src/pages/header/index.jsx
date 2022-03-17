import React, { memo } from 'react';
import { Row, Col, Button, Popup } from 'tdesign-react';
import { LogoGithubIcon, SettingIcon, HelpCircleIcon, JumpIcon } from 'tdesign-icons-react';

import AHelp from './help';

const AHeader = memo(() => {
  const gotoGithub = () => {
    window.open('https://github.com/aouos/algo-v');
  };

  return (
    <div>
      <Row gutter={10}>
        <Col>
          <Popup showArrow content={<AHelp></AHelp>}>
            <Button shape="square" size="large" variant="text">
              <JumpIcon />
            </Button>
          </Popup>
        </Col>
        <Col>
          <Button shape="square" size="large" variant="text">
            <HelpCircleIcon />
          </Button>
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
