import React, { memo } from 'react';
import { Row, Button } from 'tdesign-react';

import './style.less';

const prefix = 'header-help';

const AHelp = memo(() => {
  return (
    <div className={`${prefix}`}>
      <Row>
        <Button variant="text">TDesign</Button>
      </Row>
      <Row>
        <Button variant="text">ECharts</Button>
      </Row>
    </div>
  );
});

export default AHelp;
