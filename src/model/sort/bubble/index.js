import { columnar } from 'model/basic';
import { sortArray } from 'common/array';
import { setActiveStyle, setIndexStyle, setSortedStyle } from 'utils/itemstyle';

const _array = [...sortArray];
const _len = _array.length;

export function* getBubbleData() {
  yield _array;

  for (let j = _len - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      const treeNode = JSON.parse(JSON.stringify(columnar));
      const xData = new Array(_len).fill('');
      xData[j] = 'j';
      xData[i] = 'i';

      const beforeS = setSortedStyle(j, setIndexStyle(i, _array));
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
