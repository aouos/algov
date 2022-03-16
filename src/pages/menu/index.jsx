// @ts-nocheck
import React, { memo, useState } from 'react';
import { Menu } from 'tdesign-react';
import { ViewListIcon } from 'tdesign-icons-react';
import { useHistory, useLocation } from 'react-router-dom';

import { menus } from 'routes/menu';

import Logo from './logo';

const { SubMenu, MenuItem } = Menu;

const renderMenuItem = (children) => {
  return children.map((item) => {
    const history = useHistory();
    const { key, label, path } = item;

    return (
      <MenuItem
        key={key}
        value={key}
        onClick={() => {
          history.push(path);
        }}
      >
        {label}
      </MenuItem>
    );
  });
};

const renderSumMenu = (menus) => {
  return menus.map((item) => {
    const { key, Icon, label, children } = item;

    return (
      <SubMenu key={key} value={key} icon={<Icon />} title={label}>
        {renderMenuItem(children)}
      </SubMenu>
    );
  });
};

const AMenu = memo(() => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Menu
      value={location.pathname}
      collapsed={collapsed}
      expandMutex={false}
      operations={<ViewListIcon className="t-menu__operations-icon" onClick={() => setCollapsed(!collapsed)} />}
      logo={<Logo isShow={!collapsed} />}
    >
      {renderSumMenu(menus)}
    </Menu>
  );
});

export default AMenu;
