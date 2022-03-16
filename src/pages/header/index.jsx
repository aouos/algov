import React, { memo } from 'react';
import { Row, Col, Button, Popup } from 'tdesign-react';
import { LogoGithubIcon, SettingIcon, HelpCircleIcon, InternetIcon } from 'tdesign-icons-react';

import AHelp from './help';

const AHeader = memo(() => {
  return (
    <div>
      <Row gutter={10}>
        <Col>
          <Popup showArrow content={<AHelp></AHelp>}>
            <Button shape="square" size="large" variant="text">
              <InternetIcon />
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
          <Button shape="square" size="large" variant="text">
            <LogoGithubIcon />
          </Button>
        </Col>
      </Row>
    </div>
  );
});

export default AHeader;
