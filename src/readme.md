# react面试题
## react 的理解
- react 是一个用于构建用户界面的 JavaScript 库
- 它使用虚拟 DOM 来实现高效的 DOM 操作
- 它提供了一组声明式的 API，使得开发者可以轻松地创建交互式 UI
- 它支持服务器端渲染，可以提高首屏加载速度
- 它提供了一套完整的工具链，包括打包工具、测试工具等，可以提高开发效率

## react 的特点
- 声明式编程
- 组件化开发
- 虚拟 DOM
- 单向数据流

## setState执行机制
在组件生命周期或React合成事件中，setState是异步
在setTimeout或者原生dom事件中，setState是同步


## 事件绑定方式


constructor里绑定 bind(this)
render里绑定 bind(this)
事件里箭头函数 onClick={()=>this.add()}
add=()=>{}

## 组件之间的通信
- 兄弟之间的通信
- 祖先和后代的通信
- 父子通信（回调函数）
createContext
useContext


## react中key的作用以及如何判断


## ref 的作用以及使用方式
- this.refs
- React.createRef
- useRef


## 类组件和函数组件
- 类组件
``` javascript
 class Foo extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       count: 0
     };
   }
   render() {
     return (
       <div>

       </div>
     );
   }
 }
```
- 函数组件
``` javascript
    function Foo(props) {
      return (
        <div>

        </div>
      );
    }
```

// 他们的区别：
a.生命周期不同
b.一个this访问 state; 一个用hook定义state


## 高阶组件
## hook
在组件通信过程中可以使用useContext，refs学习中我们也用到了useRef获取DOM结构......

还有很多额外的hooks，如：

useReducer
useCallback
useMemo
useRef
自定义hook

## router原理；必须要会
- hash模式；监听hash值改变，从而进行DOM改变模拟页面跳转

## render的原理，类似vue的h
babel React.createElement()

render的原理：
render里可以编写jsx；转化成React.createElement的形式；用于生产虚拟DOM,最终生成真实的DOM
- setState会触发render
- props不一定会触发render;如果props是父组件的state,props改变会触发render

## 如何提升渲染效率
- pureComponent
- shouldComponentUpdate
- React.memo

## react diff算法
