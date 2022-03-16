// @ts-nocheck
import React, { memo, useState } from 'react';
import { Menu } from 'tdesign-react';
import { AppIcon, OrderAscendingIcon, SearchIcon, ViewListIcon, CodeIcon } from 'tdesign-icons-react';

import Logo from './logo';

const { SubMenu, MenuItem } = Menu;

const AMenu = memo(() => {
  const [active, setActive] = useState('0');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Menu
      value={active}
      collapsed={collapsed}
      expandMutex={false}
      onChange={(v) => setActive(v)}
      operations={<ViewListIcon className="t-menu__operations-icon" onClick={() => setCollapsed(!collapsed)} />}
      logo={<Logo isShow={!collapsed} />}
    >
      <MenuItem value="0" icon={<AppIcon />}>
        Started
      </MenuItem>

      <SubMenu value="1" title={<span>Sort</span>} icon={<OrderAscendingIcon />}>
        <MenuItem value="1-1">
          <span>bubbleSort</span>
        </MenuItem>
        <MenuItem value="1-2">
          <span>insertionSort</span>
        </MenuItem>
        <MenuItem value="1-3">
          <span>selectionSort</span>
        </MenuItem>
        <MenuItem value="1-4">
          <span>shellSort</span>
        </MenuItem>
        <MenuItem value="1-5">
          <span>mergeSort</span>
        </MenuItem>
        <MenuItem value="1-6">
          <span>quickSort</span>
        </MenuItem>
        <MenuItem value="1-7">
          <span>heapSort</span>
        </MenuItem>
      </SubMenu>

      <SubMenu value="2" title={<span>Search</span>} icon={<SearchIcon />}>
        <MenuItem value="2-1">
          <span>binarySearch</span>
        </MenuItem>
      </SubMenu>

      <SubMenu value="3" title={<span>LeetCode</span>} icon={<CodeIcon />}>
        <MenuItem value="3-1">
          <span>0001-twoSum</span>
        </MenuItem>
      </SubMenu>
    </Menu>
  );
});

export default AMenu;
