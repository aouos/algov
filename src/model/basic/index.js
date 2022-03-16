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
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'bar',
      barMaxWidth: 40,
      barCategoryGap: '20%',
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
