<template>
  <view class="login-box">
    <button
      title="登录"
      leftIconSize="0"
      bgColor="#f8f8f8"
      :titleStyle="{ color: '#000', 'font-weight': 700 }"
    >
    </button>
    <view class="logo-box">
      <image
        class="logo-img"
        src="../../static/images/common/logo.png"
        mode="scaleToFill"
      ></image>
    </view>
    <loginForm @loginSuccess="loginSuccess"></loginForm>
  </view>
</template>

<script>
import loginForm from "./components/loginForm.vue"
export default {
  name: "LoginPage",
  components: {
    loginForm
  },
  methods: {
    loginSuccess(res) {
      console.log(res);
    }
  }
}
</script>

<style lang="scss">
.login-box {
  margin: 0 40rpx;
  padding-top: 400rpx;
  text-align: center;
  .login-box-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--status-bar-height);
    width: 100%;
    background-color: rgb(248, 248, 248);
    color: rgb(0, 0, 0);
  }

  .logo-box {
    margin-bottom: 60rpx;

    .logo-img {
      width: 168rpx;
      height: 168rpx;
    }
  }
}
</style>
