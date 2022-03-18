import { columnar } from 'model/basic';
import { setActiveStyle, setIndexStyle, setSortedStyle, setBeforeSortedStyle } from 'utils/itemstyle';

export function* getInsertionData(array) {
  const _array = [...array];
  const _len = _array.length;
  const initTreeNode = JSON.parse(JSON.stringify(columnar));
  initTreeNode.series[0].data = [..._array];

  yield initTreeNode;

  for (let i = 1; i < _len; i++) {
    const treeNode = JSON.parse(JSON.stringify(columnar));
    const xData = new Array(_len).fill('');
    const beforeS = setIndexStyle(i, _array);
    xData[i] = 'i';
    treeNode.xAxis.data = xData;
    treeNode.series[0].data = beforeS;

    yield treeNode;

    for (let j = i; j > 0; j--) {
      const treeNode = JSON.parse(JSON.stringify(columnar));
      const xData = new Array(_len).fill('');
      const beforeS = setIndexStyle(j, _array);
      xData[i] = j === i ? '' : 'i';
      xData[j] = j === i ? 'j = i' : 'j';
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
