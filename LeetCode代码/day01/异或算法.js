/* 对于异或操作当中，相同的值为0，不同的值为1
  但是对于&操作当中   只有两个都是1的时候才是1
*/


//用于对两个数之间交换位置
let a = 10086
let b = 3
function selectSort (a, b) {
  a = a ^ b
  b = a ^ b
  a = a ^ b
  console.log("a", a)
  console.log("b", b)
}
selectSort(a, b)



let arr = [1, 2]
function selectSortArr (arr) {
  arr[0] = arr[0] ^ arr[1]
  arr[1] = arr[0] ^ arr[1]
  arr[0] = arr[0] ^ arr[1]
  console.log("arr[0]", arr[0])
  console.log("arr[1]", arr[1])
}
selectSortArr(arr)

let test1 = 4   //0100
let test2 = 6   //0110    最前面的0表示的是符号
let test3 = test1 & test2    //0100---> 4
console.log("test3",-test3)



printoddTimesNum2([1,1,2,2,3,4])
function printoddTimesNum2(arr) {
  let eor = 0;
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }
  let rightOne = eor & -eor;    //-eor=~eor+1
  let onlyOne = 0;
  for (let cur of arr) {
    if ((cur & rightOne) === 0) {
      onlyOne ^= cur;
    }
  }
  console.log(onlyOne, eor ^ onlyOne);
}