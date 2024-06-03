---
title: 组件配置文件
order: 30
---
## 基本模板
先看一下基本模板下面会对每一项配置进行描述。
```json
{
    "permission": [
        "network",
        "dbStorage"
    ],
    "widget": {
        "entry": "/index.html",
        "group": [
            {
                "width": 3,
                "height": 3
            },
            {
                "active": true,
                "width": 6,
                "height": 3
            }
        ]
    },
    "setting": {
        "entry": "/setting.html",
        "width": "60%"
    },
    "detail": {
        "entry": "/detail.html",
        "width": 500
    }
}
```
## permission 权限
```json
{
  "permission": [
    "network",
    "dbStorage"
  ]
}
```
当前小组件可以使用的权限列表 [网络权限, 存储权限]。<br/>
如果没有申请小组件将不会获取到对应的权限的 API <br/>
比如小组件没有申请 `dbStorage` 权限就调用不了 `widget.dbStorage` 下的所有 API。

## widget 小组件配置

### entry 入口
小组件进入地址配置
### group 组件大小
```json
{
    "active": true,
    "width": 3,
    "height": 3
}
```
- 小组件大小配置, 每一个单位是 60px, 例如上面小组件就是 180 x 180 px,
- 如果要设置组件默认大小需要添加 `"active": true` 。 


## setting 设置页面配置
```json
{
  "setting": {
    "entry": "/setting.html",
    "width": "60%"
  }
}
```
- entry 设置页面进入入口。
- width 设置页面宽度

## detail 详情页面配置
```json
{
  "detail": {
    "entry": "/detail.html",
    "width": 500
  }
}
```
- entry 详情页面进入入口。
- width 详情页面宽度
