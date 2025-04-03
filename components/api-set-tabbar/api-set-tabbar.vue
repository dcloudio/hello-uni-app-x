<template>
  <view class="uni-padding-wrap">
    <page-head :title="title"></page-head>
    <button class="button" @click="setTabBarBadge">{{ !hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标' }}</button>
    <button class="button" @click="showTabBarRedDot">{{ !hasShownTabBarRedDot ?  '显示红点' : '移除红点'}}</button>
    <button class="button" @click="customStyle">{{ !hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式'}}</button>
    <button class="button" @click="customItem">{{ !hasCustomedItem ? '自定义Tab信息' : '移除自定义信息' }}</button>
    <button class="button" @click="hideTabBar">{{ !hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar' }}</button>
    // #ifdef APP-ANDROID || APP-IOS || WEB || APP-HARMONY
    <button class="button" @click="hideTabBarItem">{{ !hasHiddenTabBarItem ? '隐藏接口Item' : '显示接口Item' }}</button>
    // #endif
    <button class="button" @click="setTabBarTitle">{{ !hasSetLongTitle ? '自定义超长标题' : '移除自定义信息' }}</button>
    <view class="btn-area">
      <!-- <button class="button" type="primary" @click="navigateBack">关闭</button> -->
    </view>
  </view>
</template>

<script lang="uts">
  export default {
    data() {
      return {
        title: 'tababr',
        hasSetTabBarBadge: false,
        hasShownTabBarRedDot: false,
        hasCustomedStyle: false,
        hasCustomedItem: false,
        hasHiddenTabBar: false,
        hasHiddenTabBarItem: false,
        hasSetLongTitle: false,
      }
    },
    destroyed() {
      if (this.hasSetTabBarBadge) {
        uni.removeTabBarBadge({
          index: 1
        })
      }
      if (this.hasShownTabBarRedDot) {
        uni.hideTabBarRedDot({
          index: 1
        })
      }
      if (this.hasHiddenTabBar) {
        uni.showTabBar()
      }
      if (this.hasCustomedStyle) {
        uni.setTabBarStyle({
          color: '#7A7E83',
          selectedColor: '#007AFF',
          backgroundColor: '#F8F8F8',
          borderStyle: 'black'
        })
      }

      if (this.hasCustomedItem) {
        let tabBarOptions = {
          index: 1,
          text: '接口',
          iconPath: '/static/api.png',
          selectedIconPath: '/static/apiHL.png'
        } as SetTabBarItemOptions
        uni.setTabBarItem(tabBarOptions)
      }

      if (this.hasHiddenTabBarItem || this.hasSetLongTitle) {
        let tabBarOptions = {
          visible: true,
          index: 1,
          text: '接口',
          iconPath: '/static/api.png',
          selectedIconPath: '/static/apiHL.png'
        } as SetTabBarItemOptions
        uni.setTabBarItem(tabBarOptions)
      }
    },
    methods: {
      setTabBarTitle(){
        // #ifdef APP-HARMONY
        uni.showToast({
          title: "暂不支持"
        })
        // #endif

        // #ifndef APP-HARMONY
        let tabBarOptions = {
          visible: true,
          index: 1,
          text: '接口',
          iconPath: '/static/api.png',
          selectedIconPath: '/static/apiHL.png'
        } as SetTabBarItemOptions

        if (!this.hasSetLongTitle) {
          tabBarOptions.text = "超长标题内容超长标题内容超长标题内容超长标题测试";
          tabBarOptions.iconPath = "";
          tabBarOptions.selectedIconPath = "";
        } else {
          tabBarOptions.text = "接口";
          tabBarOptions.iconPath = "/static/api.png";
          tabBarOptions.selectedIconPath = "/static/apiHL.png";
        }
        uni.setTabBarItem(tabBarOptions)
        this.hasSetLongTitle = !this.hasSetLongTitle
        // #endif
      },
      hideTabBarItem(){
        // #ifdef APP-HARMONY
        uni.showToast({
          title: "暂不支持"
        })
        // #endif

        // #ifndef APP-HARMONY
        let tabBarOptions = {
          visible: true,
          index: 1,
          text: '接口',
          iconPath: '/static/api.png',
          selectedIconPath: '/static/apiHL.png'
        } as SetTabBarItemOptions

        if (!this.hasHiddenTabBarItem) {
          tabBarOptions.visible = false;
        } else {
          tabBarOptions.visible = true;
        }
        uni.setTabBarItem(tabBarOptions)
        this.hasHiddenTabBarItem = !this.hasHiddenTabBarItem
        // #endif
      },
      navigateBack() {
        this.$emit('unmount')
      },
      setTabBarBadge() {
        if (this.hasShownTabBarRedDot) {
          uni.hideTabBarRedDot({
            index: 1
          })
          this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot
        }
        if (!this.hasSetTabBarBadge) {
          uni.setTabBarBadge({
            index: 1,
            text: '1'
          })
        } else {
          uni.removeTabBarBadge({
            index: 1
          })
        }
        this.hasSetTabBarBadge = !this.hasSetTabBarBadge
      },
      showTabBarRedDot() {
        if (this.hasSetTabBarBadge) {
          uni.removeTabBarBadge({
            index: 1
          })
          this.hasSetTabBarBadge = !this.hasSetTabBarBadge
        }
        if (!this.hasShownTabBarRedDot) {
          uni.showTabBarRedDot({
            index: 1
          })
        } else {
          uni.hideTabBarRedDot({
            index: 1
          })
        }
        this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot
      },
      hideTabBar() {
        if (!this.hasHiddenTabBar) {
          uni.hideTabBar()
        } else {
          uni.showTabBar()
        }
        this.hasHiddenTabBar = !this.hasHiddenTabBar
      },
      customStyle() {
        if (this.hasCustomedStyle) {
          uni.setTabBarStyle({
            color: '#7A7E83',
            selectedColor: '#007AFF',
            backgroundColor: '#F8F8F8',
            borderStyle: 'black',
            // 新增 borderColor，优先级高于 borderStyle
            // borderColor:'red'
          })
        } else {
          uni.setTabBarStyle({
            color: '#FFF',
            selectedColor: '#007AFF',
            backgroundColor: '#000000',
            borderStyle: 'black',
          })
        }
        this.hasCustomedStyle = !this.hasCustomedStyle
      },
      customItem() {
        // #ifdef APP-HARMONY
        uni.showToast({
          title: "暂不支持"
        })
        // #endif

        // #ifndef APP-HARMONY
        let tabBarOptions = {
          index: 1,
          text: '接口',
          iconPath: '/static/api.png',
          selectedIconPath: '/static/apiHL.png'
        } as SetTabBarItemOptions
        if (this.hasCustomedItem) {
          uni.setTabBarItem(tabBarOptions)
        } else {
          tabBarOptions.text = 'API'
          uni.setTabBarItem(tabBarOptions)
        }
        this.hasCustomedItem = !this.hasCustomedItem
        // #endif
      }
    }
  }
</script>

<style>
  .button {
    margin-top: 15px;
    margin-left: 0;
    margin-right: 0;
  }

  .btn-area {
    padding-top: 15px;
  }
</style>
