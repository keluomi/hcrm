<template>
		<scroll-view scroll-y class="page">
			<cu-custom :bgImage="'/static/header_bg.png'">
				<block slot="content">
					我的
				</block>
			</cu-custom>
			<view class="bg-jiannianlan">
				<view class="grid margin-bottom text-center"  :class="'col-3'">
					<view class="padding" :class="'bg-jiannianlan'">
						<view class="cu-avatar round lg margin-left"  :style="[{ backgroundImage:'url(' + userInfo.avatar + ')' }]">
							<view class="cu-tag badge" :class="userInfo.gender==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
						</view>
					</view>
					<view class="padding" :class="'bg-blue'">
						
					</view>
					<view class="padding" :class="'bg-blue'">
						
					</view>
				</view>
			</view>
			
			<fui-grid :gridData="cuIconList" :gridCol="3"></fui-grid>
			<fui-list :listData="settingList"></fui-list>
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
</template>

<script>
	import fuiGrid from '../../components/fui-grid/fui-grid.vue'  
	import fuiList from '../../components/fui-list/fui-list.vue'  
	export default {
		
		components:{
			fuiGrid,
			fuiList
		},
		data() {
			return {
				userInfo:{
					gender:0,
					avatar:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				
				cuIconList: [{
					cuIcon: 'tongxunlu',
					color: 'red',
					name: '企业通讯录'
				}, {
					cuIcon: 'log',
					color: 'orange',
					name: '我的日志'
				}, {
					cuIcon: 'shenpi',
					color: 'yellow',
					name: '我发起的审批'
				}],
				
				settingList:[{icon:'phone',url:'', text:'专属服务热线'},
							{icon:'settingsfill',url:'', text:'系统设置'}]
			};
		}
	}
</script>

<style lang="scss">

</style>
