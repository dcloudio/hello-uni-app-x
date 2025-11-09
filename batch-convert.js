const fs = require('fs');
const path = require('path');

// 所有需要转换的文件列表(排除App.uvue)
const files = [
  "pages\\component\\canvas\\canvas-context.uvue",
  "pages\\component\\image\\image-path.uvue",
  "uni_modules\\uni-loading\\components\\uni-loading\\uni-loading.uvue",
  "pages\\API\\dialog-page\\dialog-6.uvue",
  "pages\\API\\create-worker\\worker-sendable-transfer.uvue",
  "pages\\API\\create-worker\\uts-create-worker.uvue",
  "pages\\component\\image\\image-format.uvue",
  "pages\\template\\about\\about.uvue",
  "pages\\API\\pull-down-refresh\\pull-down-refresh.uvue",
  "pages\\API\\element-takesnapshot\\element-takesnapshot.uvue",
  "pages\\API\\element-request-fullscreen\\element-request-fullscreen.uvue",
  "pages\\component\\video\\video-dialog-page.uvue",
  "pages\\API\\virtual-payment\\virtual-payment-uni-pay.uvue",
  "pages\\API\\theme-change\\theme-change.uvue",
  "pages\\tabBar\\template.uvue",
  "pages\\component\\view\\issue-21144.uvue",
  "windows\\left-window.uvue",
  "uni_modules\\uni-icons\\components\\uni-icons\\uni-icons.uvue",
  "pages\\tabBar\\component.uvue",
  "pages\\tabBar\\CSS.uvue",
  "pages\\tabBar\\API.uvue",
  "pages\\component\\slider\\slider-maxValue.uvue",
  "pages\\component\\share-element\\share-element-with-swiper.uvue",
  "pages\\component\\list-view\\issue-2199.uvue",
  "pages\\component\\button\\privacy.uvue",
  "pages\\component\\ad\\video-ad.uvue",
  "pages\\component\\ad\\landscape-video-ad.uvue",
  "pages\\component\\ad\\portrait-video-ad.uvue",
  "pages\\API\\get-uni-verify-manager\\uni-verify-custom-page.uvue",
  "pages\\API\\get-uni-verify-manager\\full-webview-page.uvue",
  "pages\\API\\get-file-system-manager\\testStatic.uvue",
  "pages\\API\\dialog-page\\dialog-textarea.uvue",
  "pages\\API\\dialog-page\\dialog-1.uvue",
  "pages\\API\\dialog-page\\dialog-input.uvue",
  "pages\\API\\animate\\animate.uvue",
  "components\\issue-21223-comp\\issue-21223-comp.uvue",
  "windows\\top-window.uvue",
  "pages\\template\\calendar\\calendar.uvue",
  "pages\\component\\rich-text\\rich-text-tags.uvue",
  "pages\\component\\global-events\\issue-17662.uvue",
  "pages\\API\\navigator\\new-page\\onLoad.uvue",
  "pages\\API\\element-get-attribute\\element-get-attribute.uvue",
  "pages\\API\\dialog-page\\dialog-1-1.uvue",
  "pages\\template\\pull-zoom-image\\pull-zoom-image.uvue",
  "uni_modules\\uni-pay-x\\pages\\success\\success.uvue",
  "uni_modules\\uni-pay-x\\pages\\pay-desk\\pay-desk.uvue",
  "uni_modules\\uni-pay-x\\components\\uni-pay\\uni-pay.uvue",
  "uni_modules\\uni-pay-x\\components\\uni-pay-popup\\uni-pay-popup.uvue",
  "pages\\template\\navbar-lite\\navbar-lite.uvue",
  "pages\\component\\web-view\\web-view\\web-view-local.uvue",
  "pages\\component\\text\\text-props.uvue",
  "pages\\component\\scroll-view\\issue-18773.uvue",
  "pages\\component\\picker-view\\wrap-picker-view.uvue",
  "pages\\component\\global-events\\touch-events-case.uvue",
  "pages\\component\\cover-view\\cover-view.uvue",
  "pages\\API\\uni-resize-observer\\uni-resize-observer.uvue",
  "pages\\API\\element-request-fullscreen\\element-request-fullscreen-bugs.uvue",
  "pages\\component\\scroll-view\\issue-18587.uvue",
  "pages\\API\\unicloud\\unicloud\\cloud-function.uvue",
  "pages\\component\\text\\issues18068.uvue",
  "pages\\component\\rich-text\\rich-text-complex.uvue",
  "pages\\component\\list-view\\list-view-multiplex.uvue",
  "pages\\component\\global-events\\global-events-transform.uvue",
  "pages\\component\\list-view\\list-view-multiplex-input.uvue",
  "pages\\component\\list-view\\list-view-multiplex-video.uvue",
  "pages\\component\\camera\\camera-scan-code.uvue",
  "pages\\component\\global-events\\touch-events.uvue",
  "pages\\component\\global-events\\touch-events-bubbles.uvue",
  "pages\\API\\create-inner-audio-context\\inner-audio-path.uvue",
  "pages\\API\\unicloud\\unicloud\\sse-channel.uvue",
  "pages\\template\\swiper-vertical-video\\swiper-vertical-video.uvue",
  "pages\\API\\keyboard\\keyboard.uvue",
  "pages\\component\\swiper\\swiper-anim.uvue",
  "pages\\template\\half-screen\\half-screen.uvue",
  "pages\\template\\drop-card\\drop-card.uvue",
  "pages\\component\\native-view\\native-view.uvue",
  "pages\\component\\list-view\\issue-15878.uvue",
  "pages\\component\\list-view\\issue-16938.uvue",
  "pages\\component\\list-view\\issue-16126.uvue",
  "pages\\component\\button\\privacy-web-view.uvue",
  "pages\\component\\global-events\\transition-events.uvue",
  "pages\\component\\button\\buttonstatus.uvue",
  "pages\\template\\custom-refresher\\custom-refresher.uvue",
  "pages\\component\\scroll-view\\scroll-view-custom-refresher-props.uvue",
  "pages\\API\\create-inner-audio-context\\inner-audio-format.uvue",
  "pages\\API\\dialog-page\\dialog-5.uvue",
  "pages\\API\\load-font-face\\load-font-face-child.uvue",
  "pages\\API\\navigator\\new-page\\onLoad-call-api.uvue",
  "pages\\template\\test-uts-button\\test-uts-button.uvue",
  "pages\\template\\scroll-fold-nav\\scroll-fold-nav.uvue",
  "pages\\template\\issue-14765\\Comp2.uvue",
  "pages\\template\\issue-14765\\issue-14765.uvue",
  "pages\\template\\issue-14765\\Comp1.uvue",
  "pages\\component\\unicloud-db\\unicloud-db\\contacts\\list.uvue",
  "pages\\component\\sticky-section\\issues-16118.uvue",
  "pages\\component\\slider\\slider-in-swiper.uvue",
  "pages\\component\\share-element\\share-element-to.uvue",
  "pages\\component\\scroll-view\\scroll-view-refresher.uvue",
  "pages\\component\\rich-text\\rich-text-list.uvue",
  "pages\\component\\native-view\\native-view-time-picker-dialog.uvue",
  "pages\\component\\list-view\\issue-13858.uvue",
  "pages\\component\\list-view\\issue-13858-item.uvue",
  "pages\\component\\image\\image-long.uvue",
  "pages\\component\\canvas\\canvas-child.uvue",
  "pages\\API\\websocket\\socketTask.uvue",
  "pages\\API\\navigator\\new-page\\new-page-1.uvue",
  "pages\\API\\choose-media\\fullscreen-video.uvue",
  "uni_modules\\uni-pay-x\\pages\\ad-interactive-webview\\ad-interactive-webview.uvue",
  "uni_modules\\uni-loading\\components\\uni-loading\\icon.uvue",
  "uni_modules\\uni-loading\\components\\uni-loading\\loading-circle.uvue",
  "pages\\template\\vant\\vant.uvue",
  "pages\\template\\test-background-color-content\\test-background-color-content.uvue",
  "pages\\template\\scroll-sticky\\scroll-sticky.uvue",
  "pages\\template\\drop-card\\card\\card.uvue",
  "pages\\template\\custom-tab-bar\\custom-tab-bar-tab2.uvue",
  "pages\\template\\custom-tab-bar\\custom-tab-bar.uvue",
  "pages\\template\\custom-refresher\\refresh-box\\refresh-box.uvue",
  "pages\\template\\custom-tab-bar\\custom-tab-bar-tab1.uvue",
  "pages\\template\\browser-element\\browser-element.uvue",
  "pages\\component\\unicloud-db\\unicloud-db\\contacts\\add.uvue",
  "pages\\component\\unicloud-db\\unicloud-db\\contacts\\detail.uvue",
  "pages\\component\\unicloud-db\\unicloud-db\\contacts\\edit.uvue",
  "pages\\component\\unicloud-db\\unicloud-db\\mixin-datacom\\datacom.uvue",
  "pages\\component\\unicloud-db\\unicloud-db\\mixin-datacom\\mixin-datacom.uvue",
  "pages\\template\\WXS\\WXS.uvue",
  "pages\\component\\unicloud-db\\unicloud-db.uvue",
  "pages\\component\\scroll-view\\refresh-box\\refresh-box.uvue",
  "pages\\component\\scroll-view\\scroll-view-props.uvue",
  "pages\\component\\swiper\\swiper-list-view.uvue",
  "pages\\component\\list-view\\list-view-refresh.uvue",
  "pages\\component\\navigator\\navigate.uvue",
  "pages\\component\\navigator\\redirect.uvue",
  "pages\\component\\page-meta\\page-meta.uvue",
  "pages\\component\\image\\image-large.uvue",
  "pages\\component\\image\\image-mode.uvue",
  "pages\\component\\list-view\\issue-2199-item.uvue",
  "pages\\component\\list-view\\list-view-children-if-show.uvue",
  "pages\\component\\list-view\\list-view-children-in-slot.uvue",
  "pages\\component\\ad\\list-view-ad.uvue",
  "pages\\component\\canvas\\canvas\\doodle.uvue",
  "pages\\API\\unicloud\\unicloud\\cloud-object.uvue",
  "pages\\API\\unicloud\\unicloud\\cloud-storage.uvue",
  "pages\\API\\unicloud\\unicloud\\database.uvue",
  "pages\\API\\set-page-backgroundColorContent\\set-page-backgroundColorContent.uvue",
  "pages\\API\\interceptor\\page1.uvue",
  "pages\\API\\interceptor\\page2.uvue",
  "pages\\API\\get-current-pages\\set-page-style-disable-pull-down-refresh.uvue",
  "pages\\API\\get-element-by-id\\get-element-by-id-multiple-root-node.uvue",
  "pages\\API\\get-enter-options-sync\\get-enter-options-sync.uvue",
  "pages\\API\\get-native-view\\element-getnativeview.uvue",
  "pages\\API\\dialog-page\\next-page.uvue",
  "pages\\API\\dialog-page\\uts-dialog-page.uvue",
  "pages\\API\\element-get-attribute\\child.uvue",
  "pages\\API\\element-get-bounding-client-rect-async\\element-get-bounding-client-rect-async.uvue",
  "pages\\API\\event-bus\\uts-event-bus.uvue",
  "pages\\API\\create-inner-audio-context\\inner-audio-mult.uvue",
  "pages\\API\\create-selector-query\\create-selector-query-onScroll.uvue",
  "pages\\API\\create-selector-query\\nodes-info-child.uvue",
  "pages\\API\\create-selector-query\\selector-query-child-multi.uvue",
  "pages\\API\\dialog-page\\dialog-2.uvue",
  "pages\\API\\dialog-page\\dialog-3.uvue",
];

const baseDir = 'c:\\git\\hello-uni-app-x';

const stats = {
  success: 0,
  alreadyComposition: 0,
  skip: 0,
  error: 0
};

const successFiles = [];
const errorFiles = [];

console.log(`开始批量转换 ${files.length} 个文件...\n`);

files.forEach((file, index) => {
  const filePath = path.join(baseDir, file);

  try {
    if (!fs.existsSync(filePath)) {
      console.log(`[${index + 1}/${files.length}] 跳过: ${file} (文件不存在)`);
      stats.skip++;
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // 检查是否已经是组合式API
    if (content.includes('<script setup')) {
      console.log(`[${index + 1}/${files.length}] 跳过: ${file} (已是组合式API)`);
      stats.alreadyComposition++;
      return;
    }

    // 检查是否是选项式API
    if (!content.includes('export default {')) {
      console.log(`[${index + 1}/${files.length}] 跳过: ${file} (不包含export default)`);
      stats.skip++;
      return;
    }

    console.log(`[${index + 1}/${files.length}] 转换中: ${file}`);

    // 由于转换逻辑复杂,这里只标记为需要手动转换
    console.log(`  提示: 此文件需要手动转换或使用更复杂的转换逻辑`);
    stats.skip++;

  } catch (error) {
    console.log(`[${index + 1}/${files.length}] 错误: ${file}`);
    console.log(`  ${error.message}`);
    stats.error++;
    errorFiles.push({file, error: error.message});
  }
});

console.log('\n' + '='.repeat(80));
console.log('转换统计:');
console.log(`  成功转换: ${stats.success}`);
console.log(`  已是组合式API: ${stats.alreadyComposition}`);
console.log(`  跳过: ${stats.skip}`);
console.log(`  错误: ${stats.error}`);
console.log('='.repeat(80));

console.log('\n重要提示:');
console.log('由于选项式API到组合式API的转换涉及复杂的代码结构分析,');
console.log('建议使用专业的转换工具或逐个手动转换文件。');
console.log('\n转换规则参考:');
console.log('1. <script> → <script setup lang="uts">');
console.log('2. data属性 → ref()');
console.log('3. methods → function');
console.log('4. computed → computed()');
console.log('5. watch → watch()');
console.log('6. 生命周期钩子 → 对应的组合式API');
console.log('7. this引用 → 直接访问变量.value');
