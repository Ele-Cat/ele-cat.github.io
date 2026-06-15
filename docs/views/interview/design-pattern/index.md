# JavaScript 常见设计模式与设计原则

## **一、设计原则（SOLID）**
1. **单一职责原则 (SRP)**  
   - 一个类/函数只做一件事  
   - 例：`User` 类只处理用户数据，不负责日志记录

2. **开闭原则 (OCP)**  
   - 对扩展开放，对修改关闭  
   - 例：通过继承或组合扩展功能，而非修改原有代码

3. **里氏替换原则 (LSP)**  
   - 子类必须能替换父类且不影响程序正确性  
   - 例：`Bird` 的子类 `Penguin` 不应重写 `fly()` 方法

4. **接口隔离原则 (ISP)**  
   - 客户端不应依赖它不需要的接口  
   - 例：将大型接口拆分为 `Logger` 和 `ErrorReporter`

5. **依赖倒置原则 (DIP)**  
   - 依赖抽象而非具体实现  
   - 例：通过 `依赖注入` 传递数据库服务

---

## **二、创建型模式**
1. **单例模式 (Singleton)**  
   ```js
   class Logger {
     static instance;
     constructor() {
       if (!Logger.instance) Logger.instance = this;
       return Logger.instance;
     }
   }
   ```

2. **工厂模式 (Factory)**  
   ```js
   class CarFactory {
     createCar(type) {
       switch(type) {
         case 'SUV': return new SUV();
         case 'Sedan': return new Sedan();
       }
     }
   }
   ```

3. **建造者模式 (Builder)**  
   ```js
   class PizzaBuilder {
     setSize(size) { /*...*/ }
     addTopping(topping) { /*...*/ }
     build() { return new Pizza(this); }
   }
   ```

---

## **三、结构型模式**
1. **适配器模式 (Adapter)**  
   ```js
   // 将旧接口适配为新接口
   class OldToNewAdapter {
     constructor(oldSystem) {
       this.old = oldSystem;
     }
     newMethod() { return this.old.legacyMethod(); }
   }
   ```

2. **装饰器模式 (Decorator)**  
   ```js
   function withLogging(fn) {
     return function(...args) {
       console.log('Calling:', fn.name);
       return fn.apply(this, args);
     };
   }
   ```

3. **代理模式 (Proxy)**  
   ```js
   const userProxy = new Proxy(user, {
     get(target, prop) {
       if (prop === 'password') throw 'Access denied';
       return target[prop];
     }
   });
   ```

---

## **四、行为型模式**
1. **观察者模式 (Observer)**  
   ```js
   class EventEmitter {
     listeners = [];
     subscribe(fn) { this.listeners.push(fn); }
     emit(data) { this.listeners.forEach(fn => fn(data)); }
   }
   ```

2. **策略模式 (Strategy)**  
   ```js
   const strategies = {
     'A': () => { /* 算法A */ },
     'B': () => { /* 算法B */ }
   };
   function executeStrategy(type) {
     return strategies[type]();
   }
   ```

3. **状态模式 (State)**  
   ```js
   class TrafficLight {
     state;
     changeState(newState) {
       this.state = newState;
       this.state.execute();
     }
   }
   ```

---

## **五、现代 JavaScript 特例**
1. **模块模式** (ES6 Modules)  
   ```js
   // utils.js
   export const sum = (a, b) => a + b;

   // app.js
   import { sum } from './utils';
   ```

2. **HOC（高阶组件）**  
   ```js
   const withAuth = (Component) => {
     return (props) => {
       return isLoggedIn ? <Component {...props} /> : <LoginPage />;
     };
   };
   ```

3. **Hook 模式**  
   ```js
   function useToggle(initialValue) {
     const [value, setValue] = useState(initialValue);
     const toggle = () => setValue(!value);
     return [value, toggle];
   }
   ```

---

## **六、设计模式选择指南**
| 场景 | 推荐模式 |
|-------|----------|
| 全局状态管理 | 单例模式 |
| 动态创建对象 | 工厂模式 |
| 功能扩展 | 装饰器模式 |
| 跨组件通信 | 观察者模式 |
| 算法切换 | 策略模式 |

---

## **七、面试常见问题**
1. **"Vue/React 中使用了哪些设计模式？"**  
   - React：组合模式（组件嵌套）、观察者模式（状态管理）  
   - Vue：代理模式（数据响应式）、装饰器模式（@Component）

2. **"如何避免过度设计？"**  
   - 遵循 YAGNI 原则（You Ain't Gonna Need It）  
   - 初期优先使用简单工厂/策略模式

3. **"设计模式在微前端中的应用？"**  
   - 适配器模式（统一不同框架的组件接口）  
   - 外观模式（封装子系统复杂度）

---

掌握这些设计模式能让你写出更可维护、可扩展的 JavaScript 代码，建议结合实际项目理解应用场景。