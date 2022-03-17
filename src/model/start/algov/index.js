export const option = {
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: 'Algorithm\nvisualization',
          fontSize: 120,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          lineHeight: 150,
          textAlign: 'center',
          fill: 'transparent',
          stroke: '#2151D1',
          lineWidth: 2,
        },
        keyframeAnimation: {
          duration: 4500,
          loop: true,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0],
              },
            },
            {
              percent: 0.8,
              style: {
                fill: 'transparent',
              },
            },
            {
              percent: 1,
              style: {
                fill: '#2151D1',
              },
            },
          ],
        },
      },
    ],
  },
};
