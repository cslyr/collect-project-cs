const arr = [1, 3, 4, 2, 5]
let res = process(arr, 0, arr.length - 1)
console.log("res", res)
function process (arr, l, r) {
  if (l === r) {
    return 0;
  }
  let mid = l + ((r - l) >> 1);
  return process(arr, l, mid) + process(arr, mid + 1, r) + merge(arr, l, mid, r);
}

function merge (arr, L, m, r) {
  let help = new Array(r - L + 1);
  let i = 0;
  let p1 = L;
  let p2 = m + 1;
  let res = 0;
  while (p1 <= m && p2 <= r) {
    res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }
  for (let j = 0; j < help.length; j++) {
    arr[L + j] = help[j];
  }
  return res;
}