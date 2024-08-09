<template>
	<view class="header-box">
		<image class="img-box" mode="aspectFit" src="../../../static/images/home/time.png" alt="" />
		<view class="right-box">
			<view class="num-box">
				<uni-icons custom-prefix="iconfont" :type="mojiIconfont" :color="iconColor" size="50"></uni-icons>
				<template v-if="time<60">
					<text class="num-time">{{time}}</text>
					<text class="num-text">分钟</text>
				</template>
				<template v-else>
					<text class="num-time">{{house}}</text>
					<text class="num-text">小时</text>
					<text class="num-time">{{minute}}</text>
					<text class="num-text">分钟</text>
				</template>
			</view>
			<text class="study-time-text">今日学习时长</text>
		</view>


	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';
	const time = ref(0)
	const house = computed(() => {
		if(time.value >= 60) {
			return Math.floor(time.value / 60);
		}
	})
	const minute = computed(() => {
		if(time.value >= 60) {
			return time.value % 60
		}
	})
	const iconColor = ref("#ff0000")
	const mojiIconfont = computed(() => {
		let moji = 'icon-shangxin'
		if (time.value >= 60 && time.value <= 120) {
			moji = 'icon-wubiaoqing'
			iconColor.value = "#ff8400"
		} else if (time.value > 120) {
			moji = 'icon-smile'
			iconColor.value = "#3e7bfa"
		}
		return moji
	})
</script>

<style lang="scss">
	.header-box {
		display: flex;
		align-items: center;

		.img-box {
			width: 50%;
		}

		.right-box {
			flex: 1;
		}

		.num-box {
			display: flex;
			align-items: center;
			margin-bottom: 10px;

			.num-time {
				font-size: 48rpx;
				margin: 0 5rpx;
			}

			.num-text {
				font-size: 30rpx;
			}
		}

		.study-time-text {
			font-size: 36rpx;
			color: $base-color-default;
		}
	}
</style>