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
					<text class="cuIcon-title text-orange"></text> 我的任务
				</view>
			</view>
			<my-task-list :listData="taskListData" :isArrow="isArrow"></my-task-list>
			
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 今日日程
				</view>
			</view>
			<today-trip-list :listData="todayTripData"></today-trip-list>
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 今日日程
				</view>
			</view>
			<today-trip-list :listData="todayTripData"></today-trip-list>
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
		
</template>

<script>
	import fuiGrid from '../../components/fui-grid/fui-grid.vue'  
	import fuiList from '../../components/fui-list/fui-list.vue'  
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
				taskListData: [{url:'', text:'今日需联系客户'},
							{url:'', text:'分配给我的线索'},
							{url:'', text:'分配给我的客户'},
							{url:'', text:'待审核合同'},
							{url:'', text:'待审核回款'},
							{url:'', text:'待汇款提醒'},
							{url:'', text:'即将到期的合同'}],
				todayTripData: [],
				todoListData: [],
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
					name: '合同'
				}]
			};
		}
	}
</script>

<style lang="scss">

</style>
