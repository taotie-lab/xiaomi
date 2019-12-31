<template>
  <div class="My">
    <div class="My_top">
      <img src="../../public/img/ia_13.png" alt="" class="beiurl">
      <img src="../assets/my/ia_1.png" alt="" class="imgurl2">
      <div class="My_top_login">
        <router-link
        to='/landing'
        tag='span'
        class='spans'
        >登陆</router-link>
        <span class='spans'>/</span>
        <router-link
        to='/login'
        tag='span'
        class='spans'
        >注册</router-link>
      </div>
    </div>
    <div class="My_main">
      <van-nav-bar
        left-text="我的订单"
        right-text="全部订单"
        right-arrow
      />
     <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <div class="My_bottom">
      <img src="../assets/my/ia_1.png" alt="">
      <span>会员中心</span>
      <img src="../assets/my/ia_1.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'my'
}
</script>
<style lang='scss'>
.My{
  display: flex;
  // 将项目垂直显示
  flex-direction: column;
  height: 100%;

  &_top{
    position: relative;
    height: 76px;
    background: #f37d0f;
    width: 100%;
    .beiurl{
      width: 100%;
      height: 100%;
    }
    .imgurl2{
      width: 42px;
      height: 42px;
      position: absolute;
      top: 20px;
      left: 10px;
    }
    &_login{
      position: absolute;
      top: 32px;
      left: 60px;
      .spans{
        color:mintcream;
        padding: 2px;
      }
    }
  }
}

</style>
