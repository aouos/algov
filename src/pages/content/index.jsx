import React, { memo } from 'react';

import './style.less';
import BubbleSort from 'components/sort/bubble';

const prefix = 'content';

const AContent = memo(() => {
  return (
    <div className={`${prefix}`}>
      <div id="algo">
        <BubbleSort></BubbleSort>
      </div>
    </div>
  );
});

export default AContent;
