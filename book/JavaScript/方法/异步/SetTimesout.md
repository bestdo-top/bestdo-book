## 解决输入同步问题

用户自定义的回调函数，通常在浏览器的默认动作之前触发。比如，用户在输入框输入文本，`keypress`事件会在浏览器接收文本之前触发。因此，下面的回调函数是达不到目的的。

```javascript
// HTML 代码如下
// <input type="text" id="input-box">

document.getElementById('input-box').onkeypress = function(event) {
  this.value = this.value.toUpperCase()
}
```

上面代码想在用户每次输入文本后，立即将字符转为大写。但是实际上，它只能将本次输入前的字符转为大写，因为浏览器此时还没接收到新的文本，所以`this.value`取不到最新输入的那个字符。只有用`setTimeout`改写，上面的代码才能发挥作用。

```javascript
document.getElementById('input-box').onkeypress = function() {
  var self = this
  setTimeout(function() {
    self.value = self.value.toUpperCase()
  }, 0)
}
```

上面代码将代码放入`setTimeout`之中，就能使得它在浏览器接收到文本之后触发。