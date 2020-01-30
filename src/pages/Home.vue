<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 15:47:25
-- @script: home
-->
<template>
  <div class="home">
    <div class="goBack" @click="goBackClick" v-if="isShowBack">G<br/>O<br/>B<br/>A<br/>C<br/>K</div>
		<transition name="fade" appear>
			<router-view />
		</transition>
    <zLoading></zLoading>
	</div>
</template>
<script>

export default {
  name: "Home",
  data() {
    return {
      isShowBack: false
    };
  },
  props: [],
  watch: {
    $route () {
      this.isShowBack = this.$route.meta.isShowBack
    }
  },
  computed: {},
  components: {
		
	},
  created() {
    this.isShowBack = this.$route.meta.isShowBack
  },
  methods: {
    goBackClick() {
			this.$router.go(-1)
		}
  },
  mounted() {
    
  },
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.home{
	position: relative;
	z-index: 1;
  overflow-x: hidden;
}

.goBack{
  position: fixed;
  color: #000;
  background: rgba(255,255,255,.5);
  box-shadow: 0 0 4px 1px rgba(113, 135, 164, 0.12);
  z-index: 99;
}
/* 小屏 */
@media only screen and (max-width: 600px) {
  .goBack{
    right: .6rem;
    top: .6rem;
    padding: .3rem;
    font-size: .4rem;
  }
}
/* 大屏 */
@media only screen and (min-width: 600px) {
  .goBack{
    right: 30px;
    top: 30px;
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>