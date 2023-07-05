<script>
export default {
  onLaunch: function () {
    console.log("App Launch");

    // const performance: Performance = uni.getPerformance()
    // const observer1: PerformanceObserver = performance.createObserver((entryList: PerformanceObserverEntryList) => {
    //   console.log("observer1:entryList.getEntries()" + JSON.stringify(entryList.getEntries()))
    // })
    // observer1.observe({ entryTypes: ['render', 'navigation'] } as PerformanceObserverOptions)
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  onLastPageBackPress: function (): boolean | null {
    uni.showToast({
      title: "再按一次退出应用",
      position: "bottom",
    });
    return null;
  },
};
</script>

<style>
/*每个页面公共css */
@import "./common/uni.css";

/* #ifdef H5 */
@media screen and (min-width: 768px) {
  body {
    overflow-y: scroll;
  }
}

/* 顶栏通栏样式 */
/* .uni-top-window {
  	    left: 0;
  	    right: 0;
  	} */

uni-page-body {
  background-color: #f5f5f5 !important;
  min-height: 100% !important;
  height: auto !important;
}

.uni-top-window uni-tabbar .uni-tabbar {
  background-color: #fff !important;
}

.uni-app--showleftwindow .hideOnPc {
  display: none !important;
}

/* #endif */
</style>
