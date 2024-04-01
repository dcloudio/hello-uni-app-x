jest.setTimeout(10000000);

const pages = [
  "pages/tabBar/component",
  "pages/component/view/view",
  "pages/component/scroll-view/scroll-view",
  "pages/component/text/text",
  "pages/component/text/text-props",
  "pages/component/progress/progress",
  "pages/component/form/form",
  "pages/component/button/button",
  "pages/component/radio/radio",
  "pages/component/rich-text/rich-text",
  "pages/component/rich-text/rich-text-tags",
  "pages/component/rich-text/rich-text-complex",
  "pages/component/checkbox/checkbox",
  "pages/component/textarea/textarea",
  "pages/component/slider/slider",
  "pages/component/slider-100/slider-100",
  "pages/component/switch/switch",
  "pages/component/swiper/swiper",
  "pages/component/image/image",
  "pages/component/image/image-format",
  "pages/component/image/image-mode",
  "pages/component/video/video-format",
  "pages/component/navigator/navigator",
  "pages/component/navigator/navigate",
  "pages/component/navigator/redirect",
  "pages/component/general-attribute/general-attribute",
  "pages/component/general-event/general-event",
  "pages/component/scroll-view/scroll-view-refresher",
  "pages/component/scroll-view/scroll-view-props",
  "pages/component/scroll-view/scroll-view-refresher-props",
  "pages/component/scroll-view/scroll-view-custom-refresher-props",
  "pages/component/general-event/transition-event",
  "pages/component/general-event/touch-event",
  "pages/component/scroll-view/scroll-view-refresher",
  "pages/tabBar/API",
  "pages/API/get-app/get-app",
  "pages/API/get-current-pages/get-current-pages",
  "pages/API/get-launch-options-sync/get-launch-options-sync",
  "pages/API/navigator/navigator",
  "pages/API/set-navigation-bar-color/set-navigation-bar-color",
  "pages/API/set-navigation-bar-title/set-navigation-bar-title",
  "pages/API/set-navigation-bar-color/set-custom-navigation-bar-color",
  "pages/API/navigator/new-page/new-page-1",
  "pages/API/navigator/new-page/new-page-3",
  "pages/API/pull-down-refresh/pull-down-refresh",
  "pages/API/nodes-info/nodes-info",
  "pages/API/storage/storage",
  "pages/API/action-sheet/action-sheet",
  "pages/API/modal/modal",
  "pages/API/loading/loading",
  "pages/API/toast/toast",
  "pages/API/load-font-face/load-font-face",
  "pages/API/load-font-face/load-font-face-child",
  "pages/API/get-location/get-location",
  "pages/API/interceptor/interceptor",
  "pages/API/interceptor/page1",
  "pages/API/interceptor/page2",
  "pages/API/request/request",
  "pages/API/upload-file/upload-file",
  "pages/API/download-file/download-file",
  "pages/API/websocket-socketTask/websocket-socketTask",
  "pages/API/unicloud-call-function/unicloud-call-function",
  "pages/API/unicloud-import-object/unicloud-import-object",
  "pages/API/get-system-info/get-system-info",
  "pages/API/get-device-info/get-device-info",
  "pages/API/get-app-base-info/get-app-base-info",
  "pages/API/get-system-setting/get-system-setting",
  "pages/API/get-app-authorize-setting/get-app-authorize-setting",
  "pages/API/preview-image/preview-image",
  "pages/API/save-image-to-photos-album/save-image-to-photos-album",
  "pages/API/choose-image/choose-image",
  "pages/API/get-network-type/get-network-type",
  "pages/API/page-scroll-to/page-scroll-to",
  "pages/API/event-bus/event-bus",
  "pages/API/unicloud-file-api/unicloud-file-api",
  "pages/API/unicloud-database/unicloud-database",
  "pages/API/get-window-info/get-window-info",
  "pages/API/get-element-by-id/get-element-by-id",
  "pages/API/get-element-by-id/get-element-by-id-multiple-root-node",
  "pages/API/navigator/new-page/onLoad",
  "pages/tabBar/CSS",
  "pages/CSS/background/background-color",
  "pages/CSS/background/background-image",
  "pages/CSS/border/border-bottom",
  "pages/CSS/border/border-color",
  "pages/CSS/border/border-left",
  "pages/CSS/border/border-radius",
  "pages/CSS/border/border-right",
  "pages/CSS/border/border-style",
  "pages/CSS/border/border-top",
  "pages/CSS/border/border-width",
  "pages/CSS/border/border",
  "pages/CSS/display/flex",
  "pages/CSS/display/none",
  "pages/CSS/flex/align-content",
  "pages/CSS/flex/align-items",
  "pages/CSS/flex/flex-basis",
  "pages/CSS/flex/flex-direction",
  "pages/CSS/flex/flex-flow",
  "pages/CSS/flex/flex-grow",
  "pages/CSS/flex/flex-shrink",
  "pages/CSS/flex/flex",
  "pages/CSS/flex/justify-content",
  "pages/CSS/layout/height",
  "pages/CSS/layout/max-height",
  "pages/CSS/layout/max-width",
  "pages/CSS/layout/min-height",
  "pages/CSS/layout/min-width",
  "pages/CSS/layout/position",
  "pages/CSS/layout/width",
  "pages/CSS/layout/z-index",
  "pages/CSS/layout/visibility",
  "pages/CSS/margin/margin-bottom",
  "pages/CSS/margin/margin-left",
  "pages/CSS/margin/margin-right",
  "pages/CSS/margin/margin-top",
  "pages/CSS/margin/margin",
  "pages/CSS/padding/padding-bottom",
  "pages/CSS/padding/padding-left",
  "pages/CSS/padding/padding-right",
  "pages/CSS/padding/padding-top",
  "pages/CSS/padding/padding",
  "pages/CSS/text/color",
  "pages/CSS/text/font-size",
  "pages/CSS/text/font-style",
  "pages/CSS/text/font-weight",
  "pages/CSS/text/letter-spacing",
  "pages/CSS/text/line-height",
  "pages/CSS/text/text-align",
  "pages/CSS/text/text-overflow",
  "pages/CSS/text/text-decoration-line",
  "pages/CSS/transform/translate",
  "pages/CSS/transform/scale",
  "pages/CSS/transform/rotate",
  "pages/CSS/border/complex-border/complex-border",
  "pages/CSS/overflow/overflow",
  "pages/CSS/transition/transition",
  "pages/CSS/box-shadow/box-shadow",
  "pages/tabBar/template",
  "pages/template/drop-card/drop-card",
  "pages/template/custom-tab-bar/custom-tab-bar",
  "pages/template/half-screen/half-screen",
  "pages/template/navbar-lite/navbar-lite",
  "pages/template/pull-zoom-image/pull-zoom-image",
  "pages/template/scroll-fold-nav/scroll-fold-nav",

  // 自动获取焦点
  // "pages/component/input/input",

  // web 暂不支持
  // "pages/component/list-view/list-view",
  // "pages/component/list-view/list-view-multiplex",
  // "pages/API/element-draw/element-draw",
  // "pages/template/swiper-list/swiper-list",
  // "pages/template/swiper-list2/swiper-list2",
  // "pages/template/long-list2/long-list2",

  // 动态内容
  // "pages/component/web-view/web-view"
  // "pages/template/custom-refresher/custom-refresher",
  // "pages/component/picker-view/picker-view",
  // "pages/template/long-list/long-list",
  // "pages/template/list-news/detail/detail",
  // "pages/template/swiper-vertical-video/swiper-vertical-video",

  // 网络资源加载
  // "pages/component/image/image-path",
  // "pages/CSS/text/font-family",
  // "pages/template/list-news/list-news",

  // 依赖加载完成回调
  // pages/component/web-view-local/web-view-local

  // 截图崩溃
  // "pages/component/image/image-large"
  // "pages/component/video/video"
  // "pages/API/websocket-global/websocket-global"

  // 仅 app
  // "pages/template/calendar/calendar",
  // pages/component/unicloud-db-contacts/list
  // pages/component/unicloud-db-contacts/add
  // pages/component/unicloud-db-contacts/edit
  // pages/component/unicloud-db-contacts/detail
  // pages/component/mixin-datacom/mixin-datacom
  // "pages/API/get-battery-info/get-battery-info",
  // "pages/API/get-univerify-manager/get-univerify-manager",
  // "pages/component/sticky-header/sticky-header",
  // "pages/component/sticky-section/sticky-section",
  // pages/API/facial-recognition-verify/facial-recognition-verify
  // pages/API/get-file-system-manager/get-file-system-manager
  // "pages/API/install-apk/install-apk",
  // "pages/template/scroll-sticky/scroll-sticky",
  // "pages/API/exit/exit",
  // "pages/API/element-takesnapshot/element-takesnapshot",

  // 仅 web
  // pages/template/browser-canvas/browser-canvas
  // pages/template/schema/schema
  // pages/template/share/share
];
const childToParentPagesMap = new Map([
  [
    "pages/API/load-font-face/load-font-face-child",
    "pages/API/load-font-face/load-font-face",
  ],
]);

const customNavigationPages = [
  "pages/template/navbar-lite/navbar-lite",
  "pages/template/pull-zoom-image/pull-zoom-image",
  "pages/template/scroll-fold-nav/scroll-fold-nav"
]

const needAdbScreenshotPages = [
  "pages/tabBar/component",
  "pages/tabBar/API",
  "pages/tabBar/CSS",
  "pages/tabBar/template",
  "pages/API/action-sheet/action-sheet",
  "pages/API/modal/modal",
  "pages/API/loading/loading",
  "pages/API/toast/toast",
  "pages/API/pull-down-refresh/pull-down-refresh",
];

const needAdbScreenshot = (url) => {
  return needAdbScreenshotPages.includes(url);
};

const PAGE_PATH =
  "/pages/webview-screenshot/webview-screenshot";

describe("shot-compare", () => {
  let shouldCompareScreenShot = false
  if (process.env.uniTestPlatformInfo.startsWith('android')) {
    let version = process.env.uniTestPlatformInfo
    version = parseInt(version.split(" ")[1])
    shouldCompareScreenShot = version > 9
  }

  if (!shouldCompareScreenShot) {
    it("other platform not support", async () => {
      expect(1).toBe(1);
    });
    return
  }
  let page = null;
  let pageIndex = 0;
  let baseSrc = "";
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH);
    await page.waitFor(500);

    // set webview-screenshot page baseSrc
    baseSrc =
      process.env.UNI_WEB_SERVICE_URL ? `${process.env.UNI_WEB_SERVICE_URL}/#/` :
      "http://test.dcloud.io/unix_h5_build/98_dev_hello-uni-app-x/#/";
    page.setData({
      baseSrc,
    });
  });

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH);
    await page.waitFor(500);
  });
  afterEach(() => {
    pageIndex++;
  });

  test.each(pages)("%s", async () => {
    const isNeedAdbScreenshot = needAdbScreenshot(pages[pageIndex]);
    const isCustomNavigation = customNavigationPages.includes(pages[pageIndex]);
    const {
      headerHeight,
      devicePixelRatio
    } = await page.data();
    const screenshotParams = {
      fullPage: true,
      adb: isNeedAdbScreenshot,
      // adb 截图时跳过状态栏
      area: {
        x: 0,
        y: (headerHeight - 44) * devicePixelRatio,
      },
    }
    const screenshotPath = `webview-shot__${pages[pageIndex].replace(/\//g, "-")}`;

    // web in webview screenshot
    // 加载依赖页面
    if (childToParentPagesMap.get(pages[pageIndex])) {
      await page.setData({
        src: `${baseSrc}${childToParentPagesMap.get(pages[pageIndex])}`,
        isLoaded: false
      });
      await page.waitFor(async () => {
        const isLoaded = await page.data("isLoaded");
        return isLoaded || Date.now() - startTime > 10000;
      });
      await page.waitFor(200);
    }
    await page.setData({
      src: `${baseSrc}${pages[pageIndex]}`,
      isLoaded: false,
      needRemoveWebHead: !isNeedAdbScreenshot,
    });

    const startTime = Date.now();
    await page.waitFor(async () => {
      const isLoaded = await page.data("isLoaded");
      return isLoaded || Date.now() - startTime > 3000;
    });
    await page.waitFor(1000);
    if (pages[pageIndex].includes("load-font-face")) {
      await page.waitFor(3000);
    }

    // web 端非 adb 截图时设置 offsetY 移除导航栏
    const webSnapshot = await program.screenshot({
      ...screenshotParams,
      offsetY: `${isCustomNavigation ? 0 : headerHeight}`
    });
    expect(webSnapshot).toMatchImageSnapshot({
      customSnapshotIdentifier() {
        return screenshotPath;
      },
    });
  });
});
