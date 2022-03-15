import React, { memo } from 'react';
import { Row, Col, Button } from 'tdesign-react';
import { LogoGithubIcon, SettingIcon, HelpCircleIcon } from 'tdesign-icons-react';

const AHeader = memo(() => {
  return (
    <div>
      <Row gutter={10}>
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
