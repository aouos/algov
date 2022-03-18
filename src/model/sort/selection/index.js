import { columnar } from 'model/basic';
import { setActiveStyle, setIndexStyle, setSortedStyle, setBeforeSortedStyle } from 'utils/itemstyle';

export function* getSelectionSort(array) {
  const _array = [...array];
  const _len = _array.length;
  const initTreeNode = JSON.parse(JSON.stringify(columnar));
  initTreeNode.series[0].data = [..._array];

  yield initTreeNode;

  for (let i = 0; i < _len; i++) {
    let minIndex = i;

    const treeNode = JSON.parse(JSON.stringify(columnar));
    const xData = new Array(_len).fill('');
    const beforeS = setBeforeSortedStyle(i, setIndexStyle(i, _array));
    xData[i] = 'min = i';
    treeNode.xAxis.data = xData;
    treeNode.series[0].data = beforeS;

    yield treeNode;

    for (let j = i + 1; j < _len; j++) {
      const xDataJ = new Array(_len).fill('');
      const beforeS = setBeforeSortedStyle(i, setIndexStyle(minIndex, _array));
      xDataJ[i] = 'i';
      xDataJ[j] = 'j';
      xDataJ[minIndex] = minIndex === i ? 'min = i' : 'min';
      treeNode.xAxis.data = xDataJ;
      treeNode.series[0].data = beforeS;

      yield treeNode;

      if (_array[j] < _array[minIndex]) {
        const beforeS = setBeforeSortedStyle(i, setActiveStyle(j, _array));
        treeNode.series[0].data = beforeS;

        yield treeNode;

        minIndex = j;

        const xDataM = new Array(_len).fill('');
        xDataM[i] = 'i';
        xDataM[minIndex] = 'min = j';
        treeNode.xAxis.data = xDataM;
        yield treeNode;
      }
    }

    if (minIndex !== i) {
      [_array[i], _array[minIndex]] = [_array[minIndex], _array[i]];
    }

    const changeSorted = setBeforeSortedStyle(i + 1, _array);
    xData[i] = 'i';
    xData[minIndex] = '';
    treeNode.series[0].data = changeSorted;

    yield treeNode;
  }

  const treeNode = JSON.parse(JSON.stringify(columnar));
  treeNode.series[0].data = setSortedStyle(-1, _array);

  yield treeNode;
}
