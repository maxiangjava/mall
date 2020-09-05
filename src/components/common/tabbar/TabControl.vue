<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/icon01.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon01_active.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/icon02.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon02_active.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/icon03.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon03_active.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/icon04.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon04_active.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "TabControl",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>