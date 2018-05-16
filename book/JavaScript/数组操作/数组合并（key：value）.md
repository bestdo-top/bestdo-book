```javascript
var activeSubjectsName = ["语文", "数学", "英语", "思想品德", "科学"]
var activeSubjectsNum = [46, 2, 2, 28, 29]
var activeSubjectsArr = []

activeSubjectsName.forEach((item, index) => {
  activeSubjectsArr.push({
    name: activeSubjectsName[index],
    value: activeSubjectsNum[index]
  })
})

console.log(activeSubjectsArr)


```
