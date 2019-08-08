<template>
	<view>
		<cu-custom :isBack="true" :bgImage="'/static/header_bg.png'">
			<block slot="backText">返回</block>
			<block slot="content">
				写进度
			</block>
			<block slot="right">
				<view class="action">
					保存
				</view>
			</block>
		</cu-custom>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">记录类型</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">日期选择</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">跟进内容</view>
				<textarea maxlength="-1" class="border" :disabled="modalName!=null" @input="textareaBInput" placeholder="请输入跟进内容"></textarea>
			</view>
		</form>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				date: '2018-12-25',
				modalName: null,
				picker: ['打电话', '发邮件', '发短信', '见面拜访', '活动'],
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
		}
	}
</script>

<style lang="scss">

</style>
