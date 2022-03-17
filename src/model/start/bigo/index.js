export const option = {
  legend: {
    top: '2%',
    itemGap: 20,
  },
  xAxis: {
    type: 'category',
    data: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  yAxis: {
    max: 60,
    splitNumber: 10,
  },
  series: [
    {
      name: 'O(1)',
      type: 'line',
      data: [1, 1, 1, 1, 1, 1, 1, 1],
      smooth: true,
    },
    {
      name: 'O(n)',
      type: 'line',
      data: [1, 2, 3, 4, 5, 6, 7, 8],
      smooth: true,
    },
    {
      name: 'O(n^2)',
      type: 'line',
      data: [1, 4, 9, 16, 25, 36, 49, 64],
      smooth: true,
    },
    {
      name: 'O(logn)',
      type: 'line',
      data: [0, 1, 1.58, 2, 2.32, 2.58, 2.8, 3],
      smooth: true,
    },
    {
      name: 'O(2^n)',
      type: 'line',
      data: [2, 4, 8, 16, 32, 64, 128],
      smooth: true,
    },
    {
      name: 'O(n!)',
      type: 'line',
      data: [1, 2, 6, 24, 120, 720],
      smooth: true,
    },
  ],
};
