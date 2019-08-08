<template>
	<scroll-view scroll-y class="page">
		<cu-custom :bgImage="'/static/header_bg.png'">
			<block slot="content">
				办公
			</block>
		</cu-custom>
		
		<fui-list :listData="listData"></fui-list>
		<view class="cu-tabbar-height"></view>
	</view>
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
				listData: [{icon:'lianxiren',url:'', text:'今日需联系客户'},
							{icon:'xiansuo',url:'',  text:'分配给我的线索'},
							{icon:'kehu',url:'', text:'分配给我的客户'},
							{icon:'hetong',url:'', text:'待审核合同'},
							{icon:'sponsor',url:'', text:'待审核回款'},
							{icon:'notice',url:'', text:'待汇款提醒'},
							{icon:'hetong',url:'', text:'即将到期的合同'}]
			};
		}
	}
</script>

<style lang="scss">

</style>
