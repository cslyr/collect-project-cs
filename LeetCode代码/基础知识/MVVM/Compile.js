class Compile {
  constructor(el, vm) {
    //进行数据持久化的操作
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    if (this.el) {//如果存在el的话
      let docFragment = this.nodeToFragment(this.el)//使用的是文本碎片技术
      //进行编译的操作
      this.Compile(docFragment)
      //编译过了之后再添加到原来的地方
      this.el.appendChild(docFragment)
    }
  }
  //下面要考虑的是这个el是通过id或者class直接定义的还是通过document.querySelect()直接定义的
  isElementNode (node) {
    return node.nodeType === 1   //nodeType是一个js当中的内置函数如果是div元素的话，返回的是1，如果不是div元素的话，返回的的是3
  }
  //判断里面的内容是不是  v-  格式的
  isDirective (attr) {
    return attr.includes('v-')
  }
  nodeToFragment (el) {
    let docFragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = el.firstChild) {//如果存在第一个子元素也就是第一个子元素不是null的时候
      /* 
      当你调用appendChild()将一个子节点添加到DocumentFragment时，该子节点会自动从其原父节点（如果有的话）中移除，
      并添加到DocumentFragment中。
      这就是如何通过appendChild()方法将每个子节点从原来的父节点中移除，并附加到之前创建的DocumentFragment实例中的机制。
      */
      docFragment.appendChild(firstChild)
      //输出的结果是
      //  text doc text doc text doc text 
    }
    return docFragment
  }
  Compile (docFragment) {
    //1.输出的结果是一个类数组但是不是数组，可以被length访问到
    let childNodes = docFragment.childNodes
    //输出的结果是[text, input, text, div, text, ul, text]  也就是只是输出的第一个子节点，但是不会继续向下深挖继续输出子节点
    //2.将类数组元素转换为数组元素
    //Array.from能够将类数组对象（拥有一个 length 属性和索引元素的对象）或可迭代对象（比如 Map 和 Set）转换成一个真正的数组
    Array.from(childNodes).forEach(node => {
      if (this.isElementNode(node)) {//判断节点是否是元素节点
        // console.log('元素节点', node)
        this.compileElement(node)//编译元素节点
        this.Compile(node)//递归编译元素节点  防止的是出现<ul><li></li></ul>的清苦
      } else {
        this.compileText(node)//编译文本节点
        // console.log("文本节点", node)
      }
    })
    // console.log(childNodes)
  }
  compileElement (node) {//编译元素节点
    let attr = node.attributes //获得每个节点的属性，在这里的目的是拿到  v-model或者v-txt   但是同样也是一个伪数组
    Array.from(attr).forEach(item => {
      //1.输出的值都是以   键值对的形式存在的   例如type="txt"
      //在DOM中，每个属性（如id、class、style、自定义属性如v-model或v-txt）都有一个名称，这就是item.name所表示的。例如，如果当前元素有一个属性v-model="username"，那么item.name将是"v-model"。
      //我们可以通过item.name的方法拿到键的名

      //我们通过上面方法的遍历去找   v-  这种格式的值
      let attrName = item.name
      if (this.isDirective(attrName)) {//判断里面是不是  v-   格式的内容
        //如果是v-  格式的
        let value = item.value
        let type = attrName.slice(2)  //根据截取 v-model 还是 v-text  后面的值   得到是model 还是test
        CompileUtile[type](node, this.vm, value)//传入的三个参数，分别是   需要编译的node节点、实例、还有v-model后面绑定的值
      }
    })
  }
  compileText (node) {//编译文本节点
    let txt = node.textContent   //拿到文本
    // console.log("txt",txt)
    let reg = /\{\{([^}]+)\}\}/g
    if (reg.test(txt)) {//由于是文本只有{{}}的形式，所以直接使用text就行了
      CompileUtile['text'](node, this.vm, txt)//传入的三个参数，分别是   需要编译的node节点、实例、还有{{}}当中的值d
    }
  }
}

//工具函数，执行v-model还是v-text
CompileUtile = {
  model (node, vm, exp) {
    // console.log("model-exp",exp)
    let updateFn = this.updater['modelUpdater']//调用的是后面modelUpdater的函数
    updateFn && updateFn(node, this.getVal(vm, exp))//如果updateFn存在那就向其中传入参数   如果这个时候传入的参数 exp 是 message.a  这样子的 去函数this.getVal当中进行处理
    //return回来之后就拿到了对应数据下面的值也就是exp传入到updater当中的modelUpdater当中
  },
  text (node, vm, exp) {

  },
  updater: {
    modelUpdater (node, value) {
      //在这个当中是input节点
      node.value = value   //value 属性用于获取或设置表单元素的值，比如 <input>, <select>, 和 <textarea> 元素。
    },
    testUpdater (node, value) {
      node.textContent = value
    }
  },
  getVal (vm, exp) {//传入的vm当中也就是定义的MVVM当中的所有数据，传入的exp也就是类似于“message.a”这样的数据
    let result = exp.split('.')
    let data = result.reduce((pre, cur) => {//这样就能拿到对象当中的具体值
      return pre[cur]
    }, vm.$data)
    return data
  }
}