<script>
	import { StorageConst } from "./utils/modules/constVariable.js"
	export default {
		onLaunch: function() {
			console.log("App Launch");
			// 说明用户没有登录过，需要先登录
			if(!uni.getStorageSync(StorageConst.userId)) {
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "@/static/iconfont.css";
</style>
