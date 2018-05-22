```javascript
// 可见物体表
const seenObjects = new Set()

/**
 * 递归遍历对象
 * 为每个对象增加 getters
 * 深度收集
 */
export function traverse (val: any) {
  _traverse(val, seenObjects)
  // 遍历完毕清除
  seenObjects.clear()
}

// SimpleSet 简单集合
function _traverse (val: any, seen: SimpleSet) {
  let i, keys
  const isA = Array.isArray(val)
  // 判断是非对象且非冻结且不存在VNode中
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }

  // 是否已存在观察者
  if (val.__ob__) {
    const depId = val.__ob__.dep.id
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  // 为数组
  if (isA) {
    i = val.length
    // 递归
    while (i--) _traverse(val[i], seen)
  } else {
    // 遍历对象
    keys = Object.keys(val)
    i = keys.length
    while (i--) _traverse(val[keys[i]], seen)
  }
}


```
> Object.isFrozen 判断对象是否冻结（是否可拓展）
> Object.preventExtensions 函数使对象不可扩展,这样便无法向其添加新的命名属性