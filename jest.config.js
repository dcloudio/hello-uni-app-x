// 自动化测试
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
