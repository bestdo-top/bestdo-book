```javascript
export const SSR_ATTR = 'data-server-rendered'

// 资产类型
export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]

// 生命周期钩子
export const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',  // 组件激活时调用，SSR 不被调用
  'deactivated', // 组件停用时调用，SSR 不被调用
  'errorCaptured'
]


```