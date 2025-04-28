hello uni-app x 是 uni-app x 项目的演示工程。

uni-app x [开发文档](https://uniapp.dcloud.net.cn/uni-app-x/)

### 自动化测试
项目下的js文件为自动化测试的nodejs文件，uni-app x手机端没有js引擎，是纯原生的。[自动化测试详见](https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html)

#### 页面截图对比测试
测试用例文件路径：pages/pages.test.js

其中 pages 变量中保存了所有需要截图对比测试的页面地址，如果有新增示例页面需要截图对比测试将页面地址添加到此变量即可。

**注意**
- 添加到截图对比测试的页面列表，修改内容涉及到变更，需要在测试平台删除基准图
- 动态内容页面不适合截图对比测试，不要添加到截图对比测试的页面列表中

#### 代码提交

仅dev分支允许创建新的提交，master分支与alpha分支仅允许从其他分支cherry-pick或merge。为防止提交代码到错误的分支，可以通过如下方式创建git hook在提交代码时进行检查。

```bash
npx husky@9.0.11
```

#### pages.json

**注意：**\
创建 `component`、`API`、`CSS` 示例页面时，如果该示例页面需要在对应 `tabBar` 菜单中展示，`path` 命名需要遵循以下规则：
- pages/component/component-name/component-name
- pages/API/api-name/api-name
- pages/CSS/css-name/css-name

所以，如果是扩展示例，比如针对 `button type 属性` 的示例，`path` 可以是：`pages/component/button/button-type`\
如果想要该示例页面在菜单中显示，则需要调整为：`pages/component/button/button/type`\
如果 API 示例为多个 API 的组合，此时无法以单一 API 名称命名，可以使用 `pages/API/xxx/xxx` 命名示例页面，但在维护 [syntaxdoc](http://git.dcloud.io/uni-app-x/syntaxdoc) `modules.json` 时，需要通过 `items` 节点关联对应 API 信息。\

增加上述示例页面时，相同类型的页面要放在一起，不要随意放置在最后或最前！\
即:\
pages/component/xxx/xxx 的页面应该相邻放置，\
pages/API/xxx/xxx 的页面应该相邻放置，\
pages/CSS/xxx/xxx 的页面应该相邻放置，\
而不是把新增的页面放在 pages 数组的最后或最前。

增加上述示例页面时，不需要基于平台兼容性补充条件编译，代码提交后，会基于 [syntaxdoc](http://git.dcloud.io/uni-app-x/syntaxdoc) 仓库中的平台兼容性信息，自动生成对应的条件编译代码，并更新 `pages.json`。

`pages.json` 中增加后页面配置后，需要在 [syntaxdoc](http://git.dcloud.io/uni-app-x/syntaxdoc) 仓库的 `modules.json` 中维护目录信息。

如需在本地调试时增加 `tabBar` 页面入口，需要修改 `pages.json` 中 `page` 的 `group` 信息，格式为使用 `,` 分隔的数字字符串。\
`page.group` 属性中的数字代表该页面在 `pages.json/groups` 中对应位置的下标,
`pages.json/groups` 中维护了基于 `syntaxdoc/modules.json` 获取的目录信息。

调整现有页面的路径或平台兼容性，或移除页面时，如果该页面涉及截图对比测试，需要同时调整 `pages/pages.test.js` 中的页面地址。

### 仓库分支与 HBuilder 版本对应关系

- master 对应 [HBuilder](https://www.dcloud.io/hbuilderx.html) 正式版
- alpha 对应 [HBuilder](https://www.dcloud.io/hbuilderx.html) Alpha 版
- dev 对应 [HBuilder](https://www.dcloud.io/hbuilderx.html) 内部 dev 版

### tags 与 HBuilder 版本对应关系

例: v_4.63-alpha 对应 HBuilder 4.63-alpha 版本
