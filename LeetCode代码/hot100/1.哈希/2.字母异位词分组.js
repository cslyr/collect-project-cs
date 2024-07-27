//实际上就是求一个字母里面有什么字母，这个几个字母都能构成什么单词
function groupGet (strs) {
  const map = new Map()
  for(const str of strs){
    const sorted = str.split('').sort().join('');
    // console.log(sorted)
    if(map.has(sorted)){
      map.set(sorted,map.get(sorted).concat(str))
    }else{
      map.set(sorted,[str])
    }
  }
  console.log(Array.from(map.values()))

  return Array.from(map.values());
}
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupGet(strs)