import { columnar } from 'model/basic';
import { setActiveStyle, setIndexStyle, setSortedStyle } from 'utils/itemstyle';

export function* getBubbleData(array) {
  const _array = [...array];
  const _len = _array.length;
  const initTreeNode = JSON.parse(JSON.stringify(columnar));
  initTreeNode.series[0].data = [..._array];

  yield initTreeNode;

  for (let j = _len - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      const treeNode = JSON.parse(JSON.stringify(columnar));
      const xData = new Array(_len).fill('');
      const beforeS = setSortedStyle(j, setIndexStyle(i, _array));
      xData[j] = 'j';
      xData[i] = 'i';
      treeNode.xAxis.data = xData;
      treeNode.series[0].data = beforeS;

      yield treeNode;

      if (_array[i] > _array[i + 1]) {
        const changeS = setSortedStyle(j, setActiveStyle(i, _array));
        treeNode.series[0].data = changeS;

        yield treeNode;

        const temp = _array[i];
        _array[i] = _array[i + 1];
        _array[i + 1] = temp;
      }

      const afterS = setSortedStyle(j, _array);
      treeNode.series[0].data = afterS;

      yield treeNode;
    }
  }

  const treeNode = JSON.parse(JSON.stringify(columnar));
  treeNode.series[0].data = setSortedStyle(-1, _array);

  yield treeNode;
}
