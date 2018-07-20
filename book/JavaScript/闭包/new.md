new 关键词的作用可以看作是当前对象的 this 不停地赋值

创建对象安全模式

```javascript
const Book = function(title, time, type) {
    if(this instanceof Book) {
        this.title = title
        this.time = time
        this.type = type
    } else {
        return new Book(title, time, type)
    }
}


```