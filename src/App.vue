<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
export default {
  mounted() {
    storage.clear("a",'user');

  }
};
</script>

<style>
</style>
