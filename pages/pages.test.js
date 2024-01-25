let pageIndex = 0
const pages = [
  // component
  '/pages/component/button/button',
  '/pages/component/checkbox/checkbox',
  '/pages/component/general-attribute/general-attribute',
  '/pages/component/general-event/general-event',
  '/pages/component/image/image-format',
  // '/pages/component/image/image-large', // 截图过大
  // '/pages/component/image/image-mode', // 判断CPU类型，单独测试例截图
  // '/pages/component/image/image-path', // 网络资源加载，单独测试例截图
  '/pages/component/image/image',
  // '/pages/component/input/input', // 自动获取焦点，单独测试例截图
  // '/pages/component/list-view/list-view',
  '/pages/component/navigator/navigate',
  '/pages/component/navigator/navigator',
  '/pages/component/navigator/redirect',
  // '/pages/component/picker-view/picker-view', //动态内容
  '/pages/component/progress/progress',
  '/pages/component/radio/radio',
  '/pages/component/rich-text/rich-text-complex',
  '/pages/component/rich-text/rich-text-tags',
  '/pages/component/rich-text/rich-text',
  '/pages/component/scroll-view/scroll-view-custom-refresher-props',
  '/pages/component/scroll-view/scroll-view-refresher-props',
  '/pages/component/slider/slider',
  '/pages/component/slider-100/slider-100',
  '/pages/component/swiper/swiper',
  '/pages/component/switch/switch',
  '/pages/component/text/text-props',
  '/pages/component/text/text',
  '/pages/component/textarea/textarea',
  // '/pages/component/video/video',
  '/pages/component/view/view',
  // '/pages/component/web-view/web-view', // 动态内容
  // '/pages/component/web-view-local/web-view-local', // 依赖加载完成回调，单独测试例截图
  '/pages/component/general-event/transition-event',

  // CSS
  '/pages/CSS/background/background-color',
  '/pages/CSS/background/background-image',
  '/pages/CSS/border/complex-border/complex-border',
  '/pages/CSS/border/border-bottom',
  '/pages/CSS/border/border-color',
  '/pages/CSS/border/border-left',
  '/pages/CSS/border/border-radius',
  '/pages/CSS/border/border-right',
  '/pages/CSS/border/border-style',
  '/pages/CSS/border/border-top',
  '/pages/CSS/border/border-width',
  '/pages/CSS/border/border',
  // '/pages/CSS/box-shadow/box-shadow',
  '/pages/CSS/display/flex',
  '/pages/CSS/display/none',
  '/pages/CSS/flex/align-content',
  '/pages/CSS/flex/align-items',
  '/pages/CSS/flex/flex-basis',
  '/pages/CSS/flex/flex-direction',
  '/pages/CSS/flex/flex-flow',
  '/pages/CSS/flex/flex-grow',
  '/pages/CSS/flex/flex-shrink',
  '/pages/CSS/flex/flex',
  '/pages/CSS/flex/justify-content',
  '/pages/CSS/layout/height',
  '/pages/CSS/layout/max-height',
  '/pages/CSS/layout/max-width',
  '/pages/CSS/layout/min-height',
  '/pages/CSS/layout/min-width',
  '/pages/CSS/layout/position',
  '/pages/CSS/layout/visibility',
  '/pages/CSS/layout/width',
  '/pages/CSS/layout/z-index',
  '/pages/CSS/margin/margin-bottom',
  '/pages/CSS/margin/margin-left',
  '/pages/CSS/margin/margin-right',
  '/pages/CSS/margin/margin-top',
  '/pages/CSS/margin/margin',
  '/pages/CSS/padding/padding-bottom',
  '/pages/CSS/padding/padding-left',
  '/pages/CSS/padding/padding-right',
  '/pages/CSS/padding/padding-top',
  '/pages/CSS/padding/padding',
  '/pages/CSS/text/color',
  // '/pages/CSS/text/font-family', // 网络资源加载，单独测试例截图
  '/pages/CSS/text/font-size',
  '/pages/CSS/text/font-style',
  '/pages/CSS/text/font-weight',
  '/pages/CSS/text/letter-spacing',
  '/pages/CSS/text/line-height',
  '/pages/CSS/text/text-align',
  '/pages/CSS/text/text-decoration-line',
  '/pages/CSS/text/text-overflow',
  '/pages/CSS/transform/rotate',
  '/pages/CSS/transform/scale',
  '/pages/CSS/transform/translate',
  // '/pages/CSS/transition/transition',

  // tabBar  //改动频繁，不再测试
  // '/pages/tabBar/API',
  // '/pages/tabBar/component',
  // '/pages/tabBar/CSS',
  // '/pages/tabBar/template',

  // template
  // '/pages/template/calendar/calendar', // 动态内容
  // '/pages/template/custom-refresher/custom-refresher',
  // '/pages/template/custom-tab-bar/custom-tab-bar',
  // '/pages/template/drop-card/drop-card',
  // '/pages/template/half-screen/half-screen',
  // '/pages/template/list-news/list-news', // 网络资源加载，单独测试例截图
  // '/pages/template/long-list/long-list', // 动态内容
  // '/pages/template/navbar-lite/navbar-lite',
  // '/pages/template/pull-zoom-image/pull-zoom-image',
  // '/pages/template/scroll-fold-nav/scroll-fold-nav',
  // '/pages/template/scroll-sticky/scroll-sticky',
  // '/pages/template/swiper-list/swiper-list',
  // '/pages/template/swiper-list2/swiper-list2',
  // '/pages/template/swiper-vertical-video/swiper-vertical-video'

  // api
  // '/pages/API/element-draw/element-draw',
]

if (process.env.uniTestPlatformInfo.startsWith('android')) {
  // 规避 web 端不支持页面
  pages.push(
    "/pages/component/list-view/list-view",
    "/pages/CSS/transition/transition",
    '/pages/template/swiper-list/swiper-list',
    '/pages/template/swiper-list2/swiper-list2',
    '/pages/API/element-draw/element-draw',
    '/pages/template/navbar-lite/navbar-lite',
    '/pages/template/pull-zoom-image/pull-zoom-image',
    '/pages/template/scroll-fold-nav/scroll-fold-nav',
    '/pages/template/scroll-sticky/scroll-sticky',
    '/pages/template/custom-refresher/custom-refresher',
    '/pages/template/custom-tab-bar/custom-tab-bar',
    '/pages/template/half-screen/half-screen',
  )
}

// 设置position: fixed的页面不能截取完整内容
const notFullPages = [
  '/pages/CSS/layout/position',
  '/pages/CSS/layout/z-index'
]

let page;
describe("page screenshot test", () => {
  beforeAll(async () => {
    console.log("page screenshot test start");
  });
  beforeEach(async () => {
    page = await program.reLaunch(pages[pageIndex]);
    await page.waitFor(1000);
  });
  afterEach(() => {
    pageIndex++;
  });
  afterAll(() => {
    console.log("page screenshot test finish");
  });
  test.each(pages)("%s", async () => {
    console.log("Taking screenshot: ", pageIndex, pages[pageIndex]);
    let fullPage = true;
    if (notFullPages.includes(pages[pageIndex])) {
      fullPage = false;
    }
    const image = await program.screenshot({
      fullPage: fullPage
    });
    expect(image).toMatchImageSnapshot();
    await page.waitFor(500);
  });
});
