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

创建 `component`、`API`、`CSS` 示例页面时，如果该示例页面需要在对应 `tabBar` 菜单中展示，`path` 命名需要遵循以下规则：
- pages/component/component-name/component-name
- pages/API/api-name/api-name
- pages/CSS/css-name/css-name

所以，如果是扩展示例，比如针对 `button type 属性` 的示例，`path` 可以是：`pages/component/button/button-type`\
如果想要该示例页面在菜单中显示，则需要调整为：`pages/component/button/button/type`


**注意：**增加上述示例页面时，不需要基于平台兼容性补充条件编译，代码提交后，会基于 [syntaxdoc](http://git.dcloud.io/uni-app-x/syntaxdoc) 仓库中的平台兼容性信息，自动生成对应的条件编译代码，并更新 `pages.json`。

`pages.json` 中增加后页面配置后，需要在 [syntaxdoc](http://git.dcloud.io/uni-app-x/syntaxdoc) 仓库的 `modules.json` 中维护目录信息。

**注意：**调整现有页面的路径或平台兼容性，或移除页面时，如果该页面涉及截图对比测试，需要同时调整 `pages/pages.test.js` 中的页面地址。
