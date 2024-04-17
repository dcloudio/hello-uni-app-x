// 自动化测试

// 备注：
//
// 1. testPathIgnorePatterns 忽略/pages/API的几条用例，是因为在ios设备上，运行会导致app崩溃。后期完成后，再去除。
// 2. testPathIgnorePatterns 忽略webview相关用例, 是因为采用app-webview方式后，不需要这两个用例。请勿修改和提交到Git。
//

module.exports = {
  testTimeout: 30000,
  reporters: ['default'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['js', 'json'],
  rootDir: __dirname,
  testMatch: ["<rootDir>/pages/**/*test.[jt]s?(x)"],
  testPathIgnorePatterns: [
      '/node_modules/',
      '<rootDir>/pages/API/download-file/download-file.test.js',
      '<rootDir>/pages/API/upload-file/upload-file.test.js',
      '<rootDir>/pages/API/get-battery-info/get-battery-info.test.js',
      '<rootDir>/pages/webview-screenshot-comparison/webview-screenshot-comparison.test.js',
      '<rootDir>/pages/webview-screenshot/webview-screenshot.test.js'
    ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
}
