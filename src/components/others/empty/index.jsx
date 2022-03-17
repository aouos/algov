import React, { memo } from 'react';

import error from 'assets/svg/empty.svg';

import './style.less';

const AEmpty = memo(() => {
  return (
    <div className="empty-page">
      <img src={error} />
    </div>
  );
});

export default AEmpty;
