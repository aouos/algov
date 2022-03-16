import { columnar } from 'model/basic';
import { sortArray } from 'common/array';

const _array = [...sortArray];
const _len = _array.length;
const result = [];

export function* getBubbleData() {
  yield _array;

  for (let j = _len - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      const treeNode = JSON.parse(JSON.stringify(columnar));
      const xData = new Array(_len).fill('');
      xData[j] = 'j';
      xData[i] = 'i';

      const beforeS = [..._array];
      treeNode.xAxis.data = xData;
      treeNode.series[0].data = beforeS;

      yield treeNode;

      if (_array[i] > _array[i + 1]) {
        const temp = _array[i];
        _array[i] = _array[i + 1];
        _array[i + 1] = temp;
      }

      const afterS = [..._array];

      treeNode.xAxis.data = xData;
      treeNode.series[0].data = afterS;
      result.push(treeNode);

      yield treeNode;
    }
  }

  return result;
}
