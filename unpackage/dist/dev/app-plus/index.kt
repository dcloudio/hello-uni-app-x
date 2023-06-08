package uni.UNI4517034;
import kotlinx.coroutines.async;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Deferred;
import kotlinx.coroutines.Dispatchers;
import io.dcloud.uts.Map;
import io.dcloud.uts.UTSAndroid;
import io.dcloud.uts.*;
import io.dcloud.uts.framework.*;
import io.dcloud.uts.vue.*;
import io.dcloud.uts.vue.shared.*;
import io.dcloud.uts.vue.reactivity.*;
import io.dcloud.uniapp.runtime.*;
import io.dcloud.uts.vue.createSSRApp;
import io.dcloud.uniapp.appframe.AppConfig;
import io.dcloud.uts.extapi.ShowToastOptions as UniShowToastOptions;
import io.dcloud.uts.extapi.NavigateToOptions as UniNavigateToOptions;
import io.dcloud.uts.extapi.SwitchTabOptions as UniSwitchTabOptions;
import io.dcloud.uts.extapi.ReLaunchOptions as UniReLaunchOptions;
import io.dcloud.uts.extapi.RedirectToOptions as UniRedirectToOptions;
import io.dcloud.uts.extapi.NavigateBackOptions as UniNavigateBackOptions;
import io.dcloud.uts.extapi.switchTab as uni_switchTab;
import io.dcloud.uts.extapi.reLaunch as uni_reLaunch;
import io.dcloud.uts.extapi.navigateTo as uni_navigateTo;
import io.dcloud.uts.extapi.showToast as uni_showToast;
import io.dcloud.uts.extapi.navigateBack as uni_navigateBack;
import io.dcloud.uts.extapi.redirectTo as uni_redirectTo;
open class GenApp : BaseApp() {
}
val GenAppClass = GenApp::class;
open class GenComponentsPageHeadPageHead : VueComponent {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenComponentsPageHeadPageHead): VNode? {
        return createElementVNode("view", Map<String, Any?>(mutableListOf(
            mutableListOf(
                "class",
                "common-page-head"
            )
        )), mutableListOf(
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "common-page-head-title-box"
                )
            )), mutableListOf(
                createElementVNode("text", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "common-page-head-title"
                    )
                )), toDisplayString(_ctx.title), 1)
            ))
        ));
    }
    open var title: String by `$props`;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                )
            ))
        ));
        var props = normalizePropsOptions(Map(mutableListOf(
            mutableListOf(
                "title",
                Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "String"
                    ),
                    mutableListOf(
                        "default",
                        ""
                    )
                ))
            )
        )));
        var propsNeedCastKeys = mutableListOf(
            "title"
        );
        var name = "page-head";
    }
}
val GenComponentsPageHeadPageHeadClass = GenComponentsPageHeadPageHead::class;
open class GenComponentsULinkULink : VueComponent {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenComponentsULinkULink): VNode? {
        return createElementVNode("view", Map<String, Any?>(mutableListOf(
            mutableListOf(
                "class",
                "uni-row"
            )
        )), mutableListOf(
            createElementVNode("text", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "text"
                ),
                mutableListOf(
                    "href",
                    _ctx.href
                ),
                mutableListOf(
                    "onClick",
                    _ctx.openURL
                ),
                mutableListOf(
                    "inWhiteList",
                    _ctx.inWhiteList
                )
            )), toDisplayString(_ctx.text), 9, mutableListOf(
                "href",
                "onClick",
                "inWhiteList"
            ))
        ));
    }
    open var href: String by `$props`;
    open var text: String by `$props`;
    open var inWhiteList: Boolean by `$props`;
    open var openURL = fun() {};
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    20
                                )
                            ))
                        )
                    ))
                )
            ))
        ));
        var props = normalizePropsOptions(Map(mutableListOf(
            mutableListOf(
                "href",
                Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "String"
                    ),
                    mutableListOf(
                        "default",
                        ""
                    )
                ))
            ),
            mutableListOf(
                "text",
                Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "String"
                    ),
                    mutableListOf(
                        "default",
                        ""
                    )
                ))
            ),
            mutableListOf(
                "inWhiteList",
                Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "Boolean"
                    ),
                    mutableListOf(
                        "default",
                        false
                    )
                ))
            )
        )));
        var propsNeedCastKeys = mutableListOf(
            "href",
            "text",
            "inWhiteList"
        );
        var name = "u-link";
    }
}
val GenComponentsULinkULinkClass = GenComponentsULinkULink::class;
open class Page (
    open var name: String,
    open var enable: Boolean? = null,
    open var url: String? = null,
)
open class ListItem (
    open var id: String,
    open var name: String,
    open var open: Boolean = false,
    open var pages: MutableList<Page>,
    open var url: String? = null,
    open var enable: Boolean? = null,
) : IUTSObject
open class ListItemReactiveObject : ListItem, IUTSReactive<ListItem> {
    override var __v_raw: ListItem;
    constructor(__v_raw: ListItem) : super(id = __v_raw.id, name = __v_raw.name, open = __v_raw.open, pages = __v_raw.pages, url = __v_raw.url, enable = __v_raw.enable) {
        this.__v_raw = __v_raw;
    }
    override var id: String
        get() {
            return trackReactiveGet(__v_raw, "id", __v_raw.id);
        }
        set(value) {
            val oldValue = __v_raw.id;
            __v_raw.id = value;
            triggerReactiveSet(__v_raw, "id", oldValue, value);
        }
    override var name: String
        get() {
            return trackReactiveGet(__v_raw, "name", __v_raw.name);
        }
        set(value) {
            val oldValue = __v_raw.name;
            __v_raw.name = value;
            triggerReactiveSet(__v_raw, "name", oldValue, value);
        }
    override var open: Boolean
        get() {
            return trackReactiveGet(__v_raw, "open", __v_raw.open);
        }
        set(value) {
            val oldValue = __v_raw.open;
            __v_raw.open = value;
            triggerReactiveSet(__v_raw, "open", oldValue, value);
        }
    override var pages: MutableList<Page>
        get() {
            return trackReactiveGet(__v_raw, "pages", __v_raw.pages);
        }
        set(value) {
            val oldValue = __v_raw.pages;
            __v_raw.pages = value;
            triggerReactiveSet(__v_raw, "pages", oldValue, value);
        }
    override var url: String?
        get() {
            return trackReactiveGet(__v_raw, "url", __v_raw.url);
        }
        set(value) {
            val oldValue = __v_raw.url;
            __v_raw.url = value;
            triggerReactiveSet(__v_raw, "url", oldValue, value);
        }
    override var enable: Boolean?
        get() {
            return trackReactiveGet(__v_raw, "enable", __v_raw.enable);
        }
        set(value) {
            val oldValue = __v_raw.enable;
            __v_raw.enable = value;
            triggerReactiveSet(__v_raw, "enable", oldValue, value);
        }
}
open class GenPagesTabBarComponentComponent : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesTabBarComponentComponent): VNode? {
        val _component_u_link = resolveEasyComponent("u-link", GenComponentsULinkULinkClass);
        return createElementVNode("view", Map<String, Any?>(mutableListOf(
            mutableListOf(
                "class",
                "uni-container"
            )
        )), mutableListOf(
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-header-logo"
                )
            )), mutableListOf(
                createElementVNode("image", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-header-image"
                    ),
                    mutableListOf(
                        "src",
                        "/static/componentIndex.png"
                    )
                )))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-hello-text"
                )
            )), mutableListOf(
                createElementVNode("text", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "hello-text"
                    )
                )), "uni-app内置组件，展示样式仅供参考，文档详见："),
                createVNode(_component_u_link, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "href",
                        "https://uniapp.dcloud.io/component/"
                    ),
                    mutableListOf(
                        "text",
                        "https://uniapp.dcloud.io/component/"
                    ),
                    mutableListOf(
                        "inWhiteList",
                        true
                    )
                )), null, 8, mutableListOf(
                    "href",
                    "text"
                ))
            )),
            createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, _): VNode {
                return createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-panel"
                    ),
                    mutableListOf(
                        "key",
                        item.id
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            normalizeClass(mutableListOf(
                                "uni-panel-h",
                                if (item.open) {
                                    "uni-panel-h-on";
                                } else {
                                    "";
                                }
                            ))
                        ),
                        mutableListOf(
                            "onClick",
                            fun(){
                                _ctx.triggerCollapse(index, item);
                            }
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                normalizeClass(mutableListOf(
                                    "uni-panel-text",
                                    if (item.enable == false) {
                                        "text-disabled";
                                    } else {
                                        "";
                                    }
                                ))
                            )
                        )), toDisplayString(item.name), 3),
                        createElementVNode("image", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "src",
                                if (item.pages.length > 0) {
                                    if (item.open) {
                                        _ctx.arrowUpIcon;
                                    } else {
                                        _ctx.arrowDownIcon;
                                    };
                                } else {
                                    _ctx.arrowRightIcon;
                                }
                            ),
                            mutableListOf(
                                "class",
                                "uni-icon"
                            )
                        )), null, 8, mutableListOf(
                            "src"
                        ))
                    ), 10, mutableListOf(
                        "onClick"
                    )),
                    if (isTrue(item.open)) {
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "key",
                                0
                            ),
                            mutableListOf(
                                "class",
                                "uni-panel-c"
                            )
                        )), mutableListOf(
                            createElementVNode(Fragment, null, RenderHelpers.renderList(item.pages, fun(page, key, _): VNode {
                                return createElementVNode("view", Map<String, Any?>(mutableListOf(
                                    mutableListOf(
                                        "class",
                                        "uni-navigate-item"
                                    ),
                                    mutableListOf(
                                        "key",
                                        key
                                    ),
                                    mutableListOf(
                                        "onClick",
                                        fun(){
                                            _ctx.goDetailPage(page);
                                        }
                                    )
                                )), mutableListOf(
                                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "class",
                                            normalizeClass(mutableListOf(
                                                "uni-navigate-text",
                                                if (page.enable != true) {
                                                    "text-disabled";
                                                } else {
                                                    "";
                                                }
                                            ))
                                        )
                                    )), toDisplayString(page.name), 3),
                                    createElementVNode("image", Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "src",
                                            _ctx.arrowRightIcon
                                        ),
                                        mutableListOf(
                                            "class",
                                            "uni-icon"
                                        )
                                    )), null, 8, mutableListOf(
                                        "src"
                                    ))
                                ), 8, mutableListOf(
                                    "onClick"
                                ));
                            }), 128)
                        ));
                    } else {
                        createCommentVNode("v-if", true);
                    }
                ));
            }
            ), 128)
        ));
    }
    open var list: MutableList<ListItem> by `$data`;
    open var arrowUpIcon: String by `$data`;
    open var arrowDownIcon: String by `$data`;
    open var arrowRightIcon: String by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "list",
                mutableListOf<ListItem>(ListItem(id = "view", name = "视图容器", open = false, pages = mutableListOf<Page>(Page(name = "view", enable = true), Page(name = "scroll-view", enable = true), Page(name = "swiper", enable = false), Page(name = "movable-view", enable = false), Page(name = "cover-view", enable = false))), ListItem(id = "content", name = "基础内容", open = false, pages = mutableListOf<Page>(Page(name = "text", enable = false), Page(name = "rich-text", enable = false), Page(name = "progress", enable = true))), ListItem(id = "form", name = "表单组件", open = false, pages = mutableListOf<Page>(Page(name = "button", enable = true), Page(name = "checkbox", enable = true), Page(name = "form", enable = false), Page(name = "input", enable = true), Page(name = "label", enable = false), Page(name = "picker", enable = false), Page(name = "picker-view", enable = false), Page(name = "radio", enable = true), Page(name = "slider", enable = false), Page(name = "switch", enable = false), Page(name = "textarea", enable = true), Page(name = "editor", enable = false))), ListItem(id = "nav", name = "导航", open = false, pages = mutableListOf<Page>(Page(name = "navigator", enable = false))), ListItem(id = "media", name = "媒体组件", open = false, pages = mutableListOf<Page>(Page(name = "image", enable = true), Page(name = "video", enable = false))), ListItem(id = "map", name = "地图", open = false, pages = mutableListOf<Page>(Page(name = "map", enable = false))), ListItem(id = "canvas", name = "画布", open = false, pages = mutableListOf<Page>(Page(name = "canvas"))), ListItem(id = "web-view", name = "网页", open = false, pages = mutableListOf<Page>(Page(name = "网络网页", enable = false, url = "/pages/component/web-view/web-view"), Page(name = "本地网页", enable = false, url = "/pages/component/web-view-local/web-view-local"))), ListItem(id = "ad", url = "ad", name = "AD组件", enable = false, open = false, pages = mutableListOf<Page>()))
            ),
            mutableListOf(
                "arrowUpIcon",
                "/static/icons/arrow-up.png"
            ),
            mutableListOf(
                "arrowDownIcon",
                "/static/icons/arrow-down.png"
            ),
            mutableListOf(
                "arrowRightIcon",
                "/static/icons/arrow-right.png"
            )
        ));
    }
    open var triggerCollapse = fun(index: Number?, item: ListItem) {
        if (item.pages.length == 0) {
            val page = Page(name = item.name, enable = item.enable, url = item.url);
            this.goDetailPage(page);
            return;
        }
        run {
            var i = 0;
            while(i < this.list.length){
                if (index == i) this.list[i].open = !this.list[i].open;
                else this.list[i].open = false;
                ++i;
            }
        }
    }
    ;
    open var goDetailPage = fun(e: Page) {
        if (e.enable != true) {
            uni_showToast(UniShowToastOptions(icon = "none", title = "暂不支持"));
            return;
        }
        val url = if (e.url != null) {
            e.url!!;
        } else {
            """/pages/component/${e.name}/${e.name}""";
        }
        ;
        uni_navigateTo(UniNavigateToOptions(url = url));
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-icon",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    14
                                ),
                                mutableListOf(
                                    "height",
                                    14
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-container",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    15
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    15
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    15
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    15
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#f8f8f8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-header-logo",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    15
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    15
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    15
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    15
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "column"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "marginTop",
                                    "10rpx"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-header-image",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    80
                                ),
                                mutableListOf(
                                    "height",
                                    80
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-hello-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginBottom",
                                    20
                                ),
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "hello-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "hello-link",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginBottom",
                                    12
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "text-disabled",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#a0a0a0"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-h",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#ffffff"
                                ),
                                mutableListOf(
                                    "!flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "!justifyContent",
                                    "space-between"
                                ),
                                mutableListOf(
                                    "!alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    12
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    12
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    12
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    12
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-h-on",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "backgroundColor",
                                    "#f0f0f0"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#000000"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-icon",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginLeft",
                                    15
                                ),
                                mutableListOf(
                                    "color",
                                    "#999999"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                ),
                                mutableListOf(
                                    "transform",
                                    "rotate(0deg)"
                                ),
                                mutableListOf(
                                    "transitionDuration",
                                    0
                                ),
                                mutableListOf(
                                    "transitionProperty",
                                    "transform"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-icon-on",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(180deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-navigate-item",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#FFFFFF"
                                ),
                                mutableListOf(
                                    "borderTopStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderTopColor",
                                    "#f0f0f0"
                                ),
                                mutableListOf(
                                    "borderTopWidth",
                                    1
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    12
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    12
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    12
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    12
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "space-between"
                                ),
                                mutableListOf(
                                    "backgroundColor:active",
                                    "#f8f8f8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-navigate-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#000000"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-navigate-icon",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginLeft",
                                    15
                                ),
                                mutableListOf(
                                    "color",
                                    "#999999"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    8
                                ),
                                mutableListOf(
                                    "height",
                                    8
                                ),
                                mutableListOf(
                                    "borderTopWidth",
                                    2
                                ),
                                mutableListOf(
                                    "borderTopStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderTopColor",
                                    "#cccccc"
                                ),
                                mutableListOf(
                                    "borderLeftWidth",
                                    2
                                ),
                                mutableListOf(
                                    "borderLeftStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderLeftColor",
                                    "#cccccc"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow-right",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(135deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow-up",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(45deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow-down",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(-135deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "@TRANSITION",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "uni-panel-icon",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "duration",
                                    0
                                ),
                                mutableListOf(
                                    "property",
                                    "transform"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesTabBarComponentComponentClass = GenPagesTabBarComponentComponent::class;
open class GenPagesComponentViewView : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentViewView): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    "view"
                )
            ))),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createElementVNode("view", null, mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-hello-text"
                        )
                    )), " Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。当设置display: flex后，继续给view等容器组件设置flex-direction: row或column，就可以在该容器内按行或列排布子组件。uni-app推荐使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。 ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " flex-direction: row "),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), " 横向布局 ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "flex-item uni-bg-red"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "style",
                                "color: #fff;"
                            )
                        )), "A")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "flex-item uni-bg-green"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "style",
                                "color: #fff;"
                            )
                        )), "B")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "flex-item uni-bg-blue"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "style",
                                "color: #fff;"
                            )
                        )), "C")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " column "),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), " 纵向布局 ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "flex-item flex-item-V uni-bg-red"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "style",
                                "color: #fff;"
                            )
                        )), "A")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "flex-item flex-item-V uni-bg-green"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "style",
                                "color: #fff;"
                            )
                        )), "B")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "flex-item flex-item-V uni-bg-blue"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "style",
                                "color: #fff;"
                            )
                        )), "C")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 更多布局示例 "),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), " flex布局演示 ")
                )),
                createElementVNode("view", null, mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "纵向布局-自动宽度")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "width: 300rpx;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "纵向布局-固定宽度")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-自动宽度")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-自动宽度")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    ),
                    mutableListOf(
                        "style",
                        "-webkit-justify-content: center;justify-content: center;"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-居中")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-居中")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    ),
                    mutableListOf(
                        "style",
                        "-webkit-justify-content: flex-end;justify-content: flex-end;"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-居右")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-居右")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-平均分布")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-平均分布")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    ),
                    mutableListOf(
                        "style",
                        "-webkit-justify-content: space-between;justify-content: space-between;"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-两端对齐")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "横向布局-两端对齐")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "width: 200rpx;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "固定宽度")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "自动占满余量")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "width: 200rpx;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "固定宽度")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "自动占满")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "width: 200rpx;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "固定宽度")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    ),
                    mutableListOf(
                        "style",
                        "-webkit-flex-wrap: wrap;flex-wrap: wrap;"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "width: 280rpx;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "一行显示不全,wrap折行")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "width: 280rpx;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "一行显示不全,wrap折行")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "width: 280rpx;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "一行显示不全,wrap折行")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-start;align-items: flex-start;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "垂直居顶")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "垂直居中")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-end;align-items: flex-end;"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text"
                            )
                        )), "垂直居底")
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 组合示例 "),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), " flex布局演示 ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text-box uni-flex"
                        ),
                        mutableListOf(
                            "style",
                            "width: 200rpx;height: 220rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;"
                        )
                    )), mutableListOf(
                        createElementVNode("image", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "src",
                                "/static/plus.png"
                            ),
                            mutableListOf(
                                "style",
                                "width: 150rpx;height: 150rpx;"
                            )
                        )))
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-flex uni-column"
                        ),
                        mutableListOf(
                            "style",
                            "-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;"
                        )
                    )), mutableListOf(
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "text-box"
                            ),
                            mutableListOf(
                                "style",
                                "height: 120rpx;justify-content: start;align-items: start;padding-left: 20rpx;"
                            )
                        )), mutableListOf(
                            createElementVNode("text", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text"
                                )
                            )), "文字居左，留出左间距")
                        )),
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-flex uni-row"
                            )
                        )), mutableListOf(
                            createElementVNode("view", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text-box"
                                ),
                                mutableListOf(
                                    "style",
                                    "-webkit-flex: 1;flex: 1;"
                                )
                            )), mutableListOf(
                                createElementVNode("text", Map<String, Any?>(mutableListOf(
                                    mutableListOf(
                                        "class",
                                        "text"
                                    )
                                )), "剩余数量")
                            )),
                            createElementVNode("view", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text-box"
                                ),
                                mutableListOf(
                                    "style",
                                    "-webkit-flex: 1;flex: 1;"
                                )
                            )), mutableListOf(
                                createElementVNode("text", Map<String, Any?>(mutableListOf(
                                    mutableListOf(
                                        "class",
                                        "text"
                                    )
                                )), "立即购买")
                            ))
                        ))
                    ))
                ))
            ))
        ));
    }
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf());
    }
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "flex-item",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    "33.3%"
                                ),
                                mutableListOf(
                                    "height",
                                    "200rpx"
                                ),
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "flex-item-V",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    "100%"
                                ),
                                mutableListOf(
                                    "height",
                                    "150rpx"
                                ),
                                mutableListOf(
                                    "textAlign",
                                    "center"
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    "150rpx"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "text-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginTop",
                                    "15rpx"
                                ),
                                mutableListOf(
                                    "marginRight",
                                    "10rpx"
                                ),
                                mutableListOf(
                                    "marginBottom",
                                    "15rpx"
                                ),
                                mutableListOf(
                                    "marginLeft",
                                    "10rpx"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "20rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "20rpx"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#ebebeb"
                                ),
                                mutableListOf(
                                    "height",
                                    "70rpx"
                                ),
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "70rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#777777"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "26rpx"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentViewViewClass = GenPagesComponentViewView::class;
open class GenPagesComponentScrollViewScrollView : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentScrollViewScrollView): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    "scroll-view,区域滚动视图"
                )
            ))),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), "Vertical Scroll"),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), "纵向滚动")
                )),
                createElementVNode("view", null, mutableListOf(
                    createElementVNode("scroll-view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "scrollTop",
                            _ctx.scrollTop
                        ),
                        mutableListOf(
                            "scrollY",
                            true
                        ),
                        mutableListOf(
                            "class",
                            "scroll-Y"
                        ),
                        mutableListOf(
                            "onScrolltoupper",
                            _ctx.upper
                        ),
                        mutableListOf(
                            "onScrolltolower",
                            _ctx.lower
                        ),
                        mutableListOf(
                            "onScroll",
                            _ctx.scroll
                        )
                    )), mutableListOf(
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "id",
                                "demo1"
                            ),
                            mutableListOf(
                                "class",
                                "scroll-view-item uni-bg-red"
                            )
                        )), mutableListOf(
                            createElementVNode("text", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text"
                                )
                            )), "A")
                        )),
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "id",
                                "demo2"
                            ),
                            mutableListOf(
                                "class",
                                "scroll-view-item uni-bg-green"
                            )
                        )), mutableListOf(
                            createElementVNode("text", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text"
                                )
                            )), "B")
                        )),
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "id",
                                "demo3"
                            ),
                            mutableListOf(
                                "class",
                                "scroll-view-item uni-bg-blue"
                            )
                        )), mutableListOf(
                            createElementVNode("text", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text"
                                )
                            )), "C")
                        ))
                    ), 40, mutableListOf(
                        "scrollTop",
                        "onScrolltoupper",
                        "onScrolltolower",
                        "onScroll"
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "onClick",
                        _ctx.goTop
                    ),
                    mutableListOf(
                        "class",
                        "uni-center uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-link"
                        )
                    )), "点击这里返回顶部")
                ), 8, mutableListOf(
                    "onClick"
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), "Horizontal Scroll"),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), "横向滚动")
                )),
                createElementVNode("view", null, mutableListOf(
                    createElementVNode("scroll-view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "scroll-view_H"
                        ),
                        mutableListOf(
                            "scrollX",
                            true
                        ),
                        mutableListOf(
                            "onScroll",
                            _ctx.scroll
                        ),
                        mutableListOf(
                            "scrollLeft",
                            120
                        )
                    )), mutableListOf(
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "id",
                                "demo1"
                            ),
                            mutableListOf(
                                "class",
                                "scroll-view-item_H uni-bg-red"
                            )
                        )), mutableListOf(
                            createElementVNode("text", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text"
                                )
                            )), "A")
                        )),
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "id",
                                "demo2"
                            ),
                            mutableListOf(
                                "class",
                                "scroll-view-item_H uni-bg-green"
                            )
                        )), mutableListOf(
                            createElementVNode("text", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text"
                                )
                            )), "B")
                        )),
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "id",
                                "demo3"
                            ),
                            mutableListOf(
                                "class",
                                "scroll-view-item_H uni-bg-blue"
                            )
                        )), mutableListOf(
                            createElementVNode("text", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "class",
                                    "text"
                                )
                            )), "C")
                        ))
                    ), 40, mutableListOf(
                        "onScroll"
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-common-pb"
                    )
                )))
            ))
        ));
    }
    open var scrollTop: Number by `$data`;
    open var oldScrollTop: Number by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "scrollTop",
                0
            ),
            mutableListOf(
                "oldScrollTop",
                0
            )
        ));
    }
    open var upper = fun(e: ScrollToUpperEvent) {
        console.log(e, " at pages/component/scroll-view/scroll-view.uvue:46");
    }
    ;
    open var lower = fun(e: ScrollToLowerEvent) {
        console.log(e, " at pages/component/scroll-view/scroll-view.uvue:49");
    }
    ;
    open var scroll = fun(e: ScrollEvent) {
        this.oldScrollTop = e.detail.scrollTop;
    }
    ;
    open var goTop = fun() {
        this.scrollTop = this.oldScrollTop;
        this.`$nextTick`(fun() {
            this.scrollTop = 0;
        }
        );
        uni_showToast(UniShowToastOptions(icon = "none", title = "纵向滚动 scrollTop 值已被修改为 0"));
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "scroll-Y",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "height",
                                    "300rpx"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "scroll-view_H",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    "100%"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "scroll-view-item",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "height",
                                    "300rpx"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "scroll-view-item_H",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    "690rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "300rpx"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "fontSize",
                                    "36rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#ffffff"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentScrollViewScrollViewClass = GenPagesComponentScrollViewScrollView::class;
open class GenPagesComponentTextText : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentTextText): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        val _component_button = resolveComponent("button");
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "text-box"
                    ),
                    mutableListOf(
                        "scroll-y",
                        "true"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "text"
                        )
                    )), toDisplayString(_ctx.text), 1)
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-btn-v"
                    )
                )), mutableListOf(
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-btn"
                        ),
                        mutableListOf(
                            "type",
                            "primary"
                        ),
                        mutableListOf(
                            "disabled",
                            !_ctx.canAdd
                        ),
                        mutableListOf(
                            "onClick",
                            _ctx.add
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "add line"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "disabled",
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-btn"
                        ),
                        mutableListOf(
                            "type",
                            "warn"
                        ),
                        mutableListOf(
                            "disabled",
                            !_ctx.canRemove
                        ),
                        mutableListOf(
                            "onClick",
                            _ctx.remove
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "remove line"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "disabled",
                        "onClick"
                    ))
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    open var texts: MutableList<String> by `$data`;
    open var text: String by `$data`;
    open var canAdd: Boolean by `$data`;
    open var canRemove: Boolean by `$data`;
    open var extraLine: MutableList<String> by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "text"
            ),
            mutableListOf(
                "texts",
                mutableListOf<String>("HBuilder，400万开发者选择的IDE", "MUI，轻巧、漂亮的前端开源框架", "wap2app，M站快速转换原生体验的App", "5+Runtime，为HTML5插上原生的翅膀", "HBuilderX，轻巧、极速，极客编辑器", "uni-app，终极跨平台方案", "HBuilder，400万开发者选择的IDE", "MUI，轻巧、漂亮的前端开源框架", "wap2app，M站快速转换原生体验的App", "5+Runtime，为HTML5插上原生的翅膀", "HBuilderX，轻巧、极速，极客编辑器", "uni-app，终极跨平台方案", "......")
            ),
            mutableListOf(
                "text",
                ""
            ),
            mutableListOf(
                "canAdd",
                true
            ),
            mutableListOf(
                "canRemove",
                false
            ),
            mutableListOf(
                "extraLine",
                mutableListOf<String>()
            )
        ));
    }
    open var add = fun() {
        this.extraLine.push(this.texts[this.extraLine.length % 12]);
        this.text = this.extraLine.join("\n");
        this.canAdd = this.extraLine.length < 12;
        this.canRemove = this.extraLine.length > 0;
    }
    ;
    open var remove = fun() {
        if (this.extraLine.length > 0) {
            this.extraLine.pop();
            this.text = this.extraLine.join("\n");
            this.canAdd = this.extraLine.length < 12;
            this.canRemove = this.extraLine.length > 0;
        }
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "text-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginBottom",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    0
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    0
                                ),
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "height",
                                    "300rpx"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#FFFFFF"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "textAlign",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#353535"
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    "54rpx"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentTextTextClass = GenPagesComponentTextText::class;
open class GenPagesComponentProgressProgress : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentProgressProgress): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        val _component_progress = resolveComponent("progress");
        val _component_button = resolveComponent("button");
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "progress-box"
                    )
                )), mutableListOf(
                    createVNode(_component_progress, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "percent",
                            _ctx.pgList[0]
                        ),
                        mutableListOf(
                            "show-info",
                            true
                        ),
                        mutableListOf(
                            "stroke-width",
                            3
                        )
                    )), null, 8, mutableListOf(
                        "percent"
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "progress-box"
                    )
                )), mutableListOf(
                    createVNode(_component_progress, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "percent",
                            _ctx.pgList[1]
                        ),
                        mutableListOf(
                            "stroke-width",
                            3
                        )
                    )), null, 8, mutableListOf(
                        "percent"
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "progress-box"
                    )
                )), mutableListOf(
                    createVNode(_component_progress, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "percent",
                            _ctx.pgList[2]
                        ),
                        mutableListOf(
                            "stroke-width",
                            3
                        )
                    )), null, 8, mutableListOf(
                        "percent"
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "progress-box"
                    )
                )), mutableListOf(
                    createVNode(_component_progress, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "percent",
                            _ctx.pgList[3]
                        ),
                        mutableListOf(
                            "activeColor",
                            "#10AEFF"
                        ),
                        mutableListOf(
                            "stroke-width",
                            3
                        )
                    )), null, 8, mutableListOf(
                        "percent"
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "progress-control"
                    )
                )), mutableListOf(
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "type",
                            "primary"
                        ),
                        mutableListOf(
                            "onClick",
                            _ctx.setProgress
                        ),
                        mutableListOf(
                            "class",
                            "button"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "设置进度"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "type",
                            "warn"
                        ),
                        mutableListOf(
                            "onClick",
                            _ctx.clearProgress
                        ),
                        mutableListOf(
                            "class",
                            "button"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "清除进度"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    ))
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    open var pgList: MutableList<Number> by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "progress"
            ),
            mutableListOf(
                "pgList",
                mutableListOf<Number>(0, 0, 0, 0)
            )
        ));
    }
    open var setProgress = fun() {
        this.pgList = mutableListOf<Number>(20, 40, 60, 80);
    }
    ;
    open var clearProgress = fun() {
        this.pgList = mutableListOf<Number>(0, 0, 0, 0);
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "progress-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "height",
                                    "50rpx"
                                ),
                                mutableListOf(
                                    "marginBottom",
                                    "60rpx"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "progress-cancel",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginLeft",
                                    "40rpx"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "button",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginTop",
                                    "20rpx"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentProgressProgressClass = GenPagesComponentProgressProgress::class;
open class GenPagesComponentButtonButton : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {
        onPageShow(fun() {}, instance);
        onUnload(fun() {}, instance);
    }
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentButtonButton): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        val _component_button = resolveComponent("button");
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createVNode(_component_button, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "primary"
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                "页面主操作 Normal"
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                ))),
                createCommentVNode(" <button type=\"primary\" :loading=\"loading\" class=\"button\">页面主操作 Loading</button> "),
                createVNode(_component_button, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "primary"
                    ),
                    mutableListOf(
                        "disabled",
                        true
                    ),
                    mutableListOf(
                        "class",
                        "button"
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                "页面主操作 Disabled"
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                ))),
                createVNode(_component_button, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "default"
                    ),
                    mutableListOf(
                        "class",
                        "button"
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                "页面次要操作 Normal"
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                ))),
                createVNode(_component_button, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "default"
                    ),
                    mutableListOf(
                        "disabled",
                        true
                    ),
                    mutableListOf(
                        "class",
                        "button"
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                "页面次要操作 Disabled"
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                ))),
                createVNode(_component_button, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "warn"
                    ),
                    mutableListOf(
                        "class",
                        "button"
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                "警告类操作 Normal"
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                ))),
                createVNode(_component_button, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "type",
                        "warn"
                    ),
                    mutableListOf(
                        "disabled",
                        true
                    ),
                    mutableListOf(
                        "class",
                        "button"
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                "警告类操作 Disabled"
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                ))),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "button-sp-area"
                    )
                )), mutableListOf(
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "type",
                            "primary"
                        ),
                        mutableListOf(
                            "plain",
                            true
                        ),
                        mutableListOf(
                            "class",
                            "button"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "按钮"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    ))),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "type",
                            "primary"
                        ),
                        mutableListOf(
                            "disabled",
                            true
                        ),
                        mutableListOf(
                            "plain",
                            true
                        ),
                        mutableListOf(
                            "class",
                            "button"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    " 不可点击的按钮 "
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    ))),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "type",
                            "default"
                        ),
                        mutableListOf(
                            "plain",
                            true
                        ),
                        mutableListOf(
                            "class",
                            "button"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "按钮"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    ))),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "type",
                            "default"
                        ),
                        mutableListOf(
                            "disabled",
                            true
                        ),
                        mutableListOf(
                            "plain",
                            true
                        ),
                        mutableListOf(
                            "class",
                            "button"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "按钮"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    ))),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-flex uni-row"
                        )
                    )), mutableListOf(
                        createVNode(_component_button, Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "button mini-btn"
                            ),
                            mutableListOf(
                                "type",
                                "primary"
                            ),
                            mutableListOf(
                                "size",
                                "mini"
                            )
                        )), Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "default",
                                fun(): MutableList<Any> {
                                    return mutableListOf(
                                        "按钮"
                                    );
                                }
                            ),
                            mutableListOf(
                                "_",
                                1
                            )
                        ))),
                        createVNode(_component_button, Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "button mini-btn"
                            ),
                            mutableListOf(
                                "type",
                                "default"
                            ),
                            mutableListOf(
                                "size",
                                "mini"
                            )
                        )), Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "default",
                                fun(): MutableList<Any> {
                                    return mutableListOf(
                                        "按钮"
                                    );
                                }
                            ),
                            mutableListOf(
                                "_",
                                1
                            )
                        ))),
                        createVNode(_component_button, Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "button mini-btn"
                            ),
                            mutableListOf(
                                "type",
                                "warn"
                            ),
                            mutableListOf(
                                "size",
                                "mini"
                            )
                        )), Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "default",
                                fun(): MutableList<Any> {
                                    return mutableListOf(
                                        "按钮"
                                    );
                                }
                            ),
                            mutableListOf(
                                "_",
                                1
                            )
                        )))
                    ))
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    open var loading: Boolean by `$data`;
    open var _timer: Number by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "button"
            ),
            mutableListOf(
                "loading",
                false
            ),
            mutableListOf(
                "_timer",
                0
            )
        ));
    }
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "button",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginTop",
                                    "30rpx"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "button-sp-area",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "20%"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "20%"
                                ),
                                mutableListOf(
                                    "width",
                                    "60%"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "mini-btn",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginRight",
                                    "10rpx"
                                ),
                                mutableListOf(
                                    "marginBottom",
                                    "30rpx"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentButtonButtonClass = GenPagesComponentButtonButton::class;
open class ItemType (
    open var value: String,
    open var name: String,
) : IUTSObject
open class ItemTypeReactiveObject : ItemType, IUTSReactive<ItemType> {
    override var __v_raw: ItemType;
    constructor(__v_raw: ItemType) : super(value = __v_raw.value, name = __v_raw.name) {
        this.__v_raw = __v_raw;
    }
    override var value: String
        get() {
            return trackReactiveGet(__v_raw, "value", __v_raw.value);
        }
        set(value) {
            val oldValue = __v_raw.value;
            __v_raw.value = value;
            triggerReactiveSet(__v_raw, "value", oldValue, value);
        }
    override var name: String
        get() {
            return trackReactiveGet(__v_raw, "name", __v_raw.name);
        }
        set(value) {
            val oldValue = __v_raw.name;
            __v_raw.name = value;
            triggerReactiveSet(__v_raw, "name", oldValue, value);
        }
}
open class GenPagesComponentRadioRadio : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentRadioRadio): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        val _component_radio = resolveComponent("radio");
        val _component_radio_group = resolveComponent("radio-group");
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 默认样式 ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createVNode(_component_radio, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "value",
                            "r1"
                        ),
                        mutableListOf(
                            "checked",
                            true
                        ),
                        mutableListOf(
                            "style",
                            "margin-right: 30rpx;"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    createElementVNode("text", null, "选中")
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    ))),
                    createVNode(_component_radio, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "value",
                            "r2"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    createElementVNode("text", null, "未选中")
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )))
                ))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 不同颜色和尺寸的radio ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-flex uni-row"
                    )
                )), mutableListOf(
                    createVNode(_component_radio, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "value",
                            "r1"
                        ),
                        mutableListOf(
                            "checked",
                            true
                        ),
                        mutableListOf(
                            "color",
                            "#FFCC33"
                        ),
                        mutableListOf(
                            "style",
                            "transform:scale(0.7); margin-right: 30rpx;"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    createElementVNode("text", null, "选中 ")
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    ))),
                    createVNode(_component_radio, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "value",
                            "r2"
                        ),
                        mutableListOf(
                            "color",
                            "#FFCC33"
                        ),
                        mutableListOf(
                            "style",
                            "transform:scale(0.7)"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    createElementVNode("text", null, "未选中")
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )))
                ))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 推荐展示样式 ")
                ))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-list"
                )
            )), mutableListOf(
                createVNode(_component_radio_group, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "onChange",
                        _ctx.radioChange
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.items, fun(item, index, _): VNode {
                                    return createElementVNode("view", Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "class",
                                            "uni-list-cell uni-list-cell-pd"
                                        ),
                                        mutableListOf(
                                            "key",
                                            item.value
                                        )
                                    )), mutableListOf(
                                        createElementVNode("view", null, mutableListOf(
                                            createVNode(_component_radio, Map<String, Any?>(mutableListOf(
                                                mutableListOf(
                                                    "value",
                                                    item.value
                                                ),
                                                mutableListOf(
                                                    "checked",
                                                    index === _ctx.current
                                                )
                                            )), Map<String, Any?>(mutableListOf(
                                                mutableListOf(
                                                    "default",
                                                    fun(): MutableList<Any> {
                                                        return mutableListOf(
                                                            createElementVNode("text", null, toDisplayString(item.name), 1)
                                                        );
                                                    }
                                                ),
                                                mutableListOf(
                                                    "_",
                                                    2
                                                )
                                            )), 1032, mutableListOf(
                                                "value",
                                                "checked"
                                            ))
                                        ))
                                    ));
                                }
                                ), 128)
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                )), 8, mutableListOf(
                    "onChange"
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    open var items: MutableList<ItemType> by `$data`;
    open var current: Number by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "radio 单选框"
            ),
            mutableListOf(
                "items",
                mutableListOf<ItemType>(ItemType(value = "USA", name = "美国"), ItemType(value = "CHN", name = "中国"), ItemType(value = "BRA", name = "巴西"), ItemType(value = "JPN", name = "日本"), ItemType(value = "ENG", name = "英国"), ItemType(value = "FRA", name = "法国"))
            ),
            mutableListOf(
                "current",
                0
            )
        ));
    }
    open var radioChange = fun(e: String) {
        run {
            var i = 0;
            while(i < this.items.length){
                if (this.items[i].value === e) {
                    this.current = i;
                    break;
                }
                i++;
            }
        }
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-list-cell",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "justifyContent",
                                    "flex-start"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentRadioRadioClass = GenPagesComponentRadioRadio::class;
open class ItemType1 (
    open var value: String,
    open var name: String,
    open var checked: Boolean = false,
) : IUTSObject
open class ItemType1ReactiveObject : ItemType1, IUTSReactive<ItemType1> {
    override var __v_raw: ItemType1;
    constructor(__v_raw: ItemType1) : super(value = __v_raw.value, name = __v_raw.name, checked = __v_raw.checked) {
        this.__v_raw = __v_raw;
    }
    override var value: String
        get() {
            return trackReactiveGet(__v_raw, "value", __v_raw.value);
        }
        set(value) {
            val oldValue = __v_raw.value;
            __v_raw.value = value;
            triggerReactiveSet(__v_raw, "value", oldValue, value);
        }
    override var name: String
        get() {
            return trackReactiveGet(__v_raw, "name", __v_raw.name);
        }
        set(value) {
            val oldValue = __v_raw.name;
            __v_raw.name = value;
            triggerReactiveSet(__v_raw, "name", oldValue, value);
        }
    override var checked: Boolean
        get() {
            return trackReactiveGet(__v_raw, "checked", __v_raw.checked);
        }
        set(value) {
            val oldValue = __v_raw.checked;
            __v_raw.checked = value;
            triggerReactiveSet(__v_raw, "checked", oldValue, value);
        }
}
open class GenPagesComponentCheckboxCheckbox : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentCheckboxCheckbox): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        val _component_checkbox = resolveComponent("checkbox");
        val _component_checkbox_group = resolveComponent("checkbox-group");
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 默认样式 ")
                )),
                createElementVNode("view", null, mutableListOf(
                    createVNode(_component_checkbox_group, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-flex uni-row"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    createVNode(_component_checkbox, Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "value",
                                            "cb1"
                                        ),
                                        mutableListOf(
                                            "checked",
                                            true
                                        ),
                                        mutableListOf(
                                            "style",
                                            "margin-right: 30rpx;"
                                        )
                                    )), Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "default",
                                            fun(): MutableList<Any> {
                                                return mutableListOf(
                                                    createElementVNode("text", null, "选中")
                                                );
                                            }
                                        ),
                                        mutableListOf(
                                            "_",
                                            1
                                        )
                                    ))),
                                    createVNode(_component_checkbox, Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "value",
                                            "cb"
                                        )
                                    )), Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "default",
                                            fun(): MutableList<Any> {
                                                return mutableListOf(
                                                    createElementVNode("text", null, "未选中")
                                                );
                                            }
                                        ),
                                        mutableListOf(
                                            "_",
                                            1
                                        )
                                    )))
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 不同颜色和尺寸的checkbox ")
                )),
                createElementVNode("view", null, mutableListOf(
                    createVNode(_component_checkbox_group, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-flex uni-row"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    createVNode(_component_checkbox, Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "value",
                                            "cb1"
                                        ),
                                        mutableListOf(
                                            "checked",
                                            true
                                        ),
                                        mutableListOf(
                                            "color",
                                            "#FFCC33"
                                        ),
                                        mutableListOf(
                                            "style",
                                            "transform:scale(0.7); margin-right: 30rpx;"
                                        )
                                    )), Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "default",
                                            fun(): MutableList<Any> {
                                                return mutableListOf(
                                                    createElementVNode("text", null, "选中 ")
                                                );
                                            }
                                        ),
                                        mutableListOf(
                                            "_",
                                            1
                                        )
                                    ))),
                                    createVNode(_component_checkbox, Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "value",
                                            "cb"
                                        ),
                                        mutableListOf(
                                            "color",
                                            "#FFCC33"
                                        ),
                                        mutableListOf(
                                            "style",
                                            "transform:scale(0.7)"
                                        )
                                    )), Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "default",
                                            fun(): MutableList<Any> {
                                                return mutableListOf(
                                                    createElementVNode("text", null, "未选中")
                                                );
                                            }
                                        ),
                                        mutableListOf(
                                            "_",
                                            1
                                        )
                                    )))
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )))
                ))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title uni-common-mt"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 推荐展示样式 "),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), " 使用 uni-list 布局 ")
                ))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-list"
                )
            )), mutableListOf(
                createVNode(_component_checkbox_group, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "onChange",
                        _ctx.checkboxChange
                    )
                )), Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "default",
                        fun(): MutableList<Any> {
                            return mutableListOf(
                                createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.items, fun(item, _, _): VNode {
                                    return createElementVNode("view", Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "class",
                                            "uni-list-cell uni-list-cell-pd"
                                        ),
                                        mutableListOf(
                                            "key",
                                            item.value
                                        )
                                    )), mutableListOf(
                                        createElementVNode("view", null, mutableListOf(
                                            createVNode(_component_checkbox, Map<String, Any?>(mutableListOf(
                                                mutableListOf(
                                                    "value",
                                                    item.value
                                                ),
                                                mutableListOf(
                                                    "checked",
                                                    item.checked
                                                )
                                            )), Map<String, Any?>(mutableListOf(
                                                mutableListOf(
                                                    "default",
                                                    fun(): MutableList<Any> {
                                                        return mutableListOf(
                                                            createElementVNode("text", null, toDisplayString(item.name), 1)
                                                        );
                                                    }
                                                ),
                                                mutableListOf(
                                                    "_",
                                                    2
                                                )
                                            )), 1032, mutableListOf(
                                                "value",
                                                "checked"
                                            ))
                                        ))
                                    ));
                                }
                                ), 128)
                            );
                        }
                    ),
                    mutableListOf(
                        "_",
                        1
                    )
                )), 8, mutableListOf(
                    "onChange"
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    open var items: MutableList<ItemType1> by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "checkbox 复选框"
            ),
            mutableListOf(
                "items",
                mutableListOf<ItemType1>(ItemType1(value = "USA", name = "美国", checked = false), ItemType1(value = "CHN", name = "中国", checked = true), ItemType1(value = "BRA", name = "巴西", checked = false), ItemType1(value = "JPN", name = "日本", checked = false), ItemType1(value = "ENG", name = "英国", checked = false), ItemType1(value = "FRA", name = "法国", checked = false))
            )
        ));
    }
    open var checkboxChange = fun(value: MutableList<String>) {
        var items = this.items;
        var values = value;
        run {
            var i = 0;
            var lenI = items.length;
            while(i < lenI){
                val item = items[i];
                if (values.indexOf(item.value) >= 0) item.checked = true;
                else item.checked = false;
                ++i;
            }
        }
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-list-cell",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "justifyContent",
                                    "flex-start"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentCheckboxCheckboxClass = GenPagesComponentCheckboxCheckbox::class;
open class GenPagesComponentInputInput : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentInputInput): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        return createElementVNode("view", Map<String, Any?>(mutableListOf(
            mutableListOf(
                "class",
                "nvue-page-root"
            )
        )), mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-common-mt"
                )
            )), mutableListOf(
                createCommentVNode(" <view class=\"uni-form-item uni-column\">\n                <view class=\"title\"><text class=\"uni-form-item__title\">可自动聚焦的 input</text></view>\n                <view class=\"uni-input-wrapper\">\n                    <input class=\"uni-input\" :focus=\"true\" placeholder=\"自动获得焦点\" ref=\"input\"/>\n                </view>\n            </view> "),
                createCommentVNode(" <view v-if=\"platform==='ios'&&!isNvue\" class=\"uni-form-item uni-column\">\n                <view class=\"title\"><text class=\"uni-form-item__title\">隐藏 iOS 软键盘上的导航条</text></view>\n                <view class=\"uni-input-wrapper\">\n                    <input class=\"uni-input\" placeholder=\"触摸其他地方收起键盘\" @focus=\"onFocus\" @blur=\"onBlur\" />\n                </view>\n            </view> "),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "键盘右下角按钮显示为搜索")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "confirmType",
                                "search"
                            ),
                            mutableListOf(
                                "placeholder",
                                "键盘右下角按钮显示为搜索"
                            )
                        )))
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "键盘右下角按钮显示为发送")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "confirmType",
                                "send"
                            ),
                            mutableListOf(
                                "placeholder",
                                "键盘右下角按钮显示为发送"
                            )
                        )))
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "控制最大输入长度的 input")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "maxlength",
                                10
                            ),
                            mutableListOf(
                                "placeholder",
                                "最大输入长度为10"
                            )
                        )))
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "实时获取输入值：" + toDisplayString(_ctx.inputValue), 1)
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "onInput",
                                _ctx.onKeyInput
                            ),
                            mutableListOf(
                                "placeholder",
                                "输入同步到view中"
                            )
                        )), null, 40, mutableListOf(
                            "onInput"
                        ))
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "控制输入的 input")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "onInput",
                                _ctx.replaceInput
                            ),
                            mutableListOf(
                                "value",
                                _ctx.changeValue
                            ),
                            mutableListOf(
                                "placeholder",
                                "连续的两个1会变成2"
                            )
                        )), null, 40, mutableListOf(
                            "onInput",
                            "value"
                        ))
                    ))
                )),
                createCommentVNode(" <view class=\"uni-form-item uni-column\">\n                <view class=\"title\"><text class=\"uni-form-item__title\">控制键盘的 input</text></view>\n                <view class=\"uni-input-wrapper\">\n                    <input class=\"uni-input\" ref=\"input1\" @input=\"hideKeyboard\" placeholder=\"输入123自动收起键盘\" />\n                </view>\n            </view> "),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "数字输入的 input")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "type",
                                "number"
                            ),
                            mutableListOf(
                                "placeholder",
                                "这是一个数字输入框"
                            )
                        )))
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "密码输入的 input")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "password",
                                true
                            ),
                            mutableListOf(
                                "type",
                                "text"
                            ),
                            mutableListOf(
                                "placeholder",
                                "这是一个密码输入框"
                            )
                        )))
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "带小数点的 input")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "type",
                                "digit"
                            ),
                            mutableListOf(
                                "placeholder",
                                "带小数点的数字键盘"
                            )
                        )))
                    ))
                )),
                createCommentVNode(" <view class=\"uni-form-item uni-column\">\n                <view class=\"title\"><text class=\"uni-form-item__title\">身份证输入的 input</text></view>\n                <view class=\"uni-input-wrapper\">\n                    <input class=\"uni-input\" type=\"idcard\" placeholder=\"身份证输入键盘\" /> </view>\n            </view> "),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "控制占位符颜色的 input")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "placeholder-style",
                                "color:#F76260"
                            ),
                            mutableListOf(
                                "placeholder",
                                "占位符字体是红色的"
                            )
                        )))
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "带清除按钮的输入框")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "placeholder",
                                "带清除按钮的输入框"
                            ),
                            mutableListOf(
                                "value",
                                _ctx.inputClearValue
                            ),
                            mutableListOf(
                                "onInput",
                                _ctx.clearInput
                            )
                        )), null, 40, mutableListOf(
                            "value",
                            "onInput"
                        )),
                        if (isTrue(_ctx.showClearIcon)) {
                            createElementVNode("image", Map<String, Any?>(mutableListOf(
                                mutableListOf(
                                    "key",
                                    0
                                ),
                                mutableListOf(
                                    "class",
                                    "uni-icon"
                                ),
                                mutableListOf(
                                    "src",
                                    "/static/icons/clear.png"
                                ),
                                mutableListOf(
                                    "onClick",
                                    _ctx.clearIcon
                                )
                            )), null, 8, mutableListOf(
                                "onClick"
                            ));
                        } else {
                            createCommentVNode("v-if", true);
                        }
                    ))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-form-item uni-column"
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "title"
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-form-item__title"
                            )
                        )), "可查看密码的输入框")
                    )),
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-input-wrapper"
                        )
                    )), mutableListOf(
                        createElementVNode("input", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-input"
                            ),
                            mutableListOf(
                                "placeholder",
                                "请输入密码"
                            ),
                            mutableListOf(
                                "password",
                                _ctx.showPassword
                            )
                        )), null, 8, mutableListOf(
                            "password"
                        )),
                        createElementVNode("image", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                "uni-icon"
                            ),
                            mutableListOf(
                                "src",
                                if (!_ctx.showPassword) {
                                    "/static/icons/eye-active.png";
                                } else {
                                    "/static/icons/eye.png";
                                }
                            ),
                            mutableListOf(
                                "onClick",
                                _ctx.changePassword
                            )
                        )), null, 8, mutableListOf(
                            "src",
                            "onClick"
                        ))
                    ))
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    open var focus: Boolean by `$data`;
    open var inputValue: String by `$data`;
    open var showClearIcon: Boolean by `$data`;
    open var inputClearValue: String by `$data`;
    open var changeValue: String by `$data`;
    open var showPassword: Boolean by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "input"
            ),
            mutableListOf(
                "focus",
                false
            ),
            mutableListOf(
                "inputValue",
                ""
            ),
            mutableListOf(
                "showClearIcon",
                false
            ),
            mutableListOf(
                "inputClearValue",
                ""
            ),
            mutableListOf(
                "changeValue",
                ""
            ),
            mutableListOf(
                "showPassword",
                true
            )
        ));
    }
    open var onKeyInput = fun(event: InputEvent) {
        this.inputValue = event.detail.value;
    }
    ;
    open var replaceInput = fun(event: InputEvent) {
        var value = event.detail.value;
        if (value == "11") this.changeValue = "2";
    }
    ;
    open var clearInput = fun(event: InputEvent) {
        this.inputClearValue = event.detail.value;
        if (event.detail.value.length > 0) this.showClearIcon = true;
        else this.showClearIcon = false;
    }
    ;
    open var clearIcon = fun() {
        this.inputClearValue = "";
        this.showClearIcon = false;
    }
    ;
    open var changePassword = fun() {
        this.showPassword = !this.showPassword;
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "nvue-page-root",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "backgroundColor",
                                    "#F8F8F8"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    5
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    13
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    5
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    13
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-form-item__title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "fontSize",
                                    16
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    24
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-input-wrapper",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    8
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    13
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    8
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    13
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "flexWrap",
                                    "nowrap"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#FFFFFF"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-input",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "height",
                                    28
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    28
                                ),
                                mutableListOf(
                                    "fontSize",
                                    15
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    0
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    0
                                ),
                                mutableListOf(
                                    "flex",
                                    "1"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#FFFFFF"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-icon",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    24
                                ),
                                mutableListOf(
                                    "height",
                                    24
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentInputInputClass = GenPagesComponentInputInput::class;
open class GenPagesComponentTextareaTextarea : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentTextareaTextarea): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-title uni-common-pl"
                )
            )), mutableListOf(
                createElementVNode("text", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title-text"
                    )
                )), " 输入区域高度自适应，不会出现滚动条 ")
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-textarea-box"
                )
            )), mutableListOf(
                createElementVNode("textarea", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "onBlur",
                        _ctx.bindTextAreaBlur
                    ),
                    mutableListOf(
                        "auto-height",
                        true
                    ),
                    mutableListOf(
                        "class",
                        "uni-textarea"
                    )
                )), null, 40, mutableListOf(
                    "onBlur"
                ))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-title uni-common-pl"
                )
            )), mutableListOf(
                createElementVNode("text", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title-text"
                    )
                )), " 占位符字体是红色的textarea ")
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-textarea-box"
                )
            )), mutableListOf(
                createElementVNode("textarea", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "placeholder-style",
                        "color:#F76260"
                    ),
                    mutableListOf(
                        "placeholder",
                        "占位符字体是红色的"
                    ),
                    mutableListOf(
                        "class",
                        "uni-textarea"
                    )
                )))
            ))
        ));
    }
    open var title: String by `$data`;
    open var focus: Boolean by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "textarea"
            ),
            mutableListOf(
                "focus",
                false
            )
        ));
    }
    open var bindTextAreaBlur = fun(e: TextareaBlurEvent) {
        console.log(e.detail.value, " at pages/component/textarea/textarea.uvue:32");
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentTextareaTextareaClass = GenPagesComponentTextareaTextarea::class;
open class GenPagesComponentImageImage : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesComponentImageImage): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 示例1 "),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), " 本地图片 ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-center"
                    ),
                    mutableListOf(
                        "style",
                        "background:#FFFFFF; font-size:0;"
                    )
                )), mutableListOf(
                    createElementVNode("image", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "image"
                        ),
                        mutableListOf(
                            "mode",
                            "widthFix"
                        ),
                        mutableListOf(
                            "src",
                            "/static/uni.png"
                        )
                    )))
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-title"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-title-text"
                        )
                    )), " 示例2 "),
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "uni-subtitle-text"
                        )
                    )), " 网络图片 ")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-center"
                    ),
                    mutableListOf(
                        "style",
                        "background:#FFFFFF; font-size:0;"
                    )
                )), mutableListOf(
                    createElementVNode("image", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "image"
                        ),
                        mutableListOf(
                            "mode",
                            "widthFix"
                        ),
                        mutableListOf(
                            "src",
                            "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"
                        )
                    )))
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "image"
            )
        ));
    }
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "image",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginTop",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "marginRight",
                                    "auto"
                                ),
                                mutableListOf(
                                    "marginBottom",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "marginLeft",
                                    "auto"
                                ),
                                mutableListOf(
                                    "width",
                                    "200rpx"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesComponentImageImageClass = GenPagesComponentImageImage::class;
open class Page1 (
    open var name: String,
    open var enable: Boolean? = null,
    open var url: String,
)
open class ListItem1 (
    open var id: String,
    open var name: String,
    open var open: Boolean = false,
    open var pages: MutableList<Page1>,
    open var url: String? = null,
    open var enable: Boolean? = null,
) : IUTSObject
open class ListItem1ReactiveObject : ListItem1, IUTSReactive<ListItem1> {
    override var __v_raw: ListItem1;
    constructor(__v_raw: ListItem1) : super(id = __v_raw.id, name = __v_raw.name, open = __v_raw.open, pages = __v_raw.pages, url = __v_raw.url, enable = __v_raw.enable) {
        this.__v_raw = __v_raw;
    }
    override var id: String
        get() {
            return trackReactiveGet(__v_raw, "id", __v_raw.id);
        }
        set(value) {
            val oldValue = __v_raw.id;
            __v_raw.id = value;
            triggerReactiveSet(__v_raw, "id", oldValue, value);
        }
    override var name: String
        get() {
            return trackReactiveGet(__v_raw, "name", __v_raw.name);
        }
        set(value) {
            val oldValue = __v_raw.name;
            __v_raw.name = value;
            triggerReactiveSet(__v_raw, "name", oldValue, value);
        }
    override var open: Boolean
        get() {
            return trackReactiveGet(__v_raw, "open", __v_raw.open);
        }
        set(value) {
            val oldValue = __v_raw.open;
            __v_raw.open = value;
            triggerReactiveSet(__v_raw, "open", oldValue, value);
        }
    override var pages: MutableList<Page1>
        get() {
            return trackReactiveGet(__v_raw, "pages", __v_raw.pages);
        }
        set(value) {
            val oldValue = __v_raw.pages;
            __v_raw.pages = value;
            triggerReactiveSet(__v_raw, "pages", oldValue, value);
        }
    override var url: String?
        get() {
            return trackReactiveGet(__v_raw, "url", __v_raw.url);
        }
        set(value) {
            val oldValue = __v_raw.url;
            __v_raw.url = value;
            triggerReactiveSet(__v_raw, "url", oldValue, value);
        }
    override var enable: Boolean?
        get() {
            return trackReactiveGet(__v_raw, "enable", __v_raw.enable);
        }
        set(value) {
            val oldValue = __v_raw.enable;
            __v_raw.enable = value;
            triggerReactiveSet(__v_raw, "enable", oldValue, value);
        }
}
open class GenPagesTabBarAPIAPI : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesTabBarAPIAPI): VNode? {
        val _component_u_link = resolveEasyComponent("u-link", GenComponentsULinkULinkClass);
        return createElementVNode("view", Map<String, Any?>(mutableListOf(
            mutableListOf(
                "class",
                "uni-container"
            )
        )), mutableListOf(
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-header-logo"
                )
            )), mutableListOf(
                createElementVNode("image", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-header-image"
                    ),
                    mutableListOf(
                        "src",
                        "/static/apiIndex.png"
                    )
                )))
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-hello-text"
                )
            )), mutableListOf(
                createElementVNode("text", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "hello-text"
                    )
                )), "以下将演示uni-app接口能力，详细文档见："),
                createVNode(_component_u_link, Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "href",
                        "https://uniapp.dcloud.io/api/"
                    ),
                    mutableListOf(
                        "text",
                        "https://uniapp.dcloud.io/api/"
                    ),
                    mutableListOf(
                        "inWhiteList",
                        true
                    )
                )), null, 8, mutableListOf(
                    "href",
                    "text"
                ))
            )),
            createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, _): VNode {
                return createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-panel"
                    ),
                    mutableListOf(
                        "key",
                        item.id
                    )
                )), mutableListOf(
                    createElementVNode("view", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            normalizeClass(mutableListOf(
                                "uni-panel-h",
                                if (item.open) {
                                    "uni-panel-h-on";
                                } else {
                                    "";
                                }
                            ))
                        ),
                        mutableListOf(
                            "onClick",
                            fun(){
                                _ctx.triggerCollapse(index, item);
                            }
                        )
                    )), mutableListOf(
                        createElementVNode("text", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "class",
                                normalizeClass(mutableListOf(
                                    "uni-panel-text",
                                    if (item.enable == false) {
                                        "text-disabled";
                                    } else {
                                        "";
                                    }
                                ))
                            )
                        )), toDisplayString(item.name), 3),
                        createElementVNode("image", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "src",
                                if (item.pages.length > 0) {
                                    if (item.open) {
                                        _ctx.arrowUpIcon;
                                    } else {
                                        _ctx.arrowDownIcon;
                                    };
                                } else {
                                    _ctx.arrowRightIcon;
                                }
                            ),
                            mutableListOf(
                                "class",
                                "uni-icon"
                            )
                        )), null, 8, mutableListOf(
                            "src"
                        ))
                    ), 10, mutableListOf(
                        "onClick"
                    )),
                    if (isTrue(item.open)) {
                        createElementVNode("view", Map<String, Any?>(mutableListOf(
                            mutableListOf(
                                "key",
                                0
                            ),
                            mutableListOf(
                                "class",
                                "uni-panel-c"
                            )
                        )), mutableListOf(
                            createElementVNode(Fragment, null, RenderHelpers.renderList(item.pages, fun(page, key, _): VNode {
                                return createElementVNode("view", Map<String, Any?>(mutableListOf(
                                    mutableListOf(
                                        "class",
                                        "uni-navigate-item"
                                    ),
                                    mutableListOf(
                                        "key",
                                        key
                                    ),
                                    mutableListOf(
                                        "onClick",
                                        fun(){
                                            _ctx.goDetailPage(page);
                                        }
                                    )
                                )), mutableListOf(
                                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "class",
                                            normalizeClass(mutableListOf(
                                                "uni-navigate-text",
                                                if (page.enable != true) {
                                                    "text-disabled";
                                                } else {
                                                    "";
                                                }
                                            ))
                                        )
                                    )), toDisplayString(page.name), 3),
                                    createElementVNode("image", Map<String, Any?>(mutableListOf(
                                        mutableListOf(
                                            "src",
                                            _ctx.arrowRightIcon
                                        ),
                                        mutableListOf(
                                            "class",
                                            "uni-icon"
                                        )
                                    )), null, 8, mutableListOf(
                                        "src"
                                    ))
                                ), 8, mutableListOf(
                                    "onClick"
                                ));
                            }), 128)
                        ));
                    } else {
                        createCommentVNode("v-if", true);
                    }
                ));
            }
            ), 128)
        ));
    }
    open var list: MutableList<ListItem1> by `$data`;
    open var arrowUpIcon: String by `$data`;
    open var arrowDownIcon: String by `$data`;
    open var arrowRightIcon: String by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "list",
                mutableListOf<ListItem1>(ListItem1(id = "page", name = "界面", open = false, pages = mutableListOf<Page1>(Page1(name = "设置导航条", url = "set-navigation-bar-title"), Page1(name = "原生子窗体", url = "subnvue"), Page1(name = "页面跳转", url = "navigator", enable = true), Page1(name = "设置TabBar", url = "set-tabbar"), Page1(name = "下拉刷新", url = "pull-down-refresh"), Page1(name = "创建动画", url = "animation"), Page1(name = "创建绘画", url = "canvas"), Page1(name = "节点信息", url = "get-node-info"), Page1(name = "节点布局交互状态", url = "intersection-observer"), Page1(name = "显示操作菜单", url = "action-sheet"), Page1(name = "显示模态弹窗", url = "modal"), Page1(name = "显示加载提示框", url = "show-loading"), Page1(name = "显示消息提示框", url = "toast"))), ListItem1(id = "device", name = "设备", open = false, pages = mutableListOf<Page1>(Page1(name = "获取设备网络状态", url = "get-network-type"), Page1(name = "获取设备系统信息", url = "get-system-info"), Page1(name = "打电话", url = "make-phone-call"), Page1(name = "震动", url = "vibrate"), Page1(name = "添加手机联系人", url = "add-phone-contact"), Page1(name = "扫码", url = "scan-code"), Page1(name = "剪贴板", url = "clipboard"), Page1(name = "屏幕亮度", url = "brightness"), Page1(name = "蓝牙", url = "bluetooth"), Page1(name = "生物认证", url = "soter"), Page1(name = "iBeacon", url = "ibeacon"), Page1(name = "监听加速度传感器", url = "on-accelerometer-change"), Page1(name = "监听罗盘数据", url = "on-compass-change"), Page1(name = "监听距离传感器", url = "/platforms/app-plus/proximity/proximity"), Page1(name = "监听方向传感器", url = "/platforms/app-plus/orientation/orientation"))), ListItem1(id = "network", name = "网络", open = false, pages = mutableListOf<Page1>(Page1(name = "发起一个请求", url = "request"), Page1(name = "上传文件", url = "upload-file"), Page1(name = "下载文件", url = "download-file"))), ListItem1(id = "websocket", name = "websocket", open = false, pages = mutableListOf<Page1>(Page1(name = "socketTask", url = "websocket-socketTask"), Page1(name = "全局websocket", url = "websocket-global"))), ListItem1(id = "media", name = "媒体", open = false, pages = mutableListOf<Page1>(Page1(name = "图片", url = "image"), Page1(name = "音频", url = "inner-audio"), Page1(name = "录音", url = "voice"), Page1(name = "背景音频", url = "background-audio"), Page1(name = "视频", url = "video"), Page1(name = "文件", url = "file"), Page1(name = "保存媒体到本地", url = "save-media"))), ListItem1(id = "location", name = "位置", open = false, pages = mutableListOf<Page1>(Page1(name = "获取当前位置", url = "get-location"), Page1(name = "使用地图查看位置", url = "open-location"), Page1(name = "使用地图选择位置", url = "choose-location"), Page1(name = "地图控制", url = "map"), Page1(name = "地图搜索", url = "map-search"))), ListItem1(id = "storage", name = "数据", open = false, pages = mutableListOf<Page1>(Page1(name = "数据存储（key-value）", url = "storage"), Page1(name = "SQLite", url = "sqlite"))), ListItem1(id = "rewarded-video-ad", url = "rewarded-video-ad", name = "激励视频广告", open = false, enable = false, pages = mutableListOf<Page1>()), ListItem1(id = "full-screen-video-ad", url = "full-screen-video-ad", name = "全屏视频广告", open = false, enable = false, pages = mutableListOf<Page1>()), ListItem1(id = "login", name = "登录", open = false, pages = mutableListOf<Page1>(Page1(name = "登录", url = "login"), Page1(name = "获取用户信息", url = "get-user-info"))), ListItem1(id = "share", name = "分享", open = false, pages = mutableListOf<Page1>(Page1(name = "分享", url = "share"))), ListItem1(id = "payment", name = "支付", open = false, pages = mutableListOf<Page1>(Page1(name = "发起支付", url = "request-payment"))), ListItem1(id = "speech", name = "语音", open = false, pages = mutableListOf<Page1>(Page1(name = "语音识别", url = "/platforms/app-plus/speech/speech"))), ListItem1(id = "push", name = "推送", open = false, pages = mutableListOf<Page1>(Page1(name = "推送", url = "/platforms/app-plus/push/push"))))
            ),
            mutableListOf(
                "arrowUpIcon",
                "/static/icons/arrow-up.png"
            ),
            mutableListOf(
                "arrowDownIcon",
                "/static/icons/arrow-down.png"
            ),
            mutableListOf(
                "arrowRightIcon",
                "/static/icons/arrow-right.png"
            )
        ));
    }
    open var triggerCollapse = fun(index: Number?, item: ListItem1) {
        if (item.pages.length == 0) {
            val page = Page1(name = item.name, enable = item.enable, url = item.url!!);
            this.goDetailPage(page);
            return;
        }
        run {
            var i = 0;
            while(i < this.list.length){
                if (index == i) this.list[i].open = !this.list[i].open;
                else this.list[i].open = false;
                ++i;
            }
        }
    }
    ;
    open var goDetailPage = fun(e: Page1) {
        if (e.enable != true) {
            uni_showToast(UniShowToastOptions(icon = "none", title = "暂不支持"));
            return;
        }
        val url = if (e.url.indexOf("platform") > -1) {
            e.url;
        } else {
            """/pages/API/${e.url}/${e.url}""";
        }
        ;
        uni_navigateTo(UniNavigateToOptions(url = url));
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-icon",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    14
                                ),
                                mutableListOf(
                                    "height",
                                    14
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-container",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    15
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    15
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    15
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    15
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#f8f8f8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-header-logo",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    15
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    15
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    15
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    15
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "column"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "marginTop",
                                    "10rpx"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-header-image",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    80
                                ),
                                mutableListOf(
                                    "height",
                                    80
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-hello-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginBottom",
                                    20
                                ),
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "hello-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "hello-link",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#7A7E83"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginBottom",
                                    12
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "text-disabled",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#a0a0a0"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-h",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#ffffff"
                                ),
                                mutableListOf(
                                    "!flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "!justifyContent",
                                    "space-between"
                                ),
                                mutableListOf(
                                    "!alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    12
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    12
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    12
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    12
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-h-on",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "backgroundColor",
                                    "#f0f0f0"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#000000"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-icon",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginLeft",
                                    15
                                ),
                                mutableListOf(
                                    "color",
                                    "#999999"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                ),
                                mutableListOf(
                                    "transform",
                                    "rotate(0deg)"
                                ),
                                mutableListOf(
                                    "transitionDuration",
                                    0
                                ),
                                mutableListOf(
                                    "transitionProperty",
                                    "transform"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-panel-icon-on",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(180deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-navigate-item",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "display",
                                    "flex"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "backgroundColor",
                                    "#FFFFFF"
                                ),
                                mutableListOf(
                                    "borderTopStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderTopColor",
                                    "#f0f0f0"
                                ),
                                mutableListOf(
                                    "borderTopWidth",
                                    1
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    12
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    12
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    12
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    12
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "space-between"
                                ),
                                mutableListOf(
                                    "backgroundColor:active",
                                    "#f8f8f8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-navigate-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "color",
                                    "#000000"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "uni-navigate-icon",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginLeft",
                                    15
                                ),
                                mutableListOf(
                                    "color",
                                    "#999999"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "fontWeight",
                                    "normal"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    8
                                ),
                                mutableListOf(
                                    "height",
                                    8
                                ),
                                mutableListOf(
                                    "borderTopWidth",
                                    2
                                ),
                                mutableListOf(
                                    "borderTopStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderTopColor",
                                    "#cccccc"
                                ),
                                mutableListOf(
                                    "borderLeftWidth",
                                    2
                                ),
                                mutableListOf(
                                    "borderLeftStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderLeftColor",
                                    "#cccccc"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow-right",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(135deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow-up",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(45deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "arrow-down",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "transform",
                                    "rotate(-135deg)"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "@TRANSITION",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "uni-panel-icon",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "duration",
                                    0
                                ),
                                mutableListOf(
                                    "property",
                                    "transform"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesTabBarAPIAPIClass = GenPagesTabBarAPIAPI::class;
val preloadPageUrl = "/pages/extUI/calendar/calendar";
open class GenPagesAPINavigatorNavigator : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesAPINavigatorNavigator): VNode? {
        val _component_page_head = resolveEasyComponent("page-head", GenComponentsPageHeadPageHeadClass);
        val _component_button = resolveComponent("button");
        return createElementVNode("view", null, mutableListOf(
            createVNode(_component_page_head, Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "title",
                    _ctx.title
                )
            )), null, 8, mutableListOf(
                "title"
            )),
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "uni-padding-wrap uni-common-mt"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "uni-btn-v"
                    )
                )), mutableListOf(
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "onClick",
                            _ctx.navigateTo
                        ),
                        mutableListOf(
                            "class",
                            "uni-btn"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "跳转新页面，并传递数据"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "onClick",
                            _ctx.navigateBack
                        ),
                        mutableListOf(
                            "class",
                            "uni-btn"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "返回上一页"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "onClick",
                            _ctx.redirectTo
                        ),
                        mutableListOf(
                            "class",
                            "uni-btn"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "在当前页面打开"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createCommentVNode(" <button @tap=\"switchTab\"  class=\"uni-btn\">切换到模板选项卡</button> "),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "onClick",
                            _ctx.reLaunch
                        ),
                        mutableListOf(
                            "class",
                            "uni-btn"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "关闭所有页面，打开首页"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "onClick",
                            _ctx.customAnimation
                        ),
                        mutableListOf(
                            "class",
                            "uni-btn"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "使用自定义动画打开页面"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "onClick",
                            _ctx.preloadPage
                        ),
                        mutableListOf(
                            "class",
                            "uni-btn"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "预载复杂页面"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "onClick",
                            _ctx.unPreloadPage
                        ),
                        mutableListOf(
                            "class",
                            "uni-btn"
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "取消页面预载"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createCommentVNode(" <button @tap=\"navigateToPreloadPage\" class=\"uni-btn\">打开复杂页面</button> ")
                ))
            ))
        ));
    }
    open var title: String by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "title",
                "navigate"
            )
        ));
    }
    open var navigateTo = fun() {
        uni_navigateTo(UniNavigateToOptions(url = "/pages/API/navigator/new-page/new-uvue-page-1?data=Hello"));
    }
    ;
    open var navigateBack = fun() {
        uni_navigateBack(UniNavigateBackOptions(delta = 1));
    }
    ;
    open var redirectTo = fun() {
        uni_redirectTo(UniRedirectToOptions(url = "/pages/API/navigator/new-page/new-uvue-page-1?data=Hello"));
    }
    ;
    open var switchTab = fun() {
        uni_switchTab(UniSwitchTabOptions(url = "/pages/tabBar/template/template"));
    }
    ;
    open var reLaunch = fun() {
        uni_reLaunch(UniReLaunchOptions(url = "/pages/tabBar/component/component"));
    }
    ;
    open var customAnimation = fun() {
        uni_navigateTo(UniNavigateToOptions(url = "/pages/API/navigator/new-page/new-uvue-page-1?data=使用自定义动画打开页面", animationType = "slide-in-bottom", animationDuration = 200));
    }
    ;
    open var preloadPage = fun() {
        uni_showToast(UniShowToastOptions(icon = "none", title = "暂不支持"));
    }
    ;
    open var unPreloadPage = fun() {
        uni_showToast(UniShowToastOptions(icon = "none", title = "暂不支持"));
    }
    ;
    open var navigateToPreloadPage = fun() {
        uni_navigateTo(UniNavigateToOptions(url = preloadPageUrl));
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "common-page-head",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "35rpx"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "row"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    0
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    0
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    "40rpx"
                                ),
                                mutableListOf(
                                    "height",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "borderBottomWidth",
                                    "2rpx"
                                ),
                                mutableListOf(
                                    "borderBottomStyle",
                                    "solid"
                                ),
                                mutableListOf(
                                    "borderBottomColor",
                                    "#D8D8D8"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "common-page-head-title",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "lineHeight",
                                    "88rpx"
                                ),
                                mutableListOf(
                                    "fontSize",
                                    "30rpx"
                                ),
                                mutableListOf(
                                    "color",
                                    "#BEBEBE"
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesAPINavigatorNavigatorClass = GenPagesAPINavigatorNavigator::class;
open class State (
    open var colorIndex: Number,
    open var currentColor: String,
) : IUTSObject
open class StateReactiveObject : State, IUTSReactive<State> {
    override var __v_raw: State;
    constructor(__v_raw: State) : super(colorIndex = __v_raw.colorIndex, currentColor = __v_raw.currentColor) {
        this.__v_raw = __v_raw;
    }
    override var colorIndex: Number
        get() {
            return trackReactiveGet(__v_raw, "colorIndex", __v_raw.colorIndex);
        }
        set(value) {
            val oldValue = __v_raw.colorIndex;
            __v_raw.colorIndex = value;
            triggerReactiveSet(__v_raw, "colorIndex", oldValue, value);
        }
    override var currentColor: String
        get() {
            return trackReactiveGet(__v_raw, "currentColor", __v_raw.currentColor);
        }
        set(value) {
            val oldValue = __v_raw.currentColor;
            __v_raw.currentColor = value;
            triggerReactiveSet(__v_raw, "currentColor", oldValue, value);
        }
}
val colorList: MutableList<String> = mutableListOf(
    "#FF0000",
    "#00FF00",
    "#0000FF"
);
val state = reactive(State(colorIndex = 0, currentColor = colorList[0]));
val setColorIndex = fun(index: Number){
    state.colorIndex = index;
    state.currentColor = colorList[index];
}
;
open class GenPagesAPINavigatorNewPageNewUvuePage1 : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {
        onLoad(fun(e: Map<String, String>) {
            this.data = e["data"]!!;
        }
        , instance);
    }
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesAPINavigatorNewPageNewUvuePage1): VNode? {
        val _component_button = resolveComponent("button");
        return createElementVNode("view", Map<String, Any?>(mutableListOf(
            mutableListOf(
                "class",
                "root"
            )
        )), mutableListOf(
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "page-body"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "new-page__text-box"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__text"
                        )
                    )), "从上个页面接收到参数：" + toDisplayString(_ctx.data), 1)
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "new-page__color"
                    ),
                    mutableListOf(
                        "onClick",
                        _ctx.changeColor
                    ),
                    mutableListOf(
                        "style",
                        normalizeStyle(object : UTSJSONObject() {
                            var backgroundColor = _ctx.stateData.currentColor
                        })
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__color-text"
                        )
                    )), "点击改变颜色")
                ), 12, mutableListOf(
                    "onClick"
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "new-page__text-box"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__text"
                        )
                    )), "点击上方色块在页面之间进行通讯")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "new-page__button"
                    )
                )), mutableListOf(
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__button-item"
                        ),
                        mutableListOf(
                            "onClick",
                            _ctx.navToUvue
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "跳转UVUE页面"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    )),
                    createVNode(_component_button, Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__button-item"
                        ),
                        mutableListOf(
                            "onClick",
                            _ctx.navToVue
                        )
                    )), Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "default",
                            fun(): MutableList<Any> {
                                return mutableListOf(
                                    "跳转VUE页面"
                                );
                            }
                        ),
                        mutableListOf(
                            "_",
                            1
                        )
                    )), 8, mutableListOf(
                        "onClick"
                    ))
                ))
            ))
        ));
    }
    open var data: String by `$data`;
    open var stateData: State by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "data",
                ""
            ),
            mutableListOf(
                "stateData",
                state as State
            )
        ));
    }
    open var changeColor = fun() {
        setColorIndex(if (state.colorIndex > 1) {
            0;
        } else {
            state.colorIndex + 1;
        }
        );
    }
    ;
    open var navToUvue = fun() {
        uni_navigateTo(UniNavigateToOptions(url = "pages/API/navigator/new-page/new-uvue-page-2"));
    }
    ;
    open var navToVue = fun() {
        uni_showToast(UniShowToastOptions(icon = "none", title = "暂不支持"));
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "new-page__text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "color",
                                    "#666666"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "root",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "flexDirection",
                                    "column"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "page-body",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "flex",
                                    "1"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "column"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "flex-start"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    50
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__text-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    20
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    20
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    20
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__color",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    200
                                ),
                                mutableListOf(
                                    "height",
                                    100
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__color-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "color",
                                    "#FFFFFF"
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    30
                                ),
                                mutableListOf(
                                    "textAlign",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__button-item",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginTop",
                                    15
                                ),
                                mutableListOf(
                                    "width",
                                    300
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesAPINavigatorNewPageNewUvuePage1Class = GenPagesAPINavigatorNewPageNewUvuePage1::class;
open class GenPagesAPINavigatorNewPageNewUvuePage2 : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    @Suppress("UNUSED_PARAMETER")
    open fun render(_ctx: GenPagesAPINavigatorNewPageNewUvuePage2): VNode? {
        return createElementVNode("view", Map<String, Any?>(mutableListOf(
            mutableListOf(
                "class",
                "root"
            )
        )), mutableListOf(
            createElementVNode("view", Map<String, Any?>(mutableListOf(
                mutableListOf(
                    "class",
                    "page-body"
                )
            )), mutableListOf(
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "new-page__text-box"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__text"
                        )
                    )), "新UVUE页面2")
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "new-page__color"
                    ),
                    mutableListOf(
                        "onClick",
                        _ctx.setColor
                    ),
                    mutableListOf(
                        "style",
                        normalizeStyle(object : UTSJSONObject() {
                            var backgroundColor = _ctx.stateData.currentColor
                        })
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__color-text"
                        )
                    )), "点击改变颜色")
                ), 12, mutableListOf(
                    "onClick"
                )),
                createElementVNode("view", Map<String, Any?>(mutableListOf(
                    mutableListOf(
                        "class",
                        "new-page__text-box"
                    )
                )), mutableListOf(
                    createElementVNode("text", Map<String, Any?>(mutableListOf(
                        mutableListOf(
                            "class",
                            "new-page__text"
                        )
                    )), "点击上方色块在页面之间进行通讯")
                ))
            ))
        ));
    }
    open var data: String by `$data`;
    open var stateData: State by `$data`;
    override fun data(): Map<String, Any?> {
        return Map(mutableListOf(
            mutableListOf(
                "data",
                ""
            ),
            mutableListOf(
                "stateData",
                state as State
            )
        ));
    }
    open var setColor = fun() {
        setColorIndex(if (state.colorIndex > 1) {
            0;
        } else {
            state.colorIndex + 1;
        }
        );
    }
    ;
    companion object {
        var styles = normalizeCssStyles(mutableListOf(
            Map<String, Map<String, Map<String, Any>>>(mutableListOf(
                mutableListOf(
                    "new-page__text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "color",
                                    "#666666"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "root",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "flexDirection",
                                    "column"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "page-body",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "flex",
                                    "1"
                                ),
                                mutableListOf(
                                    "flexDirection",
                                    "column"
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "flex-start"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                ),
                                mutableListOf(
                                    "paddingTop",
                                    50
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__text-box",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "paddingTop",
                                    20
                                ),
                                mutableListOf(
                                    "paddingRight",
                                    20
                                ),
                                mutableListOf(
                                    "paddingBottom",
                                    20
                                ),
                                mutableListOf(
                                    "paddingLeft",
                                    20
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__color",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "width",
                                    200
                                ),
                                mutableListOf(
                                    "height",
                                    100
                                ),
                                mutableListOf(
                                    "justifyContent",
                                    "center"
                                ),
                                mutableListOf(
                                    "alignItems",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__color-text",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "fontSize",
                                    14
                                ),
                                mutableListOf(
                                    "color",
                                    "#FFFFFF"
                                ),
                                mutableListOf(
                                    "lineHeight",
                                    30
                                ),
                                mutableListOf(
                                    "textAlign",
                                    "center"
                                )
                            ))
                        )
                    ))
                ),
                mutableListOf(
                    "new-page__button-item",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "",
                            Map<String, Any>(mutableListOf(
                                mutableListOf(
                                    "marginTop",
                                    15
                                ),
                                mutableListOf(
                                    "width",
                                    300
                                )
                            ))
                        )
                    ))
                )
            ))
        ), GenAppStyles);
    }
}
val GenPagesAPINavigatorNewPageNewUvuePage2Class = GenPagesAPINavigatorNewPageNewUvuePage2::class;
val GenAppStyles1 = mutableListOf(
    Map<String, Map<String, Map<String, Any>>>(mutableListOf(
        mutableListOf(
            "uni-padding-wrap",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingTop",
                            0
                        ),
                        mutableListOf(
                            "paddingRight",
                            "30rpx"
                        ),
                        mutableListOf(
                            "paddingBottom",
                            0
                        ),
                        mutableListOf(
                            "paddingLeft",
                            "30rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-title",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingTop",
                            "20rpx"
                        ),
                        mutableListOf(
                            "paddingRight",
                            0
                        ),
                        mutableListOf(
                            "paddingBottom",
                            "20rpx"
                        ),
                        mutableListOf(
                            "paddingLeft",
                            0
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-title-text",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "fontSize",
                            "30rpx"
                        ),
                        mutableListOf(
                            "fontWeight",
                            "500"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-subtitle-text",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "marginTop",
                            "10rpx"
                        ),
                        mutableListOf(
                            "fontSize",
                            "24rpx"
                        ),
                        mutableListOf(
                            "color",
                            "#888888"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-common-mb",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "marginBottom",
                            "30rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-common-pb",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingBottom",
                            "30rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-common-pl",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingLeft",
                            "30rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-common-mt",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "marginTop",
                            "30rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-hello-text",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "color",
                            "#7A7E83"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-list",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "backgroundColor",
                            "#FFFFFF"
                        ),
                        mutableListOf(
                            "position",
                            "relative"
                        ),
                        mutableListOf(
                            "display",
                            "flex"
                        ),
                        mutableListOf(
                            "flexDirection",
                            "column"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-list-cell",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "position",
                            "relative"
                        ),
                        mutableListOf(
                            "display",
                            "flex"
                        ),
                        mutableListOf(
                            "flexDirection",
                            "row"
                        ),
                        mutableListOf(
                            "justifyContent",
                            "space-between"
                        ),
                        mutableListOf(
                            "alignItems",
                            "center"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-list-cell-hover",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "backgroundColor",
                            "#eeeeee"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-list-cell-pd",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingTop",
                            "22rpx"
                        ),
                        mutableListOf(
                            "paddingRight",
                            "30rpx"
                        ),
                        mutableListOf(
                            "paddingBottom",
                            "22rpx"
                        ),
                        mutableListOf(
                            "paddingLeft",
                            "30rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-list-cell-left",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "fontSize",
                            "28rpx"
                        ),
                        mutableListOf(
                            "paddingTop",
                            0
                        ),
                        mutableListOf(
                            "paddingRight",
                            "30rpx"
                        ),
                        mutableListOf(
                            "paddingBottom",
                            0
                        ),
                        mutableListOf(
                            "paddingLeft",
                            "30rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-list-cell-db",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "flex",
                            "1"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-list-cell-right",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "flex",
                            "1"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-label",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "width",
                            "210rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-input",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "height",
                            "50rpx"
                        ),
                        mutableListOf(
                            "paddingTop",
                            "15rpx"
                        ),
                        mutableListOf(
                            "paddingRight",
                            "25rpx"
                        ),
                        mutableListOf(
                            "paddingBottom",
                            "15rpx"
                        ),
                        mutableListOf(
                            "paddingLeft",
                            "25rpx"
                        ),
                        mutableListOf(
                            "lineHeight",
                            "50rpx"
                        ),
                        mutableListOf(
                            "fontSize",
                            "28rpx"
                        ),
                        mutableListOf(
                            "backgroundColor",
                            "#FFFFFF"
                        ),
                        mutableListOf(
                            "flex",
                            "1"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-flex",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "display",
                            "flex"
                        ),
                        mutableListOf(
                            "flexDirection",
                            "row"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-flex-item",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "flex",
                            "1"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-row",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "flexDirection",
                            "row"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-column",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "flexDirection",
                            "column"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-bg-red",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "backgroundColor",
                            "#F76260"
                        ),
                        mutableListOf(
                            "color",
                            "#FFFFFF"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-bg-green",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "backgroundColor",
                            "#09BB07"
                        ),
                        mutableListOf(
                            "color",
                            "#FFFFFF"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-bg-blue",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "backgroundColor",
                            "#007AFF"
                        ),
                        mutableListOf(
                            "color",
                            "#FFFFFF"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-btn-v",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingTop",
                            "10rpx"
                        ),
                        mutableListOf(
                            "paddingRight",
                            0
                        ),
                        mutableListOf(
                            "paddingBottom",
                            "10rpx"
                        ),
                        mutableListOf(
                            "paddingLeft",
                            0
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-btn",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "marginTop",
                            "20rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-link",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "color",
                            "#576B95"
                        ),
                        mutableListOf(
                            "fontSize",
                            "26rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-center",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "flexDirection",
                            "row"
                        ),
                        mutableListOf(
                            "justifyContent",
                            "center"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-textarea-box",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "backgroundColor",
                            "#ffffff"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "uni-textarea",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingTop",
                            "18rpx"
                        ),
                        mutableListOf(
                            "paddingRight",
                            "18rpx"
                        ),
                        mutableListOf(
                            "paddingBottom",
                            "18rpx"
                        ),
                        mutableListOf(
                            "paddingLeft",
                            "18rpx"
                        ),
                        mutableListOf(
                            "lineHeight",
                            1.6
                        ),
                        mutableListOf(
                            "fontSize",
                            "28rpx"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "common-page-head",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingTop",
                            "35rpx"
                        ),
                        mutableListOf(
                            "paddingRight",
                            "35rpx"
                        ),
                        mutableListOf(
                            "paddingBottom",
                            "35rpx"
                        ),
                        mutableListOf(
                            "paddingLeft",
                            "35rpx"
                        ),
                        mutableListOf(
                            "flexDirection",
                            "row"
                        ),
                        mutableListOf(
                            "justifyContent",
                            "center"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "common-page-head-title-box",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "paddingTop",
                            0
                        ),
                        mutableListOf(
                            "paddingRight",
                            "40rpx"
                        ),
                        mutableListOf(
                            "paddingBottom",
                            0
                        ),
                        mutableListOf(
                            "paddingLeft",
                            "40rpx"
                        ),
                        mutableListOf(
                            "height",
                            "88rpx"
                        ),
                        mutableListOf(
                            "borderBottomWidth",
                            "2rpx"
                        ),
                        mutableListOf(
                            "borderBottomStyle",
                            "solid"
                        ),
                        mutableListOf(
                            "borderBottomColor",
                            "#D8D8D8"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "common-page-head-title",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "lineHeight",
                            "88rpx"
                        ),
                        mutableListOf(
                            "fontSize",
                            "30rpx"
                        ),
                        mutableListOf(
                            "color",
                            "#BEBEBE"
                        )
                    ))
                )
            ))
        ),
        mutableListOf(
            "text",
            Map<String, Any>(mutableListOf(
                mutableListOf(
                    "",
                    Map<String, Any>(mutableListOf(
                        mutableListOf(
                            "color",
                            "#7A7E83"
                        ),
                        mutableListOf(
                            "fontSize",
                            14
                        ),
                        mutableListOf(
                            "lineHeight",
                            20
                        )
                    ))
                )
            ))
        )
    ))
);
val GenAppStyles = GenAppStyles1;
fun createApp(): UTSJSONObject {
    val app = createSSRApp(GenAppClass);
    app.component("page-head", GenComponentsPageHeadPageHeadClass);
    app.component("u-link", GenComponentsULinkULinkClass);
    return object : UTSJSONObject() {
        var app = app
    };
}
fun main(app: IApp) {
    defineAppConfig();
    definePageRoutes();
    (createApp()["app"] as VueApp).mount(app);
}
open class UniAppConfig : AppConfig {
    override var name: String = "hello-uniapp x";
    override var appid: String = "__UNI__4517034";
    override var versionName: String = "1.0.0";
    override var versionCode: String = "100";
    constructor(){}
}
fun definePageRoutes() {
    __uniRoutes.push(PageRoute(path = "pages/tabBar/component/component", component = GenPagesTabBarComponentComponentClass, meta = PageMeta(isQuit = true), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "内置组件"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/view/view", component = GenPagesComponentViewViewClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "view"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/scroll-view/scroll-view", component = GenPagesComponentScrollViewScrollViewClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "scroll-view"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/text/text", component = GenPagesComponentTextTextClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "text"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/progress/progress", component = GenPagesComponentProgressProgressClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "progress"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/button/button", component = GenPagesComponentButtonButtonClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "button"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/radio/radio", component = GenPagesComponentRadioRadioClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "radio"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/checkbox/checkbox", component = GenPagesComponentCheckboxCheckboxClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "checkbox"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/input/input", component = GenPagesComponentInputInputClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "input"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/textarea/textarea", component = GenPagesComponentTextareaTextareaClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "textarea"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/component/image/image", component = GenPagesComponentImageImageClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "image"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/tabBar/API/API", component = GenPagesTabBarAPIAPIClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "接口"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/API/navigator/navigator", component = GenPagesAPINavigatorNavigatorClass, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "页面跳转"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/API/navigator/new-page/new-uvue-page-1", component = GenPagesAPINavigatorNewPageNewUvuePage1Class, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "新UVUE页面1"
        )
    ))));
    __uniRoutes.push(PageRoute(path = "pages/API/navigator/new-page/new-uvue-page-2", component = GenPagesAPINavigatorNewPageNewUvuePage2Class, meta = PageMeta(isQuit = false), style = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTitleText",
            "新UVUE页面2"
        )
    ))));
}
fun defineAppConfig() {
    __uniConfig.entryPagePath = "/pages/tabBar/component/component";
    __uniConfig.globalStyle = Map<String, Any>(mutableListOf(
        mutableListOf(
            "navigationBarTextStyle",
            "black"
        ),
        mutableListOf(
            "navigationBarTitleText",
            "uni-app"
        ),
        mutableListOf(
            "navigationBarBackgroundColor",
            "#F8F8F8"
        ),
        mutableListOf(
            "backgroundColor",
            "#F8F8F8"
        )
    ));
    __uniConfig.tabBar = null;
}
