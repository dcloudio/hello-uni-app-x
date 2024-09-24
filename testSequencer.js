const Sequencer = require("@jest/test-sequencer").default
const sortTestFilePaths = [
  "pages/component/view/view.test.js",
  "pages/API/pull-down-refresh/pull-down-refresh.test.js",
  "pages/component/global-events/global-events.test.js",
  "pages/component/list-view/list-view-refresh.test.js",
  "pages/component/scroll-view/scroll-view-refresher.test.js",
  "pages/component/global-events/touch-events.test.js",
  "pages/component/global-events/touch-events-bubbles.test.js",
  "pages/component/swiper/swiper2.test.js",
  "pages/component/rich-text/rich-text-complex.test.js"
]
class CustomSequencer extends Sequencer {
  sort(tests) {
    // 测试例排序
    const sortedTests = sortTestFilePaths
      .map((filePath) => {
        return tests.find((test) => test.path.endsWith(filePath))
      })
      .filter(Boolean)
    return [...new Set([...sortedTests, ...tests])]
  }
}

module.exports = CustomSequencer
