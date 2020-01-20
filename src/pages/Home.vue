<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 15:47:25
-- @script: home
-->
<template>
  <div class="home">
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>
<script>

export default {
  name: "Home",
  data() {
    return {};
  },
  props: [],
  watch: {},
  computed: {},
  components: {
		
	},
  created() {},
  methods: {},
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.home{
	position: relative;
	z-index: 1;
}
</style>