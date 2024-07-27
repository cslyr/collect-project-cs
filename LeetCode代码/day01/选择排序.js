/* 
选择排序的特点是将第一项设置成为最小值，然后从前向后依次进行比较，遇到比第一项还小的值的时候进行替换操作 
确定顺序是从前向后
*/

function selectionSort (arr) {
  if (arr === null || arr.length < 2) {//排除干扰项数据
    return;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swap(arr, i, minIndex);
  }
  console.log("arr",arr)
}

function swap (arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

let data = [1, 2, 56, 4, 1, 65, 46]

selectionSort(data)