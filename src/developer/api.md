---
title: 开放 API
order: 40
---

:::info
使用 API 前需要注意 API 所需要的权限可在组件配置文件中申请
:::

## 存储

:::info
需要权限码: `dbStorage`
:::

### 描述
存储分为 `全局存储数据` 和 `组件实例存储数据` 两种方式。

| 功能 | 全局存储数据  | 组件实例存储数据 |
|----|---------| ----  |
| 获取 | 所有的组件实例 | 仅被当前组件实例 |
| 销毁 | 当组件被卸载后 | 实例被删除后 |

### 保存数据
指定 key 并保存数据
- 类型
```typescript
setItemSync<T = any>(key: string, data: T): void;
```
- 详细信息

1. 第一个参数是存储 key, 获取数据使用, 
2. 第二个参数是需要保存的数据, 保存的数据必须符合 <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm'>结构化克隆算法</a>
   - 仅支持简单数据保存，不支持函数等复杂对象存储

- 示例

**获取全局存储数据**

```typescript
widget.dbStorage.global.setItemSync('key', {hello: "world"})
```

**获取组件实例存储数据**

```typescript
widget.dbStorage.instance.setItemSync('key', {hello: "world"})
```


### 获取存储数据
获取指定 key 数据
- 类型

```typescript
getItemSync<T = any>(key: string): T;
```
- 详细信息

1. 第一个参数是存储时的 key

- 示例

**获取全局存储数据**
```typescript
widget.dbStorage.global.getItemSync('key')
```

**获取组件实例存储数据**

```typescript
widget.dbStorage.instance.getItemSync('key')
```

### 删除存储数据

删除指定 key 数据

- 类型

```typescript
removeItemSync(key: string): void;
```
- 详细信息

1. 第一个参数是存储时的 key

- 示例

**获取全局存储数据**
```typescript
widget.dbStorage.global.removeItemSync('key')
```

**获取组件实例存储数据**

```typescript
widget.dbStorage.instance.removeItemSync('key')
```

### 存储附件

将一个大小不超过 10MB 的文件存储

- 类型

```typescript
postAttachment(key: string, attachment: Buffer | Uint8Array, type: string): Promise<boolean>;
```
- 详细信息

1. 第一个参数是存储时的 key
2. 文件的 Buffer
3. 文件类型, 列如: image/png, text/plain, 其他可以对照
   - <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">常见 MIME 类型列表</a>
   - <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME 大全</a>

- 示例

**获取全局存储数据**
```typescript
widget.dbStorage.global.postAttachment('key', buffer, 'text/plain')
```

**获取组件实例存储数据**

```typescript
widget.dbStorage.instance.postAttachment('key', buffer, 'text/plain')
```

### 获取附件

获取文件存储

- 类型

```typescript
getAttachment(key: string): Promise<Uint8Array | null>;
```

- 详细信息

1. 第一个参数是存储时的 key

- 示例

**获取全局存储数据**
```typescript
widget.dbStorage.global.getAttachment('key')
```

**获取组件实例存储数据**

```typescript
widget.dbStorage.instance.getAttachment('key')
```

### 获取附件类型

获取存储时候存储的附件类型

- 类型

```typescript
getAttachmentType(key: string): string | null;
```
- 详细信息

1. 第一个参数是存储时的 key

- 示例

**获取全局存储数据**
```typescript
widget.dbStorage.global.getAttachmentType('key')
```

**获取组件实例存储数据**

```typescript
widget.dbStorage.instance.getAttachmentType('key')
```

## 页面

可以让用户打开设置页面或者详情页面

### 打开详情页面

打开根据配置的详情页面
- 类型
```typescript
openWidgetDetail(): void;
```
- 示例

```typescript
widget.page.openWidgetDetail();
```

### 打开配置页面

打开根据配置的设置页面
- 类型
```typescript
openWidgetSetting(): void;
```
- 示例

```typescript
widget.page.openWidgetSetting();
```
