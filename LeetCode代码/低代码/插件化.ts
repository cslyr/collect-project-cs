interface Plugin {
  name: string;
  calculate: (num: number) => Calculate;
}

class Calculate {
  private num: number;
  private plugins: Plugin[] = [];

  constructor(initData: number) {
    this.num = initData;
  }

  addCalculate(plugin: Plugin): void {
    this.plugins.push(plugin);
    // @ts-ignore
    this[plugin.name] = (...args: any[]) => plugin.calculate.apply(this, args);
  }

  getResult(): number {
    return this.num;
  }
}

class AddPlugin implements Plugin {
  name = 'add';

  calculate(this: Calculate, num: number): Calculate {
    this.num += num;
    return this;
  }
}

class DeletePlugin implements Plugin {
  name = 'delete';

  calculate(this: Calculate, num: number): Calculate {
    this.num -= num;
    return this;
  }
}

// 示例使用
const calc = new Calculate(10);
const addPlugin = new AddPlugin();
const deletePlugin = new DeletePlugin();

calc.addCalculate(addPlugin);
calc.addCalculate(deletePlugin);

// @ts-ignore
calc.add(5); // 使用插件提供的方法
// @ts-ignore
calc.delete(3);

console.log(calc.getResult()); // 应输出 12