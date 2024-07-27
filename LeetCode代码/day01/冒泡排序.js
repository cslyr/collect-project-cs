/* 
- 冒泡排序通过依次比较相邻的元素，并交换顺序不对的元素，使得每一轮循环都能将当前未排序部分的最大元素移动到最后。这样，每一轮循环都会将未排序部分的最大元素“冒泡”到正确的位置。
- 时间复杂度为O(n^2)，空间复杂度为O(1)。
- 适用于数据量较小的情况，或者在实现简单排序逻辑时使用。
 */

const arr = [1, 56, 2, 8, 65, 2]
// bubbleSort(arr)
// function bubbleSort (arr) {
//   if (arr == null || arr.length < 2) {
//     return;
//   }
//   for (let e = arr.length - 1; e > 0; e--) {
//     for (let i = 0; i < e; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//   }
//   console.log(arr)
// }

booSort(arr)
function booSort (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i  ; j++) {
      if(arr[j] > arr[j + 1])
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    }
  }
}
/* 有两点需要注意的
1.外层循环是从后向前的
2.外层循环是控制进度的，比较的时候只能对内层循环之间进行比较 */
