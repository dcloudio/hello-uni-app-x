# tab-bar 选项卡

自定义组件，主要用于底部选项卡。

# 项目背景
开发一个 tab-bar 组件，放在 /uni_modules/uni-tab-bar/components/uni-tab-bar/ 目录下。

在页面 /pages/tabBar/tab-bar.uvue 以及 /pages/uni-ui/tab-bar/* 里演示了 tab-bar 组件的各种用法。

本模块包含以下组件：

* **uni-tab**：tab 容器根组件，负责维护激活索引、抛出 `change` 事件，并向子组件提供布局/切换方法（安全区、窗口宽度等）。
* **uni-tab-bar**：包裹选项卡 item 的容器，位于页面底部。由 `uni-tab` 注入布局信息，内部自动均分 item 宽度、处理底部安全区、支持中间凸起按钮场景。位置在 /uni_modules/uni-tab-bar/components/uni-tab-bar/uni-tab-bar.uvue
  + **uni-tab-item**：具体的选项卡 item，比如 首页、我的。自动注册到父级 `uni-tab-bar`，并在点击后触发 `uni-tab` 的 `change` 事件。支持内置角标（`badge-text`）。位置在 /uni_modules/uni-tab-bar/components/uni-tab-bar/uni-tab-item.uvue
  + **uni-tab-midbutton**：可选的中间凸起按钮，需要配合偶数个 `uni-tab-item` 使用。位置在 /uni_modules/uni-tab-bar/components/uni-tab-bar/uni-tab-midbutton.uvue
* **uni-tab-content**：选项卡对应要展示的内容页。自动注册到父级 `uni-tab`，同一时间仅激活的 content 可见，其他通过 `visibility` 隐藏。位置在 /uni_modules/uni-tab-bar/components/uni-tab-bar/uni-tab-content.uvue

uni-tab 组件的属性：
- active-index：当前激活的选项卡索引，值域为大于等于 0 的整数
- tab-bar-height：tab-bar 的高度，默认 50
- tab-content-height-full：tab-content 的高度是否通到 tab-bar 下面，默认 false

uni-tab 组件的事件：
- change：选项卡切换时触发，回调参数为新选中的索引值

uni-tab-item 组件的属性：
- badge-text：角标内容（为 `'0'` 或空字符串时不显示）
- badge-class：角标的样式类
