const columnar = {
  animation: false,
  title: {
    text: '',
  },
  tooltip: {
    show: false,
  },
  xAxis: {
    data: [],
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      fontWeight: 'bold',
    },
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'bar',
      barMaxWidth: 60,
      barCategoryGap: '50%',
      itemStyle: {
        barBorderRadius: 3,
        color: '#2151D1',
      },
      data: [],
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
};

export { columnar };
