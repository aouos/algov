import React, { memo } from 'react';

import logo from 'assets/favicon.svg';
import './style.less';

const prefix = 'menu-logo';

const ALogo = memo((props) => {
  const { isShow = true } = props;

  return (
    <div className={`${prefix}`}>
      <img className={`${prefix}-img`} src={logo}></img>
      {isShow && <p className={`${prefix}-title`}>Algo-V</p>}
    </div>
  );
});

export default ALogo;
