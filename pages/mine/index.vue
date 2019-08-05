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


				<view class="qiun-charts3">
					<!--#ifndef MP-ALIPAY -->
					<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3"></canvas>
					<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" style="margin-left: 250upx;"></canvas>
					<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 500upx;"></canvas>
					<!--#endif-->
					
				</view>			
			<fui-list :listData="settingList"></fui-list>
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
</template>

<script>
	import fuiGrid from '../../components/fui-grid/fui-grid.vue'  
	import fuiList from '../../components/fui-list/fui-list.vue'  
	import uCharts from '../../components/u-charts/u-charts.js';
	
	var _self;
	var canvaArcbar1;
	
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
				
				
				settingList:[{icon:'log',url:'', text:'我的日志'},
							 {icon:'shenpi',url:'', text:'我发起的审批'},
							 {icon:'phone',url:'', text:'专属服务热线'},
							{icon:'settingsfill',url:'', text:'系统设置'}],
							
				cWidth3:'',//圆弧进度图
				cHeight3:'',//圆弧进度图
				arcbarWidth:'',//圆弧进度图，进度条宽度,此设置可使各端宽度一致
				pixelRatio:1
			};
		},
		methods: {
			showArcbar(canvasId,chartData){
				canvaArcbar1=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize:11,
					legend:{show:false},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3*_self.pixelRatio,
					height: _self.cHeight3*_self.pixelRatio,
					dataLabel: true,
					title: {
						name: chartData.series[0].data,
						color: chartData.series[0].color,
						fontSize: 20*_self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,//这里您可以直接给任意字符串
						color: '#666666',
						fontSize: 11*_self.pixelRatio
					},
					extra: {
						arcbar:{
							type:'circle',//整圆类型进度条图
							width: _self.arcbarWidth*_self.pixelRatio,//圆弧的宽度
							startAngle:0.5//整圆类型只需配置起始角度即可
						}
					}
				});
				
			},
			onLoad() {
				_self = this;
				this.cWidth3=uni.upx2px(200);//这里要与样式的宽高对应
				this.cHeight3=uni.upx2px(200);//这里要与样式的宽高对应
				this.arcbarWidth=uni.upx2px(10);
				
				let data1 = {
				  "series": [{
					"name": "客户数",
					"data": 8000,
					"color": "#2fc77b"
				  }]
				};
				
				let data2 = {
				  "series": [{
					"name": "客户转换率",
					"data": '65%',
					"color": "#6644cc"
				  }]
				};
				let data3 = {
				  "series": [{
					"name": "销售额",
					"data": '400万',
					"color": "#ee2746"
				  }]
				};

				
				_self.showArcbar("canvasArcbar1",data1);
				_self.showArcbar("canvasArcbar2",data2);
				_self.showArcbar("canvasArcbar3",data3);
				}
			}
	}
</script>

<style lang="scss">
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts3 {
		width: 750upx;
		height: 250upx;
		background-color: #FFFFFF;
		position: relative;
	}

	.charts3 {
		position: absolute;
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}
</style>
