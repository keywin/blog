<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 15:47:25
-- @script: home
-->
<template>
  <div class="z-loading-mask">
    <svg viewBox="25 25 50 50" class="circular">
      <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
    </svg>
  </div>
</template>
<script>

export default {
  name: "xxx",
  data() {
    return {
      
    };
  },
  props: [],
  watch: {
    
  },
  computed: {},
  components: {
		
	},
  created() {
  },
  methods: {
  },
  mounted() {
    
  },
  updated() {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
// 加载等待
.z-loading-mask{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(0,0,0,.7);
  transition: opacity .3s;
  z-index: 9999999999;
  .circular{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 50px;
    height: 50px;
    animation: loading-rotate 2s linear infinite;
    @keyframes loading-rotate {
      0% {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
      }
      50% {
          stroke-dasharray: 90,150;
          stroke-dashoffset: -40px;
      }
      100% {
          stroke-dasharray: 90,150;
          stroke-dashoffset: -120px;
      }
    }
    @keyframes loading-dash {
      0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90,150;
        stroke-dashoffset: -40px;
      }
      100% {
        stroke-dasharray: 90,150;
        stroke-dashoffset: -120px;
      }
    }
    .path {
      animation: loading-dash 1.5s ease-in-out infinite;
      stroke-dasharray: 90,150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke: #409eff;
      stroke-linecap: round;
    }
  }
}
</style>