<template>
		
		<scroll-view scroll-y class="page">
			<cu-custom :bgImage="'/static/header_bg.png'">
				<block slot="content">
					办公 
				</block>
			</cu-custom>

			<fui-grid :gridData="cuIconList"></fui-grid>
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-task text-jianniaolan"></text> 今日任务
				</view>
				<view class="action">
					<text class="cuIcon-right text-jianniaolan"></text>
				</view>
			</view>
			<my-task-list :isArrow="false" :listData="taskListData"></my-task-list>
			
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-richeng text-jianniaolan"></text> 今日日程
				</view>
				<view class="action">
					<text class="cuIcon-right text-jianniaolan"></text>
				</view>
			</view>
			<today-trip-list :isArrow="false" :listData="todayTripData"></today-trip-list>
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-shenpi text-jianniaolan"></text> 待审批
				</view>
				<view class="action">
					<text class="cuIcon-right text-jianniaolan"></text>

				</view>
			</view>
			<today-trip-list :isArrow="false" :listData="todoListData"></today-trip-list>
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
		
</template>

<script>
	import fuiGrid from '@/components/fui-grid/fui-grid.vue'  
	import fuiList from '@/components/fui-list/fui-list.vue'  
	export default {
		components:{
			fuiGrid,
			myTaskList: fuiList,
			todayTripList: fuiList,
			todoTask: fuiList
		},
		data() {
			return {
				isArrow: false,
				taskListData: [{url:'', icon:'', text:'去国贸拜访客户',subText:'2018-09-09'}],
				todayTripData: [{url:'', icon:'', text:'今天下午一点去三元桥',subText:'2018-09-09'},
								{url:'',icon:'', text:'今天下午4点去银行',subText:'2019-01-04'}],
				todoListData: [{url:'', icon:'', text:'回款合同审批',subText:'2018-09-09'},
								{url:'',icon:'', text:'回款确认',subText:'2019-01-04'}],
				cuIconList: [{
					cuIcon: 'log',
					color: 'red',
					name: '日志'
				}, {
					cuIcon: 'shenpi',
					color: 'orange',
					name: '审批'
				}, {
					cuIcon: 'richeng',
					color: 'yellow',
					name: '日程'
				}, {
					cuIcon: 'task',
					color: 'olive',
					name: '任务'
				}, {
					cuIcon: 'gonggao',
					color: 'cyan',
					name: '公告'
				}, {
					cuIcon: 'hetong',
					color: 'blue',
					name: '企业通讯录'
				}]
			};
		}
	}
</script>

<style lang="scss">

</style>
