很多组件和api的演示都没有

增加tab：模板就是原来hello uni-app里的一些模板，有的要移植，有的要新增。1. 自定义导航栏，从来没测过，没有navigationbar会不会有bug，也需要测试自己画一个back会不会有问题。2. swiper-list，这个之前是谁做的，迁移过来，list里的数据量要大，1000条，item前要有图片，图片使用uni x的logo。3. swiper-vertical-video，就是防抖音视频滑动。但这里不要用老hello uni-app里的那几个拍摄视频，用我们产品的录屏，比如uni-id、uni-pay、uni-im、uni-cms。视频来录。录像可以小一点，不占满屏幕，上下留出电影那种黑边，不然容易混淆。4. drop-card，划走式卡片，也就是仿探探，这个已经做了例子，集成到hello uni-app x里，但注意不能使用美女照片，要使用uni-id、uni-pay、uni-im、uni-cms的截图。5. sticky-view，这个目前支持吗？6. 毛玻璃效果，这个目前支持吗？
二期：
- 下拉页面，顶部背景图缩放
- 翻书效果
- 自定义窗体动画：叠窗式、上浮卡片
- 全局置顶视图，global-cover-view。音乐播放app的悬浮播放bar；弹窗