
function bubbleSort(nums) {
  const resObj = {}; // 返回对象
  let i = nums.length;
  let count = 0; // 计数+索引

  while (--i) {
    for (let j = 0; j < i; j++) {
      // 数组变化前
      const before = JSON.parse(JSON.stringify(nums));
      let isChange = false;

      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isChange = true;
      }
      // 当前数组
      const current = JSON.parse(JSON.stringify(nums));
      const tempObj = {
        i,
        j,
        isChange,
        before,
        current
      };
      count++;
      resObj[count] = tempObj;
    }
  };
  return resObj;
}

function* genFn(items) {
  const res = bubbleSort(items);
  let i = 1;
  let len = Object.keys(res).length;
  while (i <= len) {
    yield res[i];
    i++;
  }
}

export function bubbleFn(nums) {
  return genFn(nums);
}