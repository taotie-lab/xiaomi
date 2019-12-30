<template>
  <div class="My">
    <div class="My_top">
      <span></span>
      <div class="My_login">
        <span>登陆</span>
        <span>/</span>
        <span>注册</span>
      </div>
    </div>
    <div class="My_main">
      <van-nav-bar
        left-text="我的订单"
        right-text="全部订单"
        right-arrow
      />
    </div>
    <div class="My_bottom"></div>
  </div>
</template>
<script>
export default {
  name: 'my'
}
</script>
<style>

</style>
