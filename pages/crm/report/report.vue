<template>
	<view>
		<cu-custom :isBack="true" :bgImage="'/static/header_bg.png'">
			<block slot="backText">返回</block>
			<block slot="content">
				CRM
			</block>
		</cu-custom>
		
		<view class="nav-list">
			<navigator hover-class="none"  class="nav-li" navigateTo :class="'bg-'+item.color"
			 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
				<view class="nav-title">{{item.title}}</view>
				<view class="nav-name">{{item.name}}</view>
				<text :class="'cuIcon-' + item.cuIcon"></text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
