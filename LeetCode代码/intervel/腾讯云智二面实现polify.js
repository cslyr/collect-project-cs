class URLSearchParams {
  constructor(params) {
    this.init = params
    let type = typeof params
    this.getParams = new Map()
    switch (type) {
      case 'string':
        this.handleString(params)
        break;
      case 'object':
        this.handleObject(params)
        break;
      default:
        console.error('传参错误')
    }

    
  }
  handleString = function (params) {
    params.split('&').forEach(item => {
      let arr = item.split('=')
      this.getParams.set(arr[0], arr[1])
    });

  }
  handleObject = function (params) {
    Object.keys(params).forEach(item => {
      this.getParams.set(item, params[item])
    })
  }
  get (params) {
    return this.getParams.get(params)
  }
  set (params, value) {
    this.getParams.set(params, value)
  }
  has (params) {
    return this.getParams.has(params)
  }
  append (params, value) {
    let data = ''
    switch (typeof this.init) {
      case 'string':
        data = this.init + '&' + params + '=' + value
        break;
      case 'object':
        Object.keys(this.init).forEach(item => {
          data = data + item + '=' + this.init[item] + '&'
        })
        if (params && value) {
          data = data + params + '=' + value
          console.log('111')
        }
        break;
    }
    return data
  }
}


// 构造函数支持传入 URL 参数串
let searchParams = new URLSearchParams("foo=1&bar=2")
// // 构造函数也支持传入一个包含参数键值对的对象
// searchParams = new URLSearchParams({ foo: "1", bar: "2" })

// // 实例支持 get()、set()、has()、append() 四个方法
// searchParams.set("foo", "22")
// console.log(searchParams.get("foo")) // "1"

// console.log(searchParams.has("bar")) // true
console.log(searchParams.append("foo", "33"))


// // 实例支持 toString() 方法
// console.log(searchParams()) // "foo=22&bar=2&foo=33"

