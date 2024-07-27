//解决这个问题的关键在于理解每个位置上可以积水的高度由该位置左侧最高的柱子和右侧最高的柱子共同决定。
//具体地，一个位置上的积水量由其左侧和右侧柱子的较小者与当前柱子的高度差来确定。这是因为水的高度不能超过较短的一边的柱子高度，否则水会从低的一边溢出。
var trap = function (height) {
  if (height.length == 0) {
    return 0;
  }
  var n = height.length;
  var res = 0;
  // 数组充当备忘录
  var l_max = new Array(n);
  var r_max = new Array(n);
  // 初始化 base case
  l_max[0] = height[0];
  r_max[n - 1] = height[n - 1];
  // 从左向右计算 l_max
  for (var i = 1; i < n; i++) {
    l_max[i] = Math.max(height[i], l_max[i - 1]);
  }
  // 从右向左计算 r_max
  for (var i = n - 2; i >= 0; i--) {
    r_max[i] = Math.max(height[i], r_max[i + 1]);
  }
  // 计算答案
  for (var i = 1; i < n - 1; i++) {
    res += Math.min(l_max[i], r_max[i]) - height[i];
  }
  return res;
};
