<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 15:47:25
-- @script: home
-->
<template>
  <div class="home">
		<kwHeade></kwHeade>
		<router-view />
	</div>
</template>
<script>
import kwHeade from '@/components/Header.vue'
export default {
  name: "Home",
  data() {
    return {};
  },
  props: [],
  watch: {},
  computed: {},
  components: {
		kwHeade
	},
  created() {},
  methods: {},
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
</style>