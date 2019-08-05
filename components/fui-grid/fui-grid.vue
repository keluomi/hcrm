<template>
	<view>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="cu-item" v-for="(item,index) in gridData" :key="index" v-if="index<gridCol*2">
				<!-- <view :class="[gridMode =='col'?'grid':'',gridMode =='col'?'col-2':'']"> -->
				<view class="flex flex-wrap">
					<view class="basis-df  margin-xs">
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color,'radius']">
							<view class="cu-tag badge" v-if="item.badge && item.badge!=0">
								<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
							</view>
						</view>
			<!-- 			<view>
							<view><text>{{item.name}}</text></view>
							<view v-if="gridMode"><text>{{item.subName}}</text></view>
						</view> -->
					</view>
					<view class="basis-df margin-xs">
						<view><text>{{item.name}}</text></view>
						<view v-if="gridMode"><text>{{item.subName}}</text></view>
					</view>

				</view>

			</view>
			
			
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			gridMode:{
				type: String,
				default: 'row'
			},
			gridCol:{
				type: Number,
				default: 4
			},
			gridBorder:{
				type: Boolean,
				default: false
			},
			gridData:{
				 type: Array,
                 default:function () {
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
