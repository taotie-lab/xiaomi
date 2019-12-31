<template>
  <div class="home">
    <div class="home_view">
     <router-view></router-view>
    </div>
    <div class="home_bottom">
      <van-tabbar v-model="active" class="bottom_tabbar">
        <van-tabbar-item
        v-for='item in tabs'
        :key='item.id'
        :name="item.name"
        :to="item.to"
        :icon='item.icon'
        >
        <span>{{item.name}}</span>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      active: 0,
      tabs: [
        {
          id: 1,
          name: '首页',
          icon: 'wap-home-o',
          to: '/home/emphasis'
        },
        {
          id: 2,
          name: '分类',
          icon: 'orders-o',
          to: '/classfig'
        },
        {
          id: 3,
          name: '购物车',
          icon: 'cart-o',
          to: '/shopping'
        },
        {
          id: 4,
          name: '我的',
          icon: 'friends-o',
          to: '/my'
        }
      ]
    }
  }
}
</script>
<style lang='scss' >
.home{
  display: flex;
  flex-direction: column;
  height: 100%;
  &_view{
    flex: 1;
    overflow-y: auto;
  }
  &_bottom{
    height: 50px;

    .bottom_tabbar{
      height: 50px;
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
  }
}
</style>
