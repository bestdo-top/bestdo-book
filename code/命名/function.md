## 对象前置法

便于查找对象

```javascript
handleClick() // 同组件单独
clickItem() // 列表状态

dialogOpen()
dialogClose()

itemCreate() // 具体操作
handleItemCreate() // 用于 Button 点击

itemUpdate()
handleItemUpdate()

itemDelete()
handleItemDelete()
```

## 对象后置法

便于查找操作

```javascript
handleClick() // 同组件单独
clickItem() // 列表状态

openDialog()
closeDialog()

createItem() // 具体操作
handleCreateItem() // 用于 Button 点击

updateItem()
handleUpdateItem()

deleteItem()
handleDeleteItem()
```
