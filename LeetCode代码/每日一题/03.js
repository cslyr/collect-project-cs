const a = {
  a_y: {
    a_z: {
      y_x: 6
    },
    b_c: 1
  }
}

const regularExpress = (obj) => {
  try {
    const str = JSON.stringify(obj).replace(/_/g, "");
    console.log(JSON.parse(str))
  } catch (err) {
    return obj
  }
}
// regularExpress(a)

//第二种方法
const regular = (obj) => {
  const keys = Object.keys(obj)
  keys?.forEach(item => {
    newkey = item.replace(/_/, '')
    obj[newkey] = regular(obj[item])
    delete obj[item]
  })
  return obj
}
regular(a)
console.log(a)