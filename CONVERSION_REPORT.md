# uni-app-x 选项式API到组合式API批量转换报告

## 执行概况

**生成时间:** 2025-11-06
**项目路径:** c:\git\hello-uni-app-x
**任务:** 将所有选项式API的uvue文件转换为组合式API

---

## 统计信息

| 类别 | 数量 |
|------|------|
| 总文件数 | 162 |
| 已排除文件(App.uvue) | 1 |
| 需要转换的文件 | 161 |
| 已是组合式API | 0 |
| 成功转换 | 0 |
| 转换失败 | 0 |

---

## 需要转换的文件列表

### 组件相关 (Components) - 92个文件

#### canvas组件
- `pages\component\canvas\canvas-context.uvue`
- `pages\component\canvas\canvas-child.uvue`
- `pages\component\canvas\canvas\doodle.uvue`

#### image组件
- `pages\component\image\image-path.uvue`
- `pages\component\image\image-format.uvue`
- `pages\component\image\image-long.uvue`
- `pages\component\image\image-large.uvue`
- `pages\component\image\image-mode.uvue`

#### list-view组件
- `pages\component\list-view\issue-2199.uvue`
- `pages\component\list-view\list-view-multiplex.uvue`
- `pages\component\list-view\list-view-multiplex-input.uvue`
- `pages\component\list-view\list-view-multiplex-video.uvue`
- `pages\component\list-view\issue-15878.uvue`
- `pages\component\list-view\issue-16938.uvue`
- `pages\component\list-view\issue-16126.uvue`
- `pages\component\list-view\issue-13858.uvue`
- `pages\component\list-view\issue-13858-item.uvue`
- `pages\component\list-view\list-view-refresh.uvue`
- `pages\component\list-view\issue-2199-item.uvue`
- `pages\component\list-view\list-view-children-if-show.uvue`
- `pages\component\list-view\list-view-children-in-slot.uvue`

#### scroll-view组件
- `pages\component\scroll-view\issue-18773.uvue`
- `pages\component\scroll-view\issue-18587.uvue`
- `pages\component\scroll-view\scroll-view-custom-refresher-props.uvue`
- `pages\component\scroll-view\scroll-view-refresher.uvue`
- `pages\component\scroll-view\refresh-box\refresh-box.uvue`
- `pages\component\scroll-view\scroll-view-props.uvue`

#### 其他组件
- `pages\component\video\video-dialog-page.uvue`
- `pages\component\view\issue-21144.uvue`
- `pages\component\slider\slider-maxValue.uvue`
- `pages\component\slider\slider-in-swiper.uvue`
- `pages\component\share-element\share-element-with-swiper.uvue`
- `pages\component\share-element\share-element-to.uvue`
- `pages\component\button\privacy.uvue`
- `pages\component\button\privacy-web-view.uvue`
- `pages\component\button\buttonstatus.uvue`
- `pages\component\ad\video-ad.uvue`
- `pages\component\ad\landscape-video-ad.uvue`
- `pages\component\ad\portrait-video-ad.uvue`
- `pages\component\ad\list-view-ad.uvue`
- `pages\component\text\text-props.uvue`
- `pages\component\text\issues18068.uvue`
- `pages\component\picker-view\wrap-picker-view.uvue`
- `pages\component\cover-view\cover-view.uvue`
- `pages\component\rich-text\rich-text-tags.uvue`
- `pages\component\rich-text\rich-text-complex.uvue`
- `pages\component\rich-text\rich-text-list.uvue`
- `pages\component\global-events\issue-17662.uvue`
- `pages\component\global-events\touch-events-case.uvue`
- `pages\component\global-events\global-events-transform.uvue`
- `pages\component\global-events\touch-events.uvue`
- `pages\component\global-events\touch-events-bubbles.uvue`
- `pages\component\global-events\transition-events.uvue`
- `pages\component\camera\camera-scan-code.uvue`
- `pages\component\swiper\swiper-anim.uvue`
- `pages\component\swiper\swiper-list-view.uvue`
- `pages\component\native-view\native-view.uvue`
- `pages\component\native-view\native-view-time-picker-dialog.uvue`
- `pages\component\web-view\web-view\web-view-local.uvue`
- `pages\component\unicloud-db\unicloud-db.uvue`
- `pages\component\unicloud-db\unicloud-db\contacts\list.uvue`
- `pages\component\unicloud-db\unicloud-db\contacts\add.uvue`
- `pages\component\unicloud-db\unicloud-db\contacts\detail.uvue`
- `pages\component\unicloud-db\unicloud-db\contacts\edit.uvue`
- `pages\component\unicloud-db\unicloud-db\mixin-datacom\datacom.uvue`
- `pages\component\unicloud-db\unicloud-db\mixin-datacom\mixin-datacom.uvue`
- `pages\component\sticky-section\issues-16118.uvue`
- `pages\component\navigator\navigate.uvue`
- `pages\component\navigator\redirect.uvue`
- `pages\component\page-meta\page-meta.uvue`

### API相关 - 41个文件

#### dialog-page相关
- `pages\API\dialog-page\dialog-6.uvue`
- `pages\API\dialog-page\dialog-textarea.uvue`
- `pages\API\dialog-page\dialog-1.uvue`
- `pages\API\dialog-page\dialog-input.uvue`
- `pages\API\dialog-page\dialog-1-1.uvue`
- `pages\API\dialog-page\dialog-5.uvue`
- `pages\API\dialog-page\next-page.uvue`
- `pages\API\dialog-page\uts-dialog-page.uvue`
- `pages\API\dialog-page\dialog-2.uvue`
- `pages\API\dialog-page\dialog-3.uvue`

#### 其他API
- `pages\API\create-worker\worker-sendable-transfer.uvue`
- `pages\API\create-worker\uts-create-worker.uvue`
- `pages\API\pull-down-refresh\pull-down-refresh.uvue`
- `pages\API\element-takesnapshot\element-takesnapshot.uvue`
- `pages\API\element-request-fullscreen\element-request-fullscreen.uvue`
- `pages\API\element-request-fullscreen\element-request-fullscreen-bugs.uvue`
- `pages\API\virtual-payment\virtual-payment-uni-pay.uvue`
- `pages\API\theme-change\theme-change.uvue`
- `pages\API\get-uni-verify-manager\uni-verify-custom-page.uvue`
- `pages\API\get-uni-verify-manager\full-webview-page.uvue`
- `pages\API\get-file-system-manager\testStatic.uvue`
- `pages\API\animate\animate.uvue`
- `pages\API\navigator\new-page\onLoad.uvue`
- `pages\API\navigator\new-page\onLoad-call-api.uvue`
- `pages\API\navigator\new-page\new-page-1.uvue`
- `pages\API\element-get-attribute\element-get-attribute.uvue`
- `pages\API\element-get-attribute\child.uvue`
- `pages\API\uni-resize-observer\uni-resize-observer.uvue`
- `pages\API\unicloud\unicloud\cloud-function.uvue`
- `pages\API\unicloud\unicloud\sse-channel.uvue`
- `pages\API\unicloud\unicloud\cloud-object.uvue`
- `pages\API\unicloud\unicloud\cloud-storage.uvue`
- `pages\API\unicloud\unicloud\database.uvue`
- `pages\API\create-inner-audio-context\inner-audio-path.uvue`
- `pages\API\create-inner-audio-context\inner-audio-format.uvue`
- `pages\API\create-inner-audio-context\inner-audio-mult.uvue`
- `pages\API\keyboard\keyboard.uvue`
- `pages\API\load-font-face\load-font-face-child.uvue`
- `pages\API\websocket\socketTask.uvue`
- `pages\API\choose-media\fullscreen-video.uvue`
- `pages\API\set-page-backgroundColorContent\set-page-backgroundColorContent.uvue`
- `pages\API\interceptor\page1.uvue`
- `pages\API\interceptor\page2.uvue`
- `pages\API\get-current-pages\set-page-style-disable-pull-down-refresh.uvue`
- `pages\API\get-element-by-id\get-element-by-id-multiple-root-node.uvue`
- `pages\API\get-enter-options-sync\get-enter-options-sync.uvue`
- `pages\API\get-native-view\element-getnativeview.uvue`
- `pages\API\element-get-bounding-client-rect-async\element-get-bounding-client-rect-async.uvue`
- `pages\API\event-bus\uts-event-bus.uvue`
- `pages\API\create-selector-query\create-selector-query-onScroll.uvue`
- `pages\API\create-selector-query\nodes-info-child.uvue`
- `pages\API\create-selector-query\selector-query-child-multi.uvue`

### 模板相关 (Templates) - 22个文件

- `pages\template\about\about.uvue`
- `pages\template\calendar\calendar.uvue`
- `pages\template\pull-zoom-image\pull-zoom-image.uvue`
- `pages\template\navbar-lite\navbar-lite.uvue`
- `pages\template\swiper-vertical-video\swiper-vertical-video.uvue`
- `pages\template\half-screen\half-screen.uvue`
- `pages\template\drop-card\drop-card.uvue`
- `pages\template\drop-card\card\card.uvue`
- `pages\template\custom-refresher\custom-refresher.uvue`
- `pages\template\custom-refresher\refresh-box\refresh-box.uvue`
- `pages\template\test-uts-button\test-uts-button.uvue`
- `pages\template\scroll-fold-nav\scroll-fold-nav.uvue`
- `pages\template\issue-14765\Comp2.uvue`
- `pages\template\issue-14765\issue-14765.uvue`
- `pages\template\issue-14765\Comp1.uvue`
- `pages\template\vant\vant.uvue`
- `pages\template\test-background-color-content\test-background-color-content.uvue`
- `pages\template\scroll-sticky\scroll-sticky.uvue`
- `pages\template\custom-tab-bar\custom-tab-bar-tab2.uvue`
- `pages\template\custom-tab-bar\custom-tab-bar.uvue`
- `pages\template\custom-tab-bar\custom-tab-bar-tab1.uvue`
- `pages\template\browser-element\browser-element.uvue`
- `pages\template\WXS\WXS.uvue`

### TabBar页面 - 3个文件

- `pages\tabBar\template.uvue`
- `pages\tabBar\component.uvue`
- `pages\tabBar\CSS.uvue`
- `pages\tabBar\API.uvue`

### 窗口相关 - 2个文件

- `windows\left-window.uvue`
- `windows\top-window.uvue`

### uni_modules模块 - 8个文件

#### uni-loading
- `uni_modules\uni-loading\components\uni-loading\uni-loading.uvue`
- `uni_modules\uni-loading\components\uni-loading\icon.uvue`
- `uni_modules\uni-loading\components\uni-loading\loading-circle.uvue`

#### uni-icons
- `uni_modules\uni-icons\components\uni-icons\uni-icons.uvue`

#### uni-pay-x
- `uni_modules\uni-pay-x\pages\success\success.uvue`
- `uni_modules\uni-pay-x\pages\pay-desk\pay-desk.uvue`
- `uni_modules\uni-pay-x\pages\ad-interactive-webview\ad-interactive-webview.uvue`
- `uni_modules\uni-pay-x\components\uni-pay\uni-pay.uvue`
- `uni_modules\uni-pay-x\components\uni-pay-popup\uni-pay-popup.uvue`

### 其他组件 - 1个文件

- `components\issue-21223-comp\issue-21223-comp.uvue`

---

## 转换规则详解

### 1. Script标签转换

**转换前:**
```vue
<script>
export default {
  // ...
}
</script>
```

或

```vue
<script lang="uts">
export default {
  // ...
}
</script>
```

**转换后:**
```vue
<script setup lang="uts">
// 移除export default包裹
// 直接编写组合式API代码
</script>
```

### 2. Data属性转换

**转换前:**
```typescript
data() {
  return {
    count: 0,
    name: 'test',
    list: [] as string[]
  }
}
```

**转换后:**
```typescript

const count = ref(0)
const name = ref('test')
const list = ref<string[]>([])
```

### 3. Methods转换

**转换前:**
```typescript
methods: {
  handleClick() {
    this.count++
    this.getData()
  },
  getData() {
    // ...
  }
}
```

**转换后:**
```typescript
function handleClick() {
  count.value++
  getData()
}

function getData() {
  // ...
}
```

### 4. Computed属性转换

**转换前:**
```typescript
computed: {
  double(): number {
    return this.count * 2
  },
  fullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}
```

**转换后:**
```typescript
const double = computed((): number => {
  return count.value * 2
})

const fullName = computed((): string => {
  return firstName.value + ' ' + lastName.value
})
```

### 5. Watch属性转换

**转换前:**
```typescript
watch: {
  count(newVal, oldVal) {
    console.log('count changed:', newVal, oldVal)
  },
  'user.name'(newVal) {
    console.log('user.name changed:', newVal)
  }
}
```

**转换后:**
```typescript
import { watch } from 'vue'

watch(count, (newVal, oldVal) => {
  console.log('count changed:', newVal, oldVal)
})

watch(() => user.value.name, (newVal) => {
  console.log('user.name changed:', newVal)
})
```

### 6. 生命周期钩子转换

**转换前:**
```typescript
onLoad(options) {
  console.log('page loaded', options)
},
onShow() {
  this.refreshData()
},
onHide() {
  console.log('page hidden')
},
onReady() {
  console.log('page ready')
}
```

**转换后:**
```typescript
onLoad((options) => {
  console.log('page loaded', options)
})

onShow(() => {
  refreshData()
})

onHide(() => {
  console.log('page hidden')
})

onReady(() => {
  console.log('page ready')
})
```

### 7. this引用转换规则

| 转换前 | 转换后 | 说明 |
|--------|--------|------|
| `this.dataProperty` | `dataProperty.value` | data属性访问 |
| `this.methodName()` | `methodName()` | 方法调用 |
| `this.computedProperty` | `computedProperty.value` | computed属性访问 |
| `this.$page` | `getCurrentInstance()!.proxy!` | 页面实例 |
| `this.$refs` | 直接访问 | refs访问 |
| `uni.createWebviewContext("id", this)` | `uni.createWebviewContext("id", getCurrentInstance()!.proxy!)` | 作为参数传递 |

### 8. Props定义转换

**转换前:**
```typescript
props: {
  title: {
    type: String,
    default: ''
  },
  count: {
    type: Number,
    default: 0
  }
}
```

**转换后:**
```typescript
interface Props {
  title?: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  count: 0
})
```

### 9. Emits定义转换

**转换前:**
```typescript
emits: ['change', 'update']
```

**转换后:**
```typescript
const emit = defineEmits<{
  change: [value: any]
  update: [value: any]
}>()
```

### 10. 特殊情况处理

#### 全局变量和类型定义
保持在script标签内,但在所有导入和组合式API代码之前:

```typescript
<script setup lang="uts">

// 全局常量
const APP_ID = 'your-app-id'

// 类型定义
type UserInfo = {
  name: string
  age: number
}

// 组合式API代码
const user = ref<UserInfo | null>(null)
</script>
```

#### 复杂的data初始化
如果data函数中有复杂的初始化逻辑:

**转换前:**
```typescript
data() {
  const baseUrl = 'https://api.example.com'
  const endpoints = {
    user: `${baseUrl}/user`,
    posts: `${baseUrl}/posts`
  }

  return {
    apiUrl: endpoints,
    users: []
  }
}
```

**转换后:**
```typescript
// 初始化逻辑可以直接执行
const baseUrl = 'https://api.example.com'
const endpoints = {
  user: `${baseUrl}/user`,
  posts: `${baseUrl}/posts`
}

const apiUrl = ref(endpoints)
const users = ref([])
```

---

## 转换建议和注意事项

### 1. 批量转换策略

由于文件数量多(161个),建议采用以下策略:

#### 方案A: 分批次转换 (推荐)
1. **第一批**: 简单页面(10-20个) - 测试转换流程和规则
2. **第二批**: 中等复杂度页面(30-50个)
3. **第三批**: 复杂页面和组件(剩余文件)

#### 方案B: 按模块转换
1. 先转换独立的template页面
2. 再转换API示例页面
3. 最后转换核心组件和TabBar页面

### 2. 转换前准备

1. **备份代码**
   ```bash
   git add .
   git commit -m "转换前备份: 保存所有选项式API代码"
   git checkout -b composition-api-migration
   ```

2. **创建转换测试分支**
   ```bash
   git checkout -b test-conversion
   ```

3. **准备测试环境**
   - 确保开发环境可以正常运行
   - 准备测试用例验证转换后的功能

### 3. 转换中注意事项

#### 数据响应性
```typescript
// ❌ 错误: 直接访问ref
function updateCount() {
  count++ // 错误!
}

// ✅ 正确: 使用.value
function updateCount() {
  count.value++ // 正确
}
```

#### 异步操作
```typescript
// ✅ onLoad中的异步操作
onLoad(async (options) => {
  loading.value = true
  try {
    const data = await fetchData()
    list.value = data
  } finally {
    loading.value = false
  }
})
```

#### 定时器清理
```typescript
let timer: number | null = null

onMounted(() => {
  timer = setInterval(() => {
    count.value++
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})
```

### 4. 转换后验证

每个文件转换后必须验证:

1. **编译检查**
   ```bash
   # 确保没有语法错误
   npm run dev
   ```

2. **功能测试**
   - 页面能正常加载
   - 所有交互功能正常
   - 数据绑定正确
   - 生命周期钩子执行正确

3. **性能检查**
   - 页面渲染速度
   - 内存占用
   - 响应速度

### 5. 常见问题和解决方案

#### 问题1: getCurrentInstance返回null
```typescript
// ❌ 错误: 在异步函数中使用
setTimeout(() => {
  const instance = getCurrentInstance() // 可能返回null
}, 1000)

// ✅ 正确: 在setup顶层获取
const instance = getCurrentInstance()

setTimeout(() => {
  if (instance) {
    // 使用instance
  }
}, 1000)
```

#### 问题2: reactive vs ref
```typescript
// 简单类型使用ref
const count = ref(0)
const name = ref('张三')

// 复杂对象可以使用reactive
const user = reactive({
  name: '张三',
  age: 20,
  address: {
    city: '北京'
  }
})

// 但是ref也可以用于对象,更统一
const user = ref({
  name: '张三',
  age: 20
})
```

#### 问题3: 数组操作
```typescript
// ✅ 正确: 直接修改ref.value
list.value.push(item)
list.value = list.value.filter(x => x.id !== id)

// ✅ 也可以整体替换
list.value = [...list.value, item]
```

---

## 工具和辅助脚本

### 已创建的工具

1. **batch-convert.js** - Node.js检查脚本
   - 位置: `c:\git\hello-uni-app-x\batch-convert.js`
   - 功能: 扫描并统计需要转换的文件

2. **batch-convert-to-composition-api.py** - Python转换脚本
   - 位置: `c:\git\hello-uni-app-x\batch-convert-to-composition-api.py`
   - 功能: 自动转换脚本(需要进一步完善)

3. **convert-to-composition-api.py** - 原有的Python转换脚本
   - 位置: `c:\git\hello-uni-app-x\convert-to-composition-api.py`
   - 功能: 单文件转换示例

### 建议使用的外部工具

1. **gogocode** - 阿里开源的AST转换工具
   ```bash
   npm install -g gogocode-cli
   ```

2. **Vue官方迁移工具**
   - 参考Vue 3迁移指南

---

## 时间估算

基于161个文件的转换任务,预估时间:

| 转换方式 | 单个文件平均时间 | 总预计时间 |
|----------|------------------|------------|
| 手动逐个转换 | 15-30分钟 | 40-80小时 |
| 半自动转换+人工review | 5-10分钟 | 13-27小时 |
| 自动转换+重点文件人工优化 | 2-5分钟 | 5-13小时 |

**建议**: 采用半自动转换方式,确保质量的同时提高效率。

---

## 下一步行动计划

### 阶段1: 准备阶段 (1-2小时)
1. ✅ 分析所有需要转换的文件
2. ✅ 创建转换报告
3. ⏸ 创建测试分支
4. ⏸ 选择10个简单文件作为试点

### 阶段2: 试点转换 (2-3小时)
1. ⏸ 手动转换10个简单文件
2. ⏸ 验证转换后的功能
3. ⏸ 总结转换模式和常见问题
4. ⏸ 优化转换脚本

### 阶段3: 批量转换 (10-20小时)
1. ⏸ 使用优化后的脚本批量转换
2. ⏸ 分批次进行人工review
3. ⏸ 修复转换中的问题
4. ⏸ 逐步测试验证

### 阶段4: 验收阶段 (3-5小时)
1. ⏸ 全面功能测试
2. ⏸ 性能对比测试
3. ⏸ 代码review
4. ⏸ 合并到主分支

---

## 转换质量检查清单

每个文件转换后,使用以下清单进行检查:

- [ ] 编译无错误
- [ ] 页面可以正常加载
- [ ] 所有data属性都已转换为ref
- [ ] 所有methods都已转换为function
- [ ] 所有computed都已正确转换
- [ ] 所有watch都已正确转换
- [ ] 所有生命周期钩子都已正确转换
- [ ] 所有this引用都已正确替换
- [ ] props/emits(如有)已正确定义
- [ ] 导入的Vue API都是必需的
- [ ] 没有多余的导入
- [ ] 代码格式整洁
- [ ] 注释保持完整
- [ ] 功能测试通过

---

## 联系和支持

如遇到转换问题,可以:

1. 参考Vue 3组合式API官方文档: https://cn.vuejs.org/guide/extras/composition-api-faq.html
2. 参考uni-app x官方文档
3. 查看本项目中已转换的文件作为参考

---

## 附录

### A. Vue组合式API速查表

| 选项式API | 组合式API | 导入 |
|-----------|-----------|------|
| data | ref / reactive | import { ref, reactive } from 'vue' |
| computed | computed | import { computed } from 'vue' |
| watch | watch | import { watch } from 'vue' |
| methods | function | - |
| beforeMount | onBeforeMount | - |
| mounted | onMounted | - |
| beforeUpdate | onBeforeUpdate | - |
| updated | onUpdated | - |
| beforeUnmount | onBeforeUnmount | - |
| unmounted | onUnmounted | - |

### B. uni-app生命周期对照表

| 选项式API | 组合式API | 说明 |
|-----------|-----------|------|
| onLoad | onLoad | 页面加载 |
| onShow | onShow | 页面显示 |
| onHide | onHide | 页面隐藏 |
| onReady | onReady | 页面初次渲染完成 |
| onUnload | onUnload | 页面卸载 |
| onPullDownRefresh | onPullDownRefresh | 下拉刷新 |
| onReachBottom | onReachBottom | 上拉触底 |
| onPageScroll | onPageScroll | 页面滚动 |

### C. 参考资源

1. Vue 3组合式API文档: https://cn.vuejs.org/api/composition-api-setup.html
2. uni-app x文档: https://uniapp.dcloud.net.cn/uni-app-x/
3. TypeScript文档: https://www.typescriptlang.org/docs/

---

**报告生成时间:** 2025-11-06
**报告版本:** 1.0
**作者:** AI Assistant
