let data = 18
const regular = (data) => {

  while (data > 1) {

    if (data % 3 == 0) {
      data = data / 3
    } else {
      return false
    }
  }
  if (data <= 1) {
    return true
  }
  // return true
}
let res=regular(data)
console.log(res)