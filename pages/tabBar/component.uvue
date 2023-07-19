<template>
	<view class="uni-container">
		<view class="uni-header-logo">
			<image class="uni-header-image" src="/static/componentIndex.png"></image>
		</view>
		<view class="uni-hello-text">
			<text class="hello-text">uni-app内置组件，展示样式仅供参考，文档详见：</text>
			<u-link :href="'https://uniapp.dcloud.io/component/'" :text="'https://uniapp.dcloud.io/component/'"
				:inWhiteList="true"></u-link>
		</view>
		<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
			<view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''" @click="triggerCollapse(index, item)">
				<text class="uni-panel-text" :class="item.enable == false ? 'text-disabled' : ''">{{item.name}}</text>
				<image :src="item.pages.length > 0 ? item.open ? arrowUpIcon : arrowDownIcon : arrowRightIcon"
					class="uni-icon"></image>
			</view>
			<view class="uni-panel-c" v-if="item.open">
				<view class="uni-navigate-item" v-for="(page,key) in item.pages" :key="key" @click="goDetailPage(page)">
					<text class="uni-navigate-text"
						:class="page.enable == false ? 'text-disabled' : ''">{{page.name}}</text>
					<image :src="arrowRightIcon" class="uni-icon"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	type Page = {
		name : string,
		enable ?: boolean,
		url ?: string
	}
	type ListItem = {
		id : string,
		name : string,
		open : boolean,
		pages : Page[],
		url ?: string,
		enable ?: boolean
	}
	export default {
		data() {
			return {
				list: [{
					id: 'view',
					name: '视图容器',
					open: false,
					pages: [
						{
							name: 'view',
						},
						{
							name: 'scroll-view',
						},
						{
							name: 'swiper',
						},
						/*
						{
							name: 'movable-view',
							enable: false
						},
						{
							name: 'cover-view',
							enable: false
						},
						*/
						{
							name: 'list（新闻）',
							url: "/pages/component/list/list",
						},
						{
							name: 'list',
							url: "/pages/component/long-list/long-list",
						}
					] as Page[]
				}, {
					id: 'content',
					name: '基础内容',
					open: false,
					pages: [
						{
							name: 'text',
						},
						{
							name: 'rich-text',
							enable: false
						},
						{
							name: 'progress',
						}
					] as Page[]
				}, {
					id: 'form',
					name: '表单组件',
					open: false,
					pages: [
						{
							name: 'button',
						},
						{
							name: 'checkbox',
						},
						/* {
							name: 'form',
							enable: false
						}, */
						{
							name: 'input',
							/* }, {
								name: 'label',
								enable: false
							}, {
								name: 'picker',
								enable: false */
						}, {
							name: 'picker-view'
						}, {
							name: 'radio',
						}, {
							name: 'slider',
						}, {
							name: 'slider-100',
						}, {
							name: 'switch',
						}, {
							name: 'textarea',
						},
						/*
						{
							name: 'editor',
							enable: false
						},
						*/
					] as Page[]
					/* }, {
						id: 'nav',
						name: '导航',
						open: false,
						pages: [{
							name: 'navigator',
							enable: false
						}] as Page[] */
				}, {
					id: 'media',
					name: '媒体组件',
					open: false,
					pages: [{
						name: 'image',
						enable: true
					}, {
						name: 'video',
						enable: true
					}, {
						name: 'animation-view',
						enable: false
					}] as Page[]
				},
				/*
				{
					id: 'map',
					name: '地图',
					open: false,
					pages: [
						{
							name: 'map',
							enable: false
						}
					] as Page[]
				},
				{
					id: 'canvas',
					name: '画布',
					open: false,
					pages: [
						{
							name: 'canvas'
						}
					] as Page[]
				},
				*/
				{
					id: 'web-view',
					name: '网页',
					open: false,
					pages: [
						{
							name: '网络网页',
							enable: true,
							url: '/pages/component/web-view/web-view'
						},
						{
							name: '本地网页',
							enable: true,
							url: '/pages/component/web-view-local/web-view-local'
						}
					] as Page[]
				},
				/*
				{
					id: 'ad',
					url: 'ad',
					name: 'AD组件',
					enable: false,
					open: false,
					pages: [] as Page[]
				}
				*/
				{
					id: "general-attr-event",
					name: "通用属性和事件",
					open: false,
					pages: [
						{
							name: "通用属性",
							url: "general-attr",
							enable: false
						},{
							name: "通用事件",
							url: "general-event",
							enable: false
						},
					] as Page[],
				},
				] as ListItem[],
				arrowUpIcon: '/static/icons/arrow-up.png',
				arrowDownIcon: '/static/icons/arrow-down.png',
				arrowRightIcon: '/static/icons/arrow-right.png',
			}
		},
		methods: {
			triggerCollapse(index ?: number, item : ListItem) {
				if (item.pages.length == 0) {
					const page : Page = {
						name: item.name,
						enable: item.enable,
						url: item.url
					}
					this.goDetailPage(page);
					return;
				}
				for (var i = 0; i < this.list.length; ++i) {
					if (index == i) {
						this.list[i].open = !this.list[i].open;
					} else {
						this.list[i].open = false;
					}
				}
			},
			goDetailPage(e : Page) {
				if (e.enable == false) {
					uni.showToast({
						title: '暂不支持',
						icon: 'none'
					})
					return
				}
				const url = e.url != null ? e.url! : `/pages/component/${e.name}/${e.name}`
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>
	@import '../../common/uni-uvue.css';
</style>