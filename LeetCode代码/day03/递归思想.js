/* 递归的缺点，
在程序执行中，递归是利用堆栈来实现的。每当进入一个函数调用，栈就会增加一层栈帧，每次函数返回，栈就会减少一层栈帧。
而栈不是无限大的，当递归层数过多时，就会造成 栈溢出 的后果。
显然有时候递归处理是高效的，比如归并排序；有时候是低效的，比如数孙悟空身上的毛，因为堆栈会消耗额外空间，而简单的递推不会消耗空间。

当问题和子问题具有递推关系，比如杨辉三角、计算阶乘。
具有递归性质的数据结构，比如链表、树、图。
反向性问题，比如取反。

参考    https://blog.csdn.net/weixin_44572229/article/details/119909728


栈是先进后出的



这个代码当中的注意点就是   不能将中间值-1，否则容器出现溢出栈的问题
 */

arr = [1, 5, 2, 98, 2, 1, 58, 23, 5, 9, 2, 4, 87, 8]
let result = getMax(arr)
console.log("arr", result)
function getMax (arr) {
  return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L === R) {
    return arr[L];
  }
  let mid = L + ((R - L) >> 1);
  let leftMax = process(arr, L, mid);
  let rightMax = process(arr, mid + 1, R);
  return Math.max(leftMax, rightMax);
}



