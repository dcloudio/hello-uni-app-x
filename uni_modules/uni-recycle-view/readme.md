## uni-recycle-view

> 此组件支持uni-app-x（web端及app端），不支持非uni-app-x项目。最低HBuilderX版本4.11

uni-recycle-view 组件是一个开源的、适用于展示超长列表的组件，它有2个优势：
- 更快的初始化速度
- 更低的内存占用

### 背景

uni-app x 的 list-view组件，在ui层面基于原生的recycle-view封装，对于长列表的渲染资源可以复用。

但在vue环境下，装载长列表会对列表所有数据都创建VNode，不管渲染层这些列表是否显示。创建大量VNode会影响初始化速度和内存占用。

uni-recycle-view 组件只创建了有限的VNode，循环复用这些VNode。uni-recycle-view组件内部通过计算决定哪些数据需要在界面展示，默认展示当前滚动位置的所在屏及上下各5屏的数据。

同时它也有一些限制和注意事项：
1. uni-recycle-view 组件适用于仅使用一个for循环创建所有列表项的场景。
2. 由于滚动过程中会计算哪些数据需要渲染，因此滚动流畅度略低于list-view组件。

所以uni-recycle-view 组件是对list-view组件的一个补充方案。如果list-view的初始化速度和内存占用满足你的需求，那么继续使用list-view即可。

一般联网的分页加载列表，仍然可以使用list-view。uni-recycle-view 组件常见的场景是本地一次性遍历了大量数据并需要立即渲染在界面上。

在hello uni-app x的模板->自定义虚拟长列表示例中可以看到演示。

### 基本用法

示例参考：[hello uni-app-x 虚拟长列表模板](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/template/custom-long-list/custom-long-list.uvue)

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
      for (let i = 0; i < 2000; i++) { //这里模拟了一个2000条的本地数据
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
