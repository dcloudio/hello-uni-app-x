// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

jest.setTimeout(50000);

// CSS setProperty 测试配置数组
const cssTests = [
  {
    path: '/pages/CSS/layout/width',
    method: 'radioChangeWidth',
    valueIndex: 3,
    styleName: 'width',
    expectedValue: '50px'
  },
  {
    path: '/pages/CSS/layout/min-width',
    method: 'radioChangeMinWidth',
    valueIndex: 4,
    styleName: 'min-width',
    expectedValue: '120px'
  },
  {
    path: '/pages/CSS/layout/max-width',
    method: 'radioChangeMaxWidth',
    valueIndex: 4,
    styleName: 'max-width',
    expectedValue: '120px'
  },
  {
    path: '/pages/CSS/layout/height',
    method: 'radioChangeHeight',
    valueIndex: 4,
    styleName: 'height',
    expectedValue: '150px'
  },
  {
    path: '/pages/CSS/layout/min-height',
    method: 'radioChangeMinHeight',
    valueIndex: 3,
    styleName: 'min-height',
    expectedValue: '50px'
  },
  {
    path: '/pages/CSS/layout/max-height',
    method: 'radioChangeMaxHeight',
    valueIndex: 3,
    styleName: 'max-height',
    expectedValue: '100px'
  },
  {
    path: '/pages/CSS/layout/opacity',
    method: 'radioChangeOpacity',
    valueIndex: 3,
    styleName: 'opacity',
    expectedValue: '0.5'
  },
  {
    path: '/pages/CSS/layout/visibility',
    method: 'radioChangeVisibility',
    valueIndex: 2,
    styleName: 'visibility',
    expectedValue: 'hidden'
  },
  {
    path: '/pages/CSS/layout/top',
    method: 'radioChangeTop',
    valueIndex: 4,
    styleName: 'top',
    expectedValue: '10px'
  },
  {
    path: '/pages/CSS/layout/bottom',
    method: 'radioChangeBottom',
    valueIndex: 4,
    styleName: 'bottom',
    expectedValue: '10px'
  },
  {
    path: '/pages/CSS/layout/left',
    method: 'radioChangeLeft',
    valueIndex: 4,
    styleName: 'left',
    expectedValue: '10px'
  },
  {
    path: '/pages/CSS/layout/right',
    method: 'radioChangeRight',
    valueIndex: 4,
    styleName: 'right',
    expectedValue: '20px'
  },
  {
    path: '/pages/CSS/layout/position',
    method: 'radioChangePosition',
    valueIndex: 2,
    styleName: 'position',
    expectedValue: 'relative'
  },
  {
    path: '/pages/CSS/layout/z-index',
    method: 'radioChangeZIndex',
    valueIndex: 4,
    styleName: 'z-index',
    expectedValue: '10'
  },
]

// 固定的测试选择器
const testSelectors = [
  '.test-view',
  '.test-text',
  '.test-image',
  '.test-view-flatten',
  '.test-text-flatten',
  '.test-image-flatten'
]

// 将测试配置分批
const BATCH_SIZE = 15;
const cssTestBatches = [];
for (let i = 0; i < cssTests.length; i += BATCH_SIZE) {
  cssTestBatches.push(cssTests.slice(i, i + BATCH_SIZE));
}

// 为每个批次创建独立的测试套件
cssTestBatches.forEach((batch, batchIndex) => {
  describe(`CSS setProperty Batch ${batchIndex + 1}`, () => {
    let localTestIndex = 0;

    beforeAll(async () => {
      console.log(`Starting CSS batch ${batchIndex + 1} with ${batch.length} tests`);
    });

    afterAll(async () => {
      console.log(`Finished CSS batch ${batchIndex + 1}`);
    });

    test.each(batch)("%s", async () => {
      const testCase = batch[localTestIndex];
      console.log(`Testing: ${testCase.path}`);

      // 1. 打开页面
      const page = await program.reLaunch(testCase.path);
      await page.waitFor(3000);

      // 2. 调用方法并截图
      await page.callMethod(testCase.method, testCase.valueIndex);
      await page.waitFor(100);

      const image = await program.screenshot({ fullPage: true });
      expect(image).toSaveImageSnapshot({
        customSnapshotIdentifier() {
          return `__set-css-test__/${testCase.path.replace(/\//g, "-").substring(1)}`
        }
      });

      // 3. 循环断言所有选择器
      for (const selector of testSelectors) {
        const element = await page.$(selector);
        const styleValue = await element.style(testCase.styleName);
        expect(styleValue).toBe(testCase.expectedValue);
      }

      await page.waitFor(500);
      localTestIndex++;
    });
  });
});
