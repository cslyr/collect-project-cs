//未必两边的高度最高中间水分的面积就越大
//使用双指针的方法
var maxArea = function (height) {
  let left = 0, right = height.length - 1
  let res = 0
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left)
    res = Math.max(res, area)
    if (height[left] < height[right]) {
      left++
    }else{
      right--
    }
  }
  return res
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))