<template>
	<view class="header-box">
		<image class="img-box" mode="aspectFit" src="../../../static/images/home/time.png" alt="" />
		<view class="right-box">
			<view class="num-box">
				<text class="num-time">{{time}}</text>
				<text class="num-text">分钟</text>
			</view>
			<text class="study-time-text">今日学习时长</text>
		</view>


	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const time = ref(0)
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
			margin-bottom: 10rpx;

			.num-time {
				font-size: 48rpx;
				margin-right: 5rpx;
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