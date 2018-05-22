```javascript
// 判断是否存在隐式原型
export const hasProto = '__proto__' in {}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch
// 使用火狐浏览器原生 watch 对象（Firefox 58+中被弃用）
export const nativeWatch = ({}).watch

// VUE 检测工具
export const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

// Istanbul: 代码覆盖率工具 
/* istanbul ignore next */ 
// 测试是否为原生代码
export function isNative (Ctor: any): boolean {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

// 判断是否支持 Symbol 和 Reflect 对象（ES6新增）
// https://www.cnblogs.com/diligenceday/p/5474126.html#_label0
export const hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys)


```