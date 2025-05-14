const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIos = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isApp = isAndroid || isIos || isHarmony
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')
const isAppWebview = !!process.env.UNI_AUTOMATOR_APP_WEBVIEW

let pageIndex = 0
const pages = [
  // tabBar  //改动频繁，不再测试
  // '/pages/tabBar/component',
  // '/pages/tabBar/API',
  // '/pages/tabBar/CSS',
  // '/pages/tabBar/template',

  // component
  '/pages/component/view/view',
  // 单独测试例截图
  // 'pages/component/scroll-view/scroll-view',
  // 单独测试例截图
  // '/pages/component/scroll-view/scroll-view-refresher',
  // 单独测试例截图
  // '/pages/component/scroll-view/scroll-view-props',
  '/pages/component/scroll-view/scroll-view-refresher-props',
  '/pages/component/scroll-view/scroll-view-custom-refresher-props',
  '/pages/component/swiper/swiper',
  // '/pages/component/list-view/list-view',
  // 单独测试例截图
  // '/pages/component/list-view/list-view-refresh',
  // 单独测试例截图
  // '/pages/component/list-view/list-view-multiplex',
  // '/pages/component/list-view/list-view-multiplex-input',
  // '/pages/component/list-view/list-view-multiplex-video',
  // '/pages/component/list-view/list-view-children-in-slot',
  // 单独测试例截图
  // '/pages/component/sticky-section/sticky-section',
  // 单独测试例截图
  // '/pages/component/sticky-header/sticky-header',
  '/pages/component/text/text',
  // 单独测试例截图
  // '/pages/component/text/text-props',
  '/pages/component/rich-text/rich-text',
  '/pages/component/rich-text/rich-text-complex',
  '/pages/component/progress/progress',
  '/pages/component/form/form',
  '/pages/component/button/button',
  '/pages/component/button/buttonstatus',
  '/pages/component/radio/radio',
  '/pages/component/checkbox/checkbox',
  // 自动获取焦点，单独测试例截图
  // '/pages/component/input/input',
  '/pages/component/textarea/textarea',
  '/pages/component/slider/slider',
  '/pages/component/slider/slider-in-swiper',
  //动态内容
  // '/pages/component/picker-view/picker-view',
  '/pages/component/switch/switch',
  '/pages/component/image/image',
  '/pages/component/image/image-format',
  // 判断CPU类型，单独测试例截图
  // '/pages/component/image/image-mode',
  // 网络资源加载，单独测试例截图
  // '/pages/component/image/image-path',
  // 截图过大
  // '/pages/component/image/image-large',
  '/pages/component/video/video',
  '/pages/component/video/video-format',
  '/pages/component/navigator/navigator',
  '/pages/component/navigator/navigate',
  '/pages/component/navigator/redirect',
  // 动态内容
  // '/pages/component/web-view/web-view',
  // 依赖加载完成回调，单独测试例截图
  // '/pages/component/web-view/web-view/web-view-local',
  // 动态内容
  // '/pages/component/unicloud-db/unicloud-db',
  '/pages/component/unicloud-db/unicloud-db/contacts/add',
  // 动态内容
  // '/pages/component/unicloud-db/unicloud-db/contacts/edit',
  // 动态内容
  // '/pages/component/unicloud-db/unicloud-db/contacts/detail',
  // 动态内容
  // '/pages/component/unicloud-db/unicloud-db/mixin-datacom/mixin-datacom',
  // 单独测试例截图
  // '/pages/component/global-properties/global-properties',
  '/pages/component/global-events/global-events',
  '/pages/component/global-events/transition-events',
  '/pages/component/global-events/touch-events',
  // 单独测试例截图
  // '/pages/component/nested-scroll-header/nested-scroll-header',
  // 单独测试例截图
  // '/pages/component/nested-scroll-body/nested-scroll-body',
  // 单独测试例截图
  // '/pages/component/swiper/swiper-list-view',
  // 单独测试例截图
  // '/pages/component/list-view/issue-2199',

  // API
  '/pages/API/get-app/get-app',
  // 单独测试例截图
  // '/pages/API/get-current-pages/get-current-pages',
  // 单独测试例截图
  // '/pages/API/get-current-pages/set-page-style-disable-pull-down-refresh',
  '/pages/API/get-launch-options-sync/get-launch-options-sync',
  '/pages/API/navigator/navigator',
  // 单独测试例截图
  // '/pages/API/set-navigation-bar-color/set-navigation-bar-color',
  // 单独测试例截图
  // '/pages/API/set-navigation-bar-title/set-navigation-bar-title',
  // 单独测试例截图
  // '/pages/API/set-page-backgroundColorContent/set-page-backgroundColorContent',
  // 单独测试例截图
  // '/pages/API/navigator/new-page/new-page-1',
  '/pages/API/navigator/new-page/new-page-3',
  '/pages/API/navigator/new-page/onLoad',
  // 单独测试例截图
  // '/pages/API/pull-down-refresh/pull-down-refresh',
  // 单独测试例截图
  // '/pages/API/get-element-by-id/get-element-by-id',
  // 单独测试例截图
  // '/pages/API/get-element-by-id/get-element-by-id-multiple-root-node',
  '/pages/API/create-selector-query/create-selector-query',
  '/pages/API/storage/storage',
  // 单独测试例截图
  // '/pages/API/show-action-sheet/show-action-sheet',
  // 单独测试例截图
  // '/pages/API/show-modal/show-modal',
  '/pages/API/show-loading/show-loading',
  // 单独测试例截图
  // '/pages/API/show-toast/show-toast',
  // 单独测试例截图
  // '/pages/API/load-font-face/load-font-face',
  // 单独测试例截图
  // '/pages/API/load-font-face/load-font-face-child',
  '/pages/API/get-location/get-location',
  '/pages/API/interceptor/interceptor',
  '/pages/API/interceptor/page1',
  '/pages/API/interceptor/page2',
  '/pages/API/request/request',
  '/pages/API/upload-file/upload-file',
  '/pages/API/download-file/download-file',
  '/pages/API/websocket/socketTask',
  // 页面销毁时会关闭socket连接，所以规避
  // '/pages/API/websocket/websocket',
  '/pages/API/unicloud/unicloud/cloud-function',
  '/pages/API/unicloud/unicloud/cloud-object',
  '/pages/API/unicloud/unicloud/database',
  '/pages/API/unicloud/unicloud/cloud-storage',
  '/pages/API/get-system-info/get-system-info',
  '/pages/API/get-device-info/get-device-info',
  '/pages/API/get-app-base-info/get-app-base-info',
  '/pages/API/preview-image/preview-image',
  '/pages/API/choose-image/choose-image',
  '/pages/API/choose-video/choose-video',
  '/pages/API/get-network-type/get-network-type',
  '/pages/API/page-scroll-to/page-scroll-to',
  '/pages/API/event-bus/event-bus',
  // '/pages/API/get-battery-info/get-battery-info',
  '/pages/API/get-window-info/get-window-info',
  '/pages/API/rpx2px/rpx2px',
  '/pages/API/request-payment/request-payment/order-detail',
  // 单独测试例截图
  // '/pages/API/resize-observer/resize-observer',
  // 单独测试例截图
  // '/pages/API/map/map',

  // CSS
  '/pages/CSS/background/background-color',
  // 单独测试例中截图
  // '/pages/CSS/background/background-image',
  // '/pages/CSS/border/border',
  '/pages/CSS/border/border-color',
  '/pages/CSS/border/border-top',
  '/pages/CSS/border/border-bottom',
  '/pages/CSS/border/border-left',
  '/pages/CSS/border/border-right',
  '/pages/CSS/border/border-radius',
  '/pages/CSS/border/border-style',
  '/pages/CSS/border/border-width',
  '/pages/CSS/border/complex-border/complex-border',
  // 单独测试例中截图
  // '/pages/CSS/border/dynamic-border',
  '/pages/CSS/box-shadow/box-shadow',
  '/pages/CSS/display/flex',
  '/pages/CSS/display/none',
  '/pages/CSS/flex/flex',
  '/pages/CSS/flex/align-content',
  '/pages/CSS/flex/align-items',
  '/pages/CSS/flex/flex-basis',
  '/pages/CSS/flex/flex-direction',
  '/pages/CSS/flex/flex-flow',
  '/pages/CSS/flex/flex-grow',
  '/pages/CSS/flex/flex-shrink',
  '/pages/CSS/flex/justify-content',
  '/pages/CSS/layout/height',
  '/pages/CSS/layout/min-height',
  '/pages/CSS/layout/max-height',
  '/pages/CSS/layout/min-width',
  '/pages/CSS/layout/max-width',
  '/pages/CSS/layout/position',
  '/pages/CSS/layout/width',
  // 单独测试例中截图
  // '/pages/CSS/layout/z-index',
  '/pages/CSS/layout/visibility',
  '/pages/CSS/margin/margin',
  '/pages/CSS/margin/margin-top',
  '/pages/CSS/margin/margin-bottom',
  '/pages/CSS/margin/margin-left',
  '/pages/CSS/margin/margin-right',
  '/pages/CSS/padding/padding',
  '/pages/CSS/padding/padding-top',
  '/pages/CSS/padding/padding-bottom',
  '/pages/CSS/padding/padding-left',
  '/pages/CSS/padding/padding-right',
  // 单独测试例中截图
  // '/pages/CSS/overflow/overflow',
  '/pages/CSS/text/color',
  // 网络资源加载，单独测试例截图
  // '/pages/CSS/text/font-family',
  // 单独测试例截图
  // '/pages/CSS/text/font-size',
  '/pages/CSS/text/font-style',
  '/pages/CSS/text/font-weight',
  '/pages/CSS/text/letter-spacing',
  '/pages/CSS/text/line-height',
  '/pages/CSS/text/text-align',
  '/pages/CSS/text/text-overflow',
  '/pages/CSS/text/text-decoration-line',
  '/pages/CSS/text/text-shadow',
  // 单独测试例截图
  // '/pages/CSS/transition/transition',
  '/pages/CSS/pointer-events/pointer-events',
  // 单独测试例截图
  // '/pages/CSS/transform/translate',
  // 单独测试例截图
  // '/pages/CSS/transform/scale',
  // 单独测试例截图
  // '/pages/CSS/transform/rotate',
  // 单独测试例截图
  // '/pages/CSS/variable/variable',
  '/pages/CSS/overflow/overflow-visible-event',

  // template
  // 网络资源加载，单独测试例截图
  // '/pages/template/list-news/list-news',
  // 依赖网络资源加载
  // '/pages/template/list-news/detail/detail',
  '/pages/template/drop-card/drop-card',
  '/pages/template/swiper-list/swiper-list',
  '/pages/template/swiper-list2/swiper-list2',
  '/pages/template/swiper-vertical-video/swiper-vertical-video',
  '/pages/template/scroll-fold-nav/scroll-fold-nav',
  '/pages/template/half-screen/half-screen',
  // 动态内容
  // '/pages/template/long-list/long-list',
  // 动态内容
  // '/pages/template/long-list2/long-list2',
  // harmony 整体测试时截图异常，单独测试例截图
  // '/pages/template/pull-zoom-image/pull-zoom-image',
  '/pages/template/navbar-lite/navbar-lite',
  '/pages/template/custom-tab-bar/custom-tab-bar',
  // 动态内容
  // '/pages/template/calendar/calendar',
  // '/pages/template/schema/schema',
  // '/uni_modules/uni-pay-x/pages/success/success',
  // 依赖 onload 参数获取 web-view src
  // '/uni_modules/uni-pay-x/pages/ad-interactive-webview/ad-interactive-webview',
  // '/uni_modules/uni-pay-x/pages/pay-desk/pay-desk',
  '/pages/template/custom-long-list/custom-long-list',
  '/pages/template/test-background-color-content/test-background-color-content',
  '/pages/template/slider-100/slider-100',
  // 单独测试例截图
  // '/pages/template/long-list-nested/long-list-nested',
]

if (isAndroid && isWeb) {
  pages.push(
    '/pages/API/get-battery-info/get-battery-info',
  )
}

if(!isMP) {
  pages.push(
    '/pages/component/list-view/list-view',
    '/pages/component/list-view/list-view-children-in-slot',
    '/uni_modules/uni-pay-x/pages/success/success',
    '/uni_modules/uni-pay-x/pages/pay-desk/pay-desk'
  )
  if (!isHarmony) {
    pages.push(
      '/pages/template/schema/schema',
    )
  }
}

if (!isAppWebview) {
  if (isApp) {
    pages.push(
      '/pages/template/custom-refresher/custom-refresher',
      '/pages/API/get-file-system-manager/get-file-system-manager',
      '/pages/API/get-system-setting/get-system-setting',
      '/pages/API/element-takesnapshot/element-takesnapshot',
      '/pages/API/get-app-authorize-setting/get-app-authorize-setting',
      // 进入页面崩溃，暂时规避
      // '/pages/API/get-univerify-manager/get-univerify-manager',
      '/pages/API/request-payment/request-payment',
      '/pages/template/scroll-sticky/scroll-sticky',
    )
  }
  if(isIos || isAndroid){
    pages.push(
      '/pages/API/theme-change/theme-change',
      '/pages/API/facial-recognition-meta-info/facial-recognition-meta-info',
      '/pages/API/env/env',
      '/pages/API/element-draw/element-draw',
      '/pages/component/waterflow/waterflow-fit-height',
      '/pages/API/share-with-system/share-with-system',
      '/pages/template/test-uts-button/test-uts-button'
    )
  }
  pages.push('/pages/API/request-payment/request-payment/request-payment-uni-pay')
}

if (isAndroid && !isAppWebview) {
  pages.push(
    '/pages/API/exit/exit',
    '/pages/API/install-apk/install-apk',
    '/pages/API/get-image-info/get-image-info',
    '/pages/API/get-video-info/get-video-info',
    '/pages/API/create-rewarded-video-ad/create-rewarded-video-ad',
    '/pages/API/create-request-permission-listener/create-request-permission-listener',
    '/pages/API/compress-image/compress-image',
    '/pages/API/compress-video/compress-video',
  )
}


if (isWeb) {
  pages.push(
    '/pages/component/movable-view/movable-view',
    '/pages/component/label/label',
    '/pages/component/picker/picker',
    '/pages/API/get-image-info/get-image-info',
    '/pages/API/get-video-info/get-video-info',
    '/pages/API/make-phone-call/make-phone-call',
    '/pages/API/create-inner-audio-context/create-inner-audio-context',
    '/pages/API/create-inner-audio-context/inner-audio-format',
    '/pages/API/create-inner-audio-context/inner-audio-path',
    '/pages/API/clipboard/clipboard',
    '/pages/API/compass/compass',
    '/pages/component/canvas/canvas',
    '/pages/component/canvas/canvas/ball',
    '/pages/template/browser-element/browser-element',
  )
}

let page;
let windowInfo

function getWaitForTagName(pagePath) {
  if (pagePath === '/pages/component/list-view/list-view-multiplex-input') {
    return 'input'
  }
  if (pagePath === '/pages/component/list-view/list-view-multiplex-video') {
    return 'video'
  }
  if (
    pagePath === '/pages/component/global-events/transition-events' ||
    pagePath === '/pages/API/env/env'
  ) {
    return 'text'
  }
  if (
    pagePath === '/pages/component/unicloud-db/unicloud-db/contacts/edit' ||
    pagePath === '/pages/component/unicloud-db/unicloud-db/contacts/detail'
  ) {
    return 'scroll-view'
  }
  if (pagePath === '/pages/API/get-file-system-manager/get-file-system-manager') {
    return 'button'
  }
  if (pagePath === '/pages/template/custom-refresher/custom-refresher') {
    return 'list-view'
  }
  return 'view'
}

describe("page screenshot test", () => {
  // TODO: 暂时屏蔽 harmony 截图测试，规避应用崩溃
  if (platformInfo.indexOf('safari') !== -1) {
    it('暂时规避 safari 截图测试', () => {
      expect(1).toBe(1)
    })
    return
  }

  beforeAll(async () => {
    console.log("page screenshot test start");
    windowInfo = await program.callUniMethod('getWindowInfo');
  });
  beforeEach(async () => {
    const currentPagePath = pages[pageIndex]
    page = await program.reLaunch(currentPagePath);
    await page.waitFor(getWaitForTagName(currentPagePath));
  });
  afterEach(() => {
    pageIndex++;
  });
  afterAll(() => {
    console.log("page screenshot test finish");
  });
  test.each(pages)("%s", async () => {
    const currentPagePath = pages[pageIndex]
    console.log("Taking screenshot: ", pageIndex, currentPagePath);
    let fullPage = true;

    const screenshotParams = {
      fullPage
    }
    if (!fullPage && !isAppWebview) {
      screenshotParams.offsetY = isApp ? `${windowInfo.safeAreaInsets.top + 44}` : '0'
    }

    const image = await program.screenshot(screenshotParams);
    expect(image).toSaveImageSnapshot({
      customSnapshotIdentifier() {
        return `__pages_test__/${currentPagePath.replace(/\//g, "-").substring(1)}`
      }
    })
    await page.waitFor(800);
  });
});
