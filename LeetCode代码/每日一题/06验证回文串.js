let stringData = "A man, a plan, a canal: Panama"
/* 1. 在字符集合中使用：[^abc] 匹配除了 a、b、c 之外的任意字符。
2. 在开头位置使用：^abc 匹配以 "abc" 开头的字符串。
3. 在多行模式中使用：/^abc/gm 匹配以 "abc" 开头的每一行。 */
const backContent = (stringData) => {
  let templateData = stringData.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  // console.log(templateData)
  let setData = templateData.split('').reverse().join('')
  // console.log(setData)
  return setData === templateData

}
let result = backContent(stringData)
console.log(result)