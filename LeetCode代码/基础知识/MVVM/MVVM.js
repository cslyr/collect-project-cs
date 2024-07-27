class MVVM {
  constructor(opt) { //实例化之后，其中的constructor会拿到所有的参数
    this.$el = opt.el;
    this.$data = opt.data
    if(this.$el){//查看有没有传递el对象
      //进行模板的编译
      /* 
      其中的el表示的就是元素，this表示的整个实例但是从视图和数据操作的角度来讲，这个this表示的就是数据
      */
      new Compile(this.$el,this)//将el和编译的数据全部传递过去    
    }
  }
}