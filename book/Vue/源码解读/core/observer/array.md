```javascript

const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)


const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

// 劫持数组方法
methodsToPatch.forEach(function (method) {
  // 缓存原始方法
  const original = arrayProto[method]
  // 设置方法，传入数据
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // 通知更改
    ob.dep.notify()
    return result
  })
})

```