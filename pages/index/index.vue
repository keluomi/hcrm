<template>
	<view>
		<scroll-view scroll-y>
			
			<todo-index v-if="PageCur=='todoIndex'"></todo-index>
			<crm-index v-if="PageCur=='crmIndex'"></crm-index>
			<oa-index v-if="PageCur=='oaIndex'"></oa-index>
			<mine-index v-if="PageCur=='mineIndex'"></mine-index>
			
		</scroll-view>


		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="todoIndex">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/todo' + [PageCur=='todoIndex'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='todoIndex'?'text-jianniaolan':'text-gray'">待办</view>
			</view>
			<view class="action" @click="NavChange" data-cur="crmIndex">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/crm' + [PageCur == 'crmIndex'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='crmIndex'?'text-jianniaolan':'text-gray'">CRM</view>
			</view>
			<view class="action" @click="NavChange" data-cur="oaIndex">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/oa' + [PageCur == 'oaIndex'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='oaIndex'?'text-jianniaolan':'text-gray'">办公</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="mineIndex">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mine' + [PageCur == 'mineIndex'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mineIndex'?'text-jianniaolan':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import todoIndex from '../todo/index.vue' 
	import crmIndex from '../crm/index.vue' 
	import oaIndex from '../oa/index.vue' 
	import mineIndex from '../mine/index.vue' 
	
	export default {
		components:{
			todoIndex,
			crmIndex,
			oaIndex,
			mineIndex
			
		},
		data() {
		return {
				PageCur: 'crmIndex',
				currentTitle: '待办'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				
				
			}
		}
	}
</script>

<style>

</style>
