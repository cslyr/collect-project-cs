const arr = [1, 2, 3, 4, 5, 6, 7]
// for (let i = arr.length - 1; i >= arr.length - 3; i--) {
//   arr.unshift(arr.pop())//arr.pop()  pop会删除数组的最后一个元素并且返回
//   //将返回的值追加到数组的最前面
// }
//使用第二个方法

console.log([...arr.splice(arr.length-3,3),...arr])
// console.log(arr)