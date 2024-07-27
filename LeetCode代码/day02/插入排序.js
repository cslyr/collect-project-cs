/* 是o(n平方) 规模的算法---按照最差的情况进行估计*/
arr = [1, 5, 9, 3, 21, 78, 5, 2]
function insertionSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }

}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

insertionSort(arr)
console.log("arr", arr)