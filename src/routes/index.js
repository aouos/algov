import AStart from 'components/start';
import BubbleSort from 'components/sort/bubble';
import AError from 'components/error';

export const routes = [
  {
    path: '/start',
    component: AStart,
  },
  {
    path: '/sort/bubble',
    component: BubbleSort,
  },
  {
    path: '/sort/selection',
    component: AError,
  },
  {
    path: '/sort/insertion',
    component: AError,
  },
  {
    path: '/sort/shell',
    component: AError,
  },
  {
    path: '/sort/merge',
    component: AError,
  },
  {
    path: '/sort/quick',
    component: AError,
  },
  {
    path: '/sort/heap',
    component: AError,
  },
  {
    path: '/search/binary',
    component: AError,
  },
  {
    path: '/sort/shell',
    component: AError,
  },
  {
    path: '/leetcode/0001',
    component: AError,
  },
];
