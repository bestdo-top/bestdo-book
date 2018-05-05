# Instanceof

instanceof 运算符用来回一个布尔值，用来判断对象是否为某个构造函数的实例。也就是检测 constructor.prototype 是否存在于参数 object 的原型链上。

instanceof 比较的是否能在实例的原型对象链中找到 与构造函数（第二个参数）的 prototype 属性所指向的原型对象，能找到就返回 true，反之 false；

常用方法：

* 用来检测这个实例对象是不是这个类 new 出来的
* 类型判断

```javascript
function A() {}
var a = new A()

a instanceof A // true
a instanceof Object // true
a instanceof Array // false
```
