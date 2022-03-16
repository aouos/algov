import React, { memo } from 'react';

import error from 'assets/svg/404.svg';

import './style.less';

const AError = memo(() => {
  return (
    <div className="error-page">
      <img src={error} />
    </div>
  );
});

export default AError;
