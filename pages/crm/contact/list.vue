<template>
	<view>
		<cu-custom :isBack="true" :bgImage="'/static/header_bg.png'">
			<block slot="backText">返回</block>
			<block slot="content">
				联系人
			</block>
		</cu-custom>
		<view class="cu-bar bg-white search fixed" :style="[{top:CustomBar + 'px'}]">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
					</view>
					<view class="action">
						<button class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
					</view>
				</view>
				<scroll-view scroll-y class="indexes" :scroll-into-view="'indexes-'+ listCurID" :style="[{height:'calc(100vh - '+ CustomBar + 'px - 50px)'}]"
				 :scroll-with-animation="true" :enable-back-to-top="true">
					<block v-for="(item,index) in list" :key="index">
						<view v-if="item.personList.length>0" :class="'indexItem-' + item.name" :id="'indexes-' + item.name" :data-index="item.name">
							<view class="padding">{{item.name}}</view>
							<navigator  hover-class="none" :url="'/pages/crm/contact/detail/detail'" :open-type="'navigate'">
							<view class="cu-list menu-avatar no-padding">
								
								<view class="cu-item" v-for="(obj,sub) in item.personList" :key="sub">
									
									<view class="cu-avatar round lg bg-green" style="color: #FFFFFF;">{{obj.name[1]}}</view>
									<view class="content">
										<view class="text-grey">{{obj.name}}</view>
									</view>
									
								</view>
								
							</view>
							</navigator>
						</view>
					</block>
				</scroll-view>
				<view class="indexBar" :style="[{height:'calc(100vh - ' + CustomBar + 'px - 50px)'}]">
					<view class="indexBar-box" @touchstart="tStart" @touchend="tEnd" @touchmove.stop="tMove">
						<view class="indexBar-item" v-for="(item,index) in list" :key="index" :id="index" @touchstart="getCur" @touchend="setCur"> {{item.name}}</view>
					</view>
				</view>
				<!--选择显示-->
				<view v-show="!hidden" class="indexToast">
					{{listCur}}
				</view>
			</view>
		</template>
		
		<script>
			import pinyin from '@/node_modules/js-pinyin/index'
			export default {
				data() {
					return {
						StatusBar: this.StatusBar,
						CustomBar: this.CustomBar,
						hidden: true,
						listCurID: '',
						personList:[{id:'1',name:'阿杜'},{name:'乔瑞'},{name:'朱克娟'},{name:'刘科'},{name:'刘凯'},{name:'李克农'},
						{name:'赵楠'},{name:'李肇星'},{name:'刘凡菲'},{name:'马凯'},{name:'文章'},{name:'陈翔'},{name:'段科瑞'},
						{name:'朱迪'},{name:'乔日哪'},{name:'路政科'},{name:'吴新林'},{name:'黎姿'},{name:'陈天明'},{name:'马卡龙'}],
						list: [],
						listCur: '',
						pinyin:''
					};
				},
				onLoad() {
					
					let list = [{}];
					for (let i = 0; i < 26; i++) {
						list[i] = {};
						let indexChar = String.fromCharCode(65 + i);
						list[i].name = indexChar;
						list[i].personList = this.personList.filter((item)=>{
							if(indexChar == pinyin.getCamelChars(item.name[0])){
								return true;
							}
						})
					}
					this.list = list;
					this.listCur = list[0];
				},
				onReady() {
					let that = this;
					uni.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
						that.boxTop = res.top
					}).exec();
					uni.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
						that.barTop = res.top
					}).exec()
				},
				methods: {
					//获取文字信息
					getCur(e) {
						this.hidden = false;
						this.listCur = this.list[e.target.id].name;
					},
					setCur(e) {
						this.hidden = true;
						this.listCur = this.listCur
					},
					//滑动选择Item
					tMove(e) {
						let y = e.touches[0].clientY,
							offsettop = this.boxTop,
							that = this;
						//判断选择区域,只有在选择区才会生效
						if (y > offsettop) {
							let num = parseInt((y - offsettop) / 20);
							this.listCur = that.list[num].name
						};
					},
		
					//触发全部开始选择
					tStart() {
						this.hidden = false
					},
		
					//触发结束选择
					tEnd() {
						this.hidden = true;
						this.listCurID = this.listCur
					},
					indexSelect(e) {
						let that = this;
						let barHeight = this.barHeight;
						let list = this.list;
						let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
						for (let i = 0; i < list.length; i++) {
							if (scrollY < i + 1) {
								that.listCur = list[i].name;
								that.movableY = i * 20
								return false
							}
						}
					}
				}
			}
		</script>
		
		<style>
			page {
				padding-top: 100upx;
			}
		
			.indexes {
				position: relative;
			}
		
			.indexBar {
				position: fixed;
				right: 0px;
				bottom: 0px;
				padding: 20upx 20upx 20upx 60upx;
				display: flex;
				align-items: center;
			}
		
			.indexBar .indexBar-box {
				width: 40upx;
				height: auto;
				background: #fff;
				display: flex;
				flex-direction: column;
				box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
				border-radius: 10upx;
			}
		
			.indexBar-item {
				flex: 1;
				width: 40upx;
				height: 40upx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24upx;
				color: #888;
			}
		
			movable-view.indexBar-item {
				width: 40upx;
				height: 40upx;
				z-index: 9;
				position: relative;
			}
		
			movable-view.indexBar-item::before {
				content: "";
				display: block;
				position: absolute;
				left: 0;
				top: 10upx;
				height: 20upx;
				width: 4upx;
				background-color: #f37b1d;
			}
		
			.indexToast {
				position: fixed;
				top: 0;
				right: 80upx;
				bottom: 0;
				background: rgba(0, 0, 0, 0.5);
				width: 100upx;
				height: 100upx;
				border-radius: 10upx;
				margin: auto;
				color: #fff;
				line-height: 100upx;
				text-align: center;
				font-size: 48upx;
			}
		</style>
		