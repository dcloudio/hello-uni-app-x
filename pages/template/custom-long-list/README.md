## uni-recycle-view【TODO 名称待定，由于使用uni-开头应避免和内置组件冲突，比如uni-list和list组件是冲突的】

::: tip 组件名：uni-recycle-view
> 代码块： `uRecycleView`、`uRecycleItem`
【TODO 链接待补充】
[点击下载&安装]()
:::

uni-recycle-view 组件用于在展示超长列表时优化内存占用以及初次加载时的速度。不同于uni-app list-view组件，uni-recycle-view组件不会对所有数据循环创建VNode。适用于仅使用一个for循环创建所有列表项的场景。

### 基本用法

```vue
<template>
  <uni-recycle-view style="flex: 1;" :list="list">
    <template v-slot:default="{items}">
      <uni-recycle-item class="item" v-for="item in (items as Item[])" :item="item" :key="item.id">
        <view class="item-wrapper">
          <view class="name"><text style="font-size: 14px;">{{item.name}}</text></view>
          <view class="info"><text style="font-size: 12px; color: #999999;">{{item.info}}</text></view>
        </view>
      </uni-recycle-item>
    </template>
  </uni-recycle-view>
</template>

<script>
  type Item = {
    id : number
    name : string
    info : string
  }
  export default {
    data() {
      return {
        list: [] as Item[]
      }
    },
    created() {
      for (let i = 0; i < 2000; i++) {
        this.list.push({
          id: i,
          name: `Wifi_` + i,
          info: `信号强度: -${(Math.floor(Math.random() * 60) + 40)} db, 安全性: WPA/WPA2/WPA3-Personal`
        } as Item)
      }
    }
  }
</script>
```

uni-recycle-view组件传入通过绑定list属性`:list="list"`传入含所有数据的列表。经过组件内部计算，由作用域插槽返回真实要渲染的部分数据`v-slot:default="{items}"`。最终仅需渲染items而不是list，从而节省了大量的计算消耗及内存占用。

### 属性及事件

|属性名	|类型	|默认值	|说明																																																															|
|:-:		|:-:	|:-:		|:-:																																																															|
|list		|any[]| []		|列表所有数据																																																												|
|其他		|-		|-			|其余属性及事件会透传给内部的scroll-view组件，参考: [scroll-view组件](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html)	|


## uni-recycle-item

uni-recycle-item用于渲染uni-recycle-view筛选出的用于展示的数据。

### 属性及事件

|属性名	|类型	|默认值	|说明								|
|:-:		|:-:	|:-:		|:-:								|
|item		|any	| -			|当前组件渲染的列表项	|

## 注意事项

- uni-recycle-view和uni-recycle-item必须搭配使用
- uni-recycle-view仅渲染滚动容器当前屏及上下5屏的内容

## 已知问题

- 不支持设置初始滚动位置
- 容器大小变动时未刷新缓存的子元素大小，可能导致滚动过程中出现跳动
- 列表数据内每一项不可以是基础类型
- uni-recycle-item不要设置margin，会影响滚动位置的计算
