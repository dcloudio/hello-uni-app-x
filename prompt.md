# 请把当前工程中的uvue文件的选项式写法改为组合式写法。
- 修改范围：除了根目录的app.uvue外，所有*.uvue文件。
- 修改目标：检查这些uvue文件，是否是vue组合式写法，如果已经是，则忽略。如果不是组合式写法，还是选项式写法，请修改为组合式写法。
- 修改注意事项：
	1. 仅修改组合式为选项式，不修改业务逻辑
	2. 获取当前页面实例，在选项式写法是`this`，但在组合式写法中需改为`getCurrentInstance()!.proxy!`
		比如选项式下获取页面中某个webview实例，需要`let v1 = uni.createWebviewContext("wv1", this)`，但在组合式写法中需要改成`let v1 = uni.createWebviewContext("wv1", getCurrentInstance()!.proxy!) `
		但`this`的其他方法，不应该直接替换为`getCurrentInstance()!.proxy!`，比如this.$ref
	3. 对于类型错误，要注意转换为组合式之前的版本，之前的类型是正确的。可以从git变更中查到转换前的正确类型定义。

Android平台编译报错，请通过如下cli命令查询编译报错日志，并自动修复，然后循环此过程，直到编译通过
C:\hbuilderx\hx_dev\cli.exe logcat app-android --project hello-uni-app-x

注意：
- 对于报错到kt文件中的错误，需要溯源回到原始uvue文件中修改，规则是把前面的 `/unpackage/cache/.app-android/src`去掉，把末尾的`.kt`改成`.uvue`
举例，报错文件为:`/unpackage/cache/.app-android/src/pages/API/choose-media/fullscreen-video.kt`，
实际需要修复的文件为:`/pages/API/choose-media/fullscreen-video.uvue`
- 大部分变量、函数找不到，都是没有遵循先定义后使用的要求，注意调整代码顺序
