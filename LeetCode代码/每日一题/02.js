// const tempArr = [];
// const singleNum = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     // tempArr[ arr[i]]++
//     if (tempArr[arr[i]]) {
//       tempArr[arr[i]]++
//     } else {
//       tempArr[arr[i]] = 1
//     }
//   }
//   for (let j = 0; j < tempArr.length; j++) {
//     if (tempArr[j] === 1)
//       console.log(j)
//   }
// }

// singleNum(arr)

const arr = [4, 1, 2, 1, 2]

const singleNumber = (nums) => {
  const numsGroup = nums.map(num => nums.filter(v => v === num));
  console.log("numsGroup",numsGroup)
  return numsGroup.find(num => num.length === 1)[0];
};
singleNumber(arr)