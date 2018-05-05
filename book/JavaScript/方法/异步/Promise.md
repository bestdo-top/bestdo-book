# Promise

Promise 实例具有三种状态。

* 异步操作未完成（pending）
* 异步操作成功（fulfilled）
* 异步操作失败（rejected）

`fulfilled`和`rejected`合在一起称为`resolved`（已定型）。

这三种的状态的变化途径只有两种。

* 从“未完成”到“成功”
* 从“未完成”到“失败”

```javascript
var promise = new Promise(function (resolve, reject) {
  // ...

  if (/* 异步操作成功 */){
    resolve(value)
  } else { /* 异步操作失败 */
    reject(new Error())
  }
})
```

## Promise.prototype.then()

Promise 实例的`then`方法，用来添加回调函数。

`then`方法可以接受两个回调函数，第一个是异步操作成功时（变为`fulfilled`状态）时的回调函数，第二个是异步操作失败（变为`rejected`）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。

```javascript
var p1 = new Promise(function(resolve, reject) {
  resolve('成功')
})
p1.then(console.log, console.error)
// "成功"

var p2 = new Promise(function(resolve, reject) {
  reject(new Error('失败'))
})
p2.then(console.log, console.error)
// Error: 失败
```

`then`方法可以链式使用。

```javascript
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log, console.error)
```

如果`step1`的状态变为`rejected`，那么`step2`和`step3`都不会执行了（因为它们是`resolved`的回调函数）。Promise 开始寻找，接下来第一个为`rejected`的回调函数，在上面代码中是`console.error`。这就是说，Promise 对象的报错具有传递性。

## 图片加载

使用 Promise 完成图片的加载。

```javascript
var preloadImage = function(path) {
  return new Promise(function(resolve, reject) {
    var image = new Image()
    image.onload = resolve
    image.onerror = reject
    image.src = path
  })
}

// 函数用法。

preloadImage('https://example.com/my.jpg')
  .then(function(e) {
    document.body.append(e.target)
  })
  .then(function() {
    console.log('加载成功')
  })
```
