<template>
	<view class="cu-list menu" :class="[isBorder?'sm-border':'',isCard?'card-menu margin-top':'']">
		<view class="cu-item" v-for="(item,index) in listData" :key="index" :class="isArrow?'arrow':''">
			<navigator class="content flex" hover-class="none" :url="item.url" :open-type="item.openType?item.openType:'navigate'">
				<text v-if="item.icon" :class="['cuIcon','cuIcon-'+item.icon, item.color?'text-'+item.color:'text-'+'jianniaolan']"></text>
				<text class="flex-twice">{{item.text}}</text>
				<text class="flex-sub"  v-if="item.subText" >{{item.subText}}</text>
			</navigator>
		</view>
	</view>

</template>

<script>
	export default {
		props:{
			
			isBorder: {
				type: Boolean,
				default: false
			},
			isArrow: {
				type: Boolean,
				default: true
			},
			isCard: {
				type: Boolean,
				default: false
			},
			listData: {
				type: Array,
				default: function(){
					return [];
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
