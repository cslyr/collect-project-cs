//将所有 0 移动到数组的末尾

function removeZero (nums) {
  let index=0
  for(num of nums){
    if(num!==0){
      nums[index]=num
      index++
    }
  }
  while(index<nums.length){
    nums[index]=0
    index++
  }
  return nums
}

console.log(removeZero([0, 1, 0, 3, 12]))