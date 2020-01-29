<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 15:47:25
-- @script: home
-->
<template>
  <div class="dialog">
    <div class="goBack" @click="goBackClick" v-if="isShowBack">G<br/>O<br/>B<br/>A<br/>C<br/>K</div>
		<transition name="fade" appear>
			<router-view />
		</transition>
    <div class="z-loading-mask">
      <div class="z-loading-spinner">
        123
      </div>
    </div>
	</div>
</template>
<script>

export default {
  name: "Home",
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