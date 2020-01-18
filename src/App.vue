<template>
  <div id="app">
    <router-view/>
    <div class="first-mark" v-if="isShow">
      今天是2019年12月31日, 节日快乐
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isShow = false
    },3000)
  }
}
</script>

<style lang="scss">
// @import './assets/styles/animate.min.css';
.first-mark{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
  background: rgba(255,255,255,.95);
}
</style>
