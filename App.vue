<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')

      // const performance: Performance = uni.getPerformance()
      // const observer1: PerformanceObserver = performance.createObserver((entryList: PerformanceObserverEntryList) => {
      //   console.log("observer1:entryList.getEntries()" + JSON.stringify(entryList.getEntries()))
      // })
      // observer1.observe({ entryTypes: ['render', 'navigation'] } as PerformanceObserverOptions)
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style>
  /*每个页面公共css */
  @import './common/uni.css';
</style>