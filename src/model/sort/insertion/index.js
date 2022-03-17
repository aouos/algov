import { columnar } from 'model/basic';
import { sortArray } from 'common/array';
import { setActiveStyle, setIndexStyle, setSortedStyle, setBeforeSortedStyle } from 'utils/itemstyle';

const _array = [...sortArray];
const _len = _array.length;

export function* getInsertionData() {
  const initTreeNode = JSON.parse(JSON.stringify(columnar));
  initTreeNode.series[0].data = [..._array];

  yield initTreeNode;

  for (let i = 1; i < _len; i++) {
    const treeNode = JSON.parse(JSON.stringify(columnar));
    const xData = new Array(_len).fill('');

    xData[i] = 'i';
    const beforeS = setIndexStyle(i, _array);
    treeNode.xAxis.data = xData;
    treeNode.series[0].data = beforeS;

    yield treeNode;

    for (let j = i; j > 0; j--) {
      const treeNode = JSON.parse(JSON.stringify(columnar));
      const xData = new Array(_len).fill('');

      xData[i] = j === i ? '' : 'i';
      xData[j] = j === i ? 'j = i' : 'j';
      const beforeS = setIndexStyle(j, _array);
      treeNode.xAxis.data = xData;
      treeNode.series[0].data = beforeS;

      yield treeNode;

      if (_array[j] < _array[j - 1]) {
        const changeS = setActiveStyle(j, _array);
        treeNode.series[0].data = changeS;

        yield treeNode;

        [_array[j], _array[j - 1]] = [_array[j - 1], _array[j]];
      } else {
        break;
      }
    }

    const changeSorted = setBeforeSortedStyle(i + 1, _array);
    treeNode.series[0].data = changeSorted;

    yield treeNode;
  }

  const treeNode = JSON.parse(JSON.stringify(columnar));
  treeNode.series[0].data = setSortedStyle(-1, _array);
  yield treeNode;
}
