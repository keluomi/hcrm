<template>
		<scroll-view scroll-y class="page">
			<cu-custom :bgImage="'/static/header_bg.png'">
				<block slot="content">
					我的
				</block>
			</cu-custom>
			<view  style="background-image: url('/static/header_bg.png') ;">
				<view class="grid margin-bottom text-center"  :class="'col-3'">
					<view class="padding">
						<view class="cu-avatar round lg margin-left"  :style="[{ backgroundImage:'url(' + userInfo.avatar + ')' }]">
							<view class="cu-tag badge" :class="userInfo.gender==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
						</view>
					</view>
					<view class="padding">
						
					</view>
					<view class="padding">
						
					</view>
				</view>
			</view>
			
			<view class="nav-list bg-white">
				<navigator hover-class="none"  class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show 1s 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<!-- <view class="nav-name">{{item.name}}</view> -->
					<!-- <text :class="'cuIcon-' + item.cuIcon"></text> -->
				</navigator>
			</view>

			<fui-list :listData="settingList"></fui-list>
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
</template>

<script>
	import fuiGrid from '@/components/fui-grid/fui-grid.vue'  
	import fuiList from '@/components/fui-list/fui-list.vue'  

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
				
				settingList:[{icon:'log',url:'', text:'账号与安全'},
							 {icon:'phone',url:'', text:'专属服务热线'},
							 {icon:'notice',url:'', text:'系统通知'},
							 {icon:'settingsfill',url:'', text:'系统设置'},
							 {icon:'info',url:'', text:'关于'}],
							
				elements: [{
						title: '企业通讯录',
						name: 'bar',
						color: 'olive',
						cuIcon: 'vipcard'
					},
					{
						title: '我的日志 ',
						name: 'nav',
						color: 'grey',
						cuIcon: 'formfill'
					},
					{
						title: '我发起的审批',
						name: 'list',
						color: 'green',
						cuIcon: 'list'
					},
					{
						title: '我的销售',
						name: 'card',
						color: 'cyan',
						cuIcon: 'newsfill'
					}]
			};
		}
	}
</script>

<style lang="scss">


</style>
