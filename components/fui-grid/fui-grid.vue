<template>
	<view>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="cu-item" v-for="(item,index) in gridData" :key="index" v-if="index<gridCol*2">
				<navigator  hover-class="none" :url="item.url" :open-type="item.openType?item.openType:'navigate'">
				<view v-if="gridMode !='col'">
					<view>
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
							<view class="cu-tag badge" v-if="item.badge && item.badge!=0">
								<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
							</view>
						</view>
					</view>
					<view>
						<view><text>{{item.name}}</text></view>
					</view>
					
				</view>
				<view v-if="gridMode == 'col'" class="flex">
					<view class="basis-xs">
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color,'radius']">
							<view class="cu-tag badge" v-if="item.badge && item.badge!=0">
								<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
							</view>
						</view>
					</view>
					<view class="basis-sm">
						<view><text>{{item.name}}</text></view>
						<view><text>{{item.subName}}</text></view>
					</view>
				</view>

			</navigator>
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
