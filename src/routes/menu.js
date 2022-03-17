import { AppIcon, OrderAscendingIcon, SearchIcon, CodeIcon } from 'tdesign-icons-react';

export const menus = [
  {
    key: 'start',
    label: 'Started',
    Icon: AppIcon,
    children: [
      {
        key: '/start',
        label: 'Algo-V',
        path: '/start',
      },
      {
        key: '/bigo',
        label: 'Big-O',
        path: '/bigo',
      },
    ],
  },
  {
    key: 'sort',
    label: 'Sort',
    Icon: OrderAscendingIcon,
    children: [
      {
        key: '/sort/bubble',
        label: 'bubbleSort',
        path: '/sort/bubble',
      },
      {
        key: '/sort/insertion',
        label: 'insertionSort',
        path: '/sort/insertion',
      },
      {
        key: '/sort/selection',
        label: 'selectionSort',
        path: '/sort/selection',
      },
      {
        key: '/sort/shell',
        label: 'shellSort',
        path: '/sort/shell',
      },
      {
        key: '/sort/merge',
        label: 'mergeSort',
        path: '/sort/merge',
      },
      {
        key: '/sort/quick',
        label: 'quickSort',
        path: '/sort/quick',
      },
      {
        key: '/sort/heap',
        label: 'heapSort',
        path: '/sort/heap',
      },
    ],
  },
  {
    key: 'search',
    label: 'Search',
    Icon: SearchIcon,
    children: [
      {
        key: '/search/binary',
        label: 'binarySearch',
        path: '/search/binary',
      },
    ],
  },
  {
    key: 'leetcode',
    label: 'LeetCode',
    Icon: CodeIcon,
    children: [
      {
        key: '/leetcode/0001',
        label: '0001-twoSum',
        path: '/leetcode/0001',
      },
    ],
  },
];
