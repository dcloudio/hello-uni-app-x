// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

jest.setTimeout(50000);

describe('CSS margin setProperty 测试', () => {
  let page;

  beforeAll(async () => {
    // 打开页面
    page = await program.reLaunch('/pages/CSS/margin/margin');
    await page.waitFor(3000);
  });

  test('radioChangeMargin 设置 margin 为 20px，断言 getPropertyValue 返回值', async () => {
    const valueIndex = 3; // marginEnum[3] => { value: 3, name: '20px' }
    const expectedValue =  {
     margin: '20px',
     marginActual: '20px',
     marginActualText: '20px',
     marginActualImage: '20px',
     marginActualFlat: '20px',
     marginActualTextFlat: '20px',
     marginActualImageFlat: '20px',
     marginActualScrollView: '20px'
    };

    // 调用方法设置样式
    await page.callMethod('radioChangeMargin', valueIndex);
    await page.waitFor(500);

    // 截图
    const image = await program.screenshot({ fullPage: true });
    expect(image).toSaveImageSnapshot({
      customSnapshotIdentifier() {
        return '__set-css-test__/pages-CSS-margin-margin';
      }
    });

    // 获取页面数据并断言
    const afterData = await page.data('data');
    expect(afterData).toMatchObject(expectedValue);
  });
});
