import AStart from 'components/start';
import ABigO from 'components/start/bigo';
import BubbleSort from 'components/sort/bubble';
import AError from 'components/others/error';
import AEmpty from 'components/others/empty';
import InsertionSort from 'components/sort/insertion';
import SelectionSort from 'components/sort/selection';

export const routes = [
  {
    path: '/start',
    component: AStart,
  },
  {
    path: '/bigo',
    component: ABigO,
  },
  {
    path: '/sort/bubble',
    component: BubbleSort,
  },
  {
    path: '/sort/selection',
    component: SelectionSort,
  },
  {
    path: '/sort/insertion',
    component: InsertionSort,
  },
  {
    path: '/sort/shell',
    component: AError,
  },
  {
    path: '/sort/merge',
    component: AEmpty,
  },
  {
    path: '/sort/quick',
    component: AError,
  },
  {
    path: '/sort/heap',
    component: AEmpty,
  },
  {
    path: '/search/binary',
    component: AError,
  },
  {
    path: '/leetcode/0001',
    component: AEmpty,
  },
  {
    path: '*',
    component: AError,
  },
];
