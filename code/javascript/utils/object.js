function removeProperty(object) {
  for (let key of Object.keys(object)) {
    if (object[key] === '' || object[key] === undefined) {
      delete object[key]
    }
  }
  return object
}

// 判断两个数组是否相等
function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true
  if (!(a instanceof Array)) return false
  if (!(b instanceof Array)) return false
  if (a.length !== b.length) return false
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}
