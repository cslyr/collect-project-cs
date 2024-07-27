class Calculator {
  plugins = [];
  constructor(initial) {
    this.num = initial;
  }

  use(plugin) {
    this.plugins.push(plugin);
    this[plugin.name] = plugin.calculate.bind(this);
  }

  result() {
    return this.num;
  }
}
// 插件声明
interface Plugin {
  name: string;
  calculate(num: number) => this;
}
// 插件实现
class AddPlugin implements Plugin {
  name: 'add',
  calculate(num) {
    this.num = this.num + num;
    return this;
  }
}

class SubtractPlugin implements Plugin {
  name: 'subtract',
  calculate(num) {
    this.num = this.num - num;
    return this;
  }
}

const myCalculator = new Calculator(5);
// 插件安装
myCalculator.use(new AddPlugin());
myCalculator.use(new SubtractPlugin());

myCalculator.add(5).subtract(2).result(); // 8