<template>
	
	<view>
		<cu-custom :bgImage="'/static/header_bg.png'">
			<block slot="content">
				CRM
			</block>
		</cu-custom>
		<fui-grid :gridData="cuIconList"></fui-grid>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				销售简报
			</view>
			<view class="action">
				本月<text class="cuIcon-unfold"></text>
			</view>
		</view>
		<fui-grid :gridCol="2" :gridMode="'col'" :gridData="jianbaoList"></fui-grid>

	</view>
	
</template>

<script>
	
	import fuiGrid from '@/components/fui-grid/fui-grid.vue'  
	export default {
		components:{
			fuiGrid
		},
		data() {
			return {
				gridBorder:false,
				jianbaoList:[{
					cuIcon: 'kehu',
					color: 'red',
					name: '5个',
					subName: '新增客户',
				}, {
					cuIcon: 'lianxiren',
					color: 'orange',
					name: '10个',
					subName: '新增联系人'
				}, {
					cuIcon: 'shangji',
					color: 'orange',
					name: '1个',
					subName: '新增商机'
				}, {
					cuIcon: 'kehu',
					color: 'orange',
					name: '0个',
					subName: '阶段变化商机'
				}, {
					cuIcon: 'kehu',
					color: 'orange',
					name: '0个',
					subName: '新增合同'
				}, {
					cuIcon: 'hetong',
					color: 'orange',
					name: '0个',
					subName: '新增更近记录'
				}],
				cuIconList: [{
					cuIcon: 'xiansuo',
					color: 'red',
					name: '线索',
					url: '/pages/crm/home'
				}, {
					cuIcon: 'kehu',
					color: 'orange',
					name: '客户',
					url: '/pages/crm/customer/list'
				}, {
					cuIcon: 'gonghai',
					color: 'yellow',
					name: '公海'
				}, {
					cuIcon: 'lianxiren',
					color: 'olive',
					name: '联系人',
					url: '/pages/crm/contact/list'
				}, {
					cuIcon: 'shangji',
					color: 'cyan',
					name: '商机'
				}, {
					cuIcon: 'hetong',
					color: 'blue',
					name: '合同'
				}, {
					cuIcon: 'benqihuikuan',
					color: 'purple',
					name: '回款'
				}, {
					cuIcon: 'product',
					color: 'mauve',
					name: '产品'
				}, {
					cuIcon: 'product',
					color: 'mauve',
					name: '报表',
					url: '/pages/crm/report/report'
				}]
			};
		}
	}
</script>

<style lang="scss">
	.page {
		height: 100vh;
	}
</style>
