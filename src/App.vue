<template>
  <div id="app">
    <router-view></router-view>
    <tab-control></tab-control>
  </div>
</template>

<script>
  import TabControl from "./components/common/tabbar/TabControl";


  export default {
    name: 'App',
    components: {
      TabControl
    }
  }
</script>

<style>
  @import "assets/css/base.css";


</style>
