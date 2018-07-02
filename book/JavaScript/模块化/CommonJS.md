CommonJS 最开始是 Mozilla 的工程师于 2009 年开始的一个项目。

CommonJS API 定义了很多普通应用程序（主要指非浏览器的应用）使用的 API，它的终极目标是提供一个类似 Python，Ruby 和 Java 标准库。这样的话，开发者可以使用 CommonJS API 编写应用程序，然后这些应用可以运行在不同的 JavaScript 解释器和不同的主机环境中。

在 CommonJS 的规范中，每个 JavaScript 文件就是一个**独立的模块上下文**（module context），在这个上下文中默认创建的属性都是私有的。也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的。

CommonJS 主要用于：

- 服务器端 JavaScript 应用程序
- 命令行工具
- 图形界面应用程序
- 混合应用程序

node.js 的模块系统，就是参照 CommonJS 规范实现的。

示例一

```javascript
require() // 模块引用，用来引入外部模块
exports // exports 对象导出当前模块的方法或变量，唯一的导出口
module // module 对象代表当前模块 exports = module.exports

// sayModule.js
function SayModule() {
  this.hello = function() {
    console.log('hello')
  }

  this.goodbye = function() {
    console.log('goodbye')
  }
}

module.exports = SayModule

// main.js 引入sayModule.js
const Say = require('./sayModule.js')

var sayer = new Say()
sayer.hello() // hello
```

示例二

```javascript
// const.js
const ERROR_CODE = {
  SEESION_FAIL: 40001
}

module.exports = {
  ERROR_CODE
}

// exports.ERROR_CODE = ERROR_CODE

// main.js
const { ERROR_CODE } = require('./const.js')
```

## 浏览器不兼容的原因

浏览器不兼容 CommonJS 的根本原因：就是缺少四个 NodeJS 环境的变量：**module, exports, require, global**

只要能够提供这四个变量，浏览器就能加载 CommonJS 模块。

## Browserify 工具

Browserify 是目前最常用的 CommonJS 格式转换的工具。

请看一个例子，main.js 模块加载 foo.js 模块。
