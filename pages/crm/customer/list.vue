<template>
	<scroll-view scroll-y class="page">
		<cu-custom :isBack="true" :bgImage="'/static/header_bg.png'">
			<block slot="backText">返回</block>
			<block slot="content">
				客户
			</block>
			<block slot="right">
				<view class="action">
					<text class="cuIcon-search text-grey"></text>
					<text class="cuIcon-roundadd text-red"></text>
				</view>
			</block>
		</cu-custom>
		<fui-list :isArrow="false" :listData="todoListData"></fui-list>
		
		<view class="cu-tabbar-height"></view>
	</scroll-view>
</template>

<script>
	
	import fuiList from '@/components/fui-list/fui-list.vue'  
	export default {
		components:{
			fuiList
		},
		data() {
			return {
				todoListData: [{url:'', icon:'', text:'回款合同审批',subText:'2018-09-09'},
								{url:'',icon:'', text:'回款确认',subText:'2019-01-04'}],
			};
		}
	}
</script>

<style lang="scss">

</style>
