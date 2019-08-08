<template>
	<view class="page bg-light-gray">
		<cu-custom :isBack="true" :bgImage="'/static/header_bg.png'">
			<block slot="backText">返回</block>
			<block slot="content">
				联系人详情
			</block>
		</cu-custom>
	<view class="cu-card case no-card" >
		<view class="cu-item shadow">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">张文杰</view>
						<view class="text-gray text-sm flex justify-between">
								13521783226
						</view>
					</view>
					<view class="action">
						<text class="cuIcon-right text-jianniaolan"></text>
					</view>
				</view>
				
			</view>
		</view>
	</view>
	    
		<scroll-view scroll-x class="bg-white nav margin-top">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="'0'==TabCur?'text-jianniaolan cur':''"  @tap="tabSelect" :data-id="0">
					跟进记录
				</view>
				<view class="cu-item flex-sub" :class="'1'==TabCur?'text-jianniaolan cur':''"  @tap="tabSelect" :data-id="1">
					基本信息
				</view>
				<view class="cu-item flex-sub" :class="'2'==TabCur?'text-jianniaolan cur':''"  @tap="tabSelect" :data-id="2">
					相关信息
				</view>
			</view>
			</scroll-view>
			<view v-if="TabCur == '0'">

				<view class="cu-timeline">
					<view class="cu-time ">06-17</view>
					<view class="cu-item text-green ">
						<view class="content bg-blue">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">上午</view>
								<view class="cu-tag line-cyan">10:00</view>
							</view>
							<text class="padding">跟进类型：打电话</text> 
							<view class="margin-top">第一次通过网络找到电话号码，初步通过电话沟通；效果一般，需要进一步跟进</view>
						</view>
					</view>
					
					<view class="cu-time ">07-17</view>
					<view class="cu-item text-green ">
						<view class="content bg-blue">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">上午</view>
								<view class="cu-tag line-cyan">10:00</view>
							</view>
							<text class="padding">跟进类型：发邮件</text> 
							<view class="margin-top">把项目相关资料通过邮件的方式发送给对方，对方回复信息感觉还比较满意；抽时间见面进一步沟通</view>
						</view>
					</view>
					
					<view class="cu-time ">08-08</view>
					<view class="cu-item text-green ">
						<view class="content bg-blue">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">下午</view>
								<view class="cu-tag line-cyan">3:00</view>
							</view>
							<text class="padding">跟进类型：见面谈</text> 
							<view class="margin-top">通过沟通后，跟客户约好去一家咖啡厅面谈，面谈的效果很不错，客户说回去跟领导提申请，等待他的号消息</view>
						</view>
					</view>
				</view>
			</view>

			<view v-if="TabCur == '1'" class="bg-light-gray">
				
				<view class="cu-bar bg-light-gray solid-bottom">
					<view class="action">
						<text class="cuIcon-form text-jianniaolan"></text> 基本信息
					</view>
				</view>
				
				<form>
					<view class="cu-form-group">
						<view class="title">姓名</view>
						<view>张文杰</view>
					</view>
					<view class="cu-form-group">
						<view class="title">客户名称</view>
						<view>张文杰</view>
					</view>
					<view class="cu-form-group">
						<view class="title">手机</view>
						<view>13561782228</view>
					</view>
					<view class="cu-form-group">
						<view class="title">电话</view>
						<view>010-55882449</view>
					</view>
					<view class="cu-form-group">
						<view class="title">电子邮件</view>
						<view>zhangsan@fullbloom.cn</view>
					</view>
					<view class="cu-form-group">
						<view class="title">是否关键决策人</view>
						<view>是</view>
					</view>
					<view class="cu-form-group">
						<view class="title">职务</view>
						<view>大客户经理</view>
					</view>
					<view class="cu-form-group">
						<view class="title">性别</view>
						<view>男</view>
					</view>
					<view class="cu-form-group">
						<view class="title">地址</view>
						<view>北京市朝阳区国贸三期</view>
					</view>
				</form>
			</view>
			
			<view v-if="TabCur == '2'" >
				<view class="cu-bar bg-light-gray solid-bottom" >
					<view class="action">
						<text class="cuIcon-shangji text-jianniaolan"></text> 商机
					</view>
					<view class="action">
						<text class="cuIcon-add text-jianniaolan"></text>
					</view>
					
				</view>
				<shangji-list :isArrow="false" :listData="shangjiDataList"></shangji-list>
				
				<view class="cu-bar bg-light-gray solid-bottom" >
					<view class="action">
						<text class="cuIcon-attentionfavor text-jianniaolan"></text> 附件
					</view>
					<view class="action">
						<text class="cuIcon-add text-jianniaolan"></text>
					</view>
					
				</view>
				<file-list :isArrow="false" :listData="fileDataList"></file-list>
				
				<view class="cu-bar bg-light-gray solid-bottom" >
					<view class="action">
						<text class="cuIcon-edit text-jianniaolan"></text> 操作记录
					</view>
					<view class="action">
						<text class="cuIcon-add text-jianniaolan"></text>
					</view>
					
				</view>
				<recode-list :isArrow="false" :listData="recodeDataList"></recode-list>
			</view>

			

		<view class="cu-bar bg-white shadow foot">
			<view class="cu-bar border-custom">
				<view class="action">
					<text class="cuIcon-text text-jianniaolan"></text>写进度
				</view>
			</view>
			<view class="cu-bar" @click="callPhone">
				<view class="action">
					<text class="cuIcon-phone text-jianniaolan" ></text>打电话
				</view>
			</view>
			<view class="cu-bar"  @tap="showModal" data-target="bottomModal">
				<view class="action">
					<text class="cuIcon-more text-jianniaolan"></text>更多
				</view>
			</view>
			
		</view>
		<view class="cu-tabbar-height"></view>
		
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="padding-xl">
					<button class="cu-btn   block line-jianniaolan  lg">
						转移
					</button>
						
					<button class="cu-btn block  line-jianniaolan lg margin-top">
						 删除
					</button>
						
					<button class="cu-btn block lg margin-top" @tap="hideModal">
						取消
					</button>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	import fuiList from '@/components/fui-list/fui-list.vue'  
	export default {
		components:{
			shangjiList:fuiList,
			fileList:fuiList,
			recodeList:fuiList,
		},
		data() {
			return {
				TabCur: 0,
				modalName:null,
				scrollLeft: 0,
				shangjiDataList: [{url:'', icon:'', text:'通过基金经理人会议认识了很多的基金管理人',subText:'2018-09-01'}],
				fileDataList: [{url:'', icon:'', text:'张三天弘基金认购合同',subText:'2019-05-09'}],
				recodeDataList: [{url:'', icon:'', text:'去国贸拜访客户',subText:'2019-06-09'}]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			callPhone(){
				uni.makePhoneCall({
				    phoneNumber: '114' 
				});
			},
			showModal(e){
					this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e){
					this.modalName = ''
			}
		}
	}
</script>

<style lang="scss">

</style>
