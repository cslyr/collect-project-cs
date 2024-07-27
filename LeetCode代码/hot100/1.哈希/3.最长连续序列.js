/* 
        示例 1：

        输入：nums = [100,4,200,1,3,2]
        输出：4
        解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
        示例 2：

        输入：nums = [0,3,7,2,5,8,4,6,0,1]
        输出：9
*/
function longestConsecutive (nums) {
    let numberSet = new Set(nums)
    let len=0
    for(data of nums){
        if(numberSet.has(data-1)) continue
        let curNum=data
        let curLen=1
        while(numberSet.has(curNum+1)){
            curNum+=1
            curLen+=1
        }
        len=Math.max(curLen,len)
    }
    return len
}
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
