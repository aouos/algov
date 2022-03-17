import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import logo from 'assets/favicon.svg';
import './style.less';

const prefix = 'menu-logo';

const ALogo = memo((props) => {
  const { isShow = true } = props;
  const history = useHistory();

  const toHome = () => {
    history.push('/');
  };

  return (
    <div className={`${prefix}`} onClick={toHome}>
      <img className={`${prefix}-img`} src={logo}></img>
      {isShow && <p className={`${prefix}-title`}>Algo-V</p>}
    </div>
  );
});

export default ALogo;
