/* 找到一个数组当中是否存在某一个数   时间复杂度是log2N

能够解决的问题：
  1)在一个有序数组中,找某个数是否存在
  2)在一个有序数组中,找>=某个数最左侧的位置
  3)局部最小值问题


*/

//正常的写法

// function binarySearch (arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }

//使用递归的写法
/* 注意书写的时候   记得将递归的值return出来 */
function getArr(arr, target) {
  return process(arr, 0, arr.length - 1, target);
}

function process(arr, l, r, target) {
  if (l > r) {
    return '不存在这样的值';
  }
  let mid = Math.floor((l+r)/2);
  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    return process(arr, mid + 1, r, target);
  } else {
    return process(arr, l, mid - 1, target);
  }
}

console.log(getArr([1, 3, 8, 10, 19, 20, 23, 29, 60], 29));
console.log(Math.floor(9/2) )