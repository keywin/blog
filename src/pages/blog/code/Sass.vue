<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<!-- 使用指令 -->
		<h3 class="heading">一、Sass配置</h3>
		<p class="lineP">1. 相关依赖</p>
		<div v-highlight >
			<pre>
				<code class="js">
  npm i node-sass
  npm i sass-loader
  npm i sass-resources-loader
				</code>
			</pre>
		</div>
		<p class="lineP">2. 'package.json' 修改版本号</p>
		<div v-highlight >
			<pre>
				<code class="js">
  // 也可 npm 按以下版本号下载依赖, 此处不需再修改
  "node-sass": "^4.12.0",
  "sass-loader": "^7.1.0",
				</code>
			</pre>
		</div>
		<p class="lineP">3. 'build\utils.js' 添加配置项</p>
		<div v-highlight >
			<pre>
				<code class="js">
  scss: generateLoaders('sass').concat({
  	loader: 'sass-resources-loader',
  	options: {
  		resources: [path.resolve(__dirname, '../src/assets/styles/index.scss')] // sass主文件
  	}
  })
				</code>
			</pre>
		</div>
		<p class="lineP">4. 'index.scss' 主文件示例</p>
		<div v-highlight >
			<pre>
				<code class="vue">
  @import './reset.scss';
  @import './media.scss';
  @import './com.scss';
  
  $font-color-theme: #00FFFF; //字体主题颜色默认
				</code>
			</pre>
		</div>
		<h3 class="heading">二、换肤, 以修改文字 color 为例</h3>
		<p class="lineP">1. 'mixin.scss' 主题切换配置文件</p>
		<div v-highlight >
			<pre>
				<code class="scss">
  // 自己的样式文件 mixin.scss
  $theme-1: (
    primary-color: #009AFE, // 字体主色
    font-default-color: #8F9AAE, // 默认字体颜色
    font-error-color: #F36A5A, // 错误信息(提示信息)字体颜色
  );
  
  $theme-2: (
    primary-color: #36CFC9, // 字体主色
    font-default-color: #000, // 默认字体颜色
    font-error-color: orange, // 错误信息(提示信息)字体颜色
  );
  
  //定义映射集合
  $themes: (
    theme1: $theme-1,
    theme2: $theme-2
  );
  
  @mixin font-color-theme($type: 1) {
    @each $themename, $theme in $themes {
      [data-theme=#{$themename}] & {
        @if ($type == 1) {
          color: map-get($map: $theme, $key: primary-color)
        }
        @if ($type == 2) {
          color: map-get($map: $theme, $key: font-default-color)
        }
        @if ($type == 3) {
          color: map-get($map: $theme, $key: font-error-color)
        }
      }
    }
  };
				</code>
			</pre>
		</div>
		<p class="lineP">2. 'index.html' 设置</p>
		<div v-highlight >
			<pre>
				<code class="html">
  // 切换主题, 替换data-theme值即可
  &lt;html data-theme="theme1"&gt;
				</code>
			</pre>
		</div>
		<p class="lineP">3. 使用(以设置.a标签字色为例)</p>
		<div v-highlight >
			<pre>
				<code class="css">
  .aaa{
  	@include font-color-theme(1)
  }
				</code>
			</pre>
		</div>
		<p class="lineP">4. 切换主题</p>
		<div v-highlight >
			<pre>
				<code class="js">
  // 切换主题
  themeChange(theme) {
  	this.theme = theme // 设置缓存, 使颜色刷新不失效
  	window.document.documentElement.setAttribute('data-theme', theme) // 设置切换
  }
				</code>
			</pre>
		</div>
		<p class="lineP">5. 切换体验</p>
		<select v-model="selectVal" style="margin-top: 20px;" @change="aaa">
			<option value="1">切换字色_theme1</option>
			<option value="2">切换字色_theme2</option>
		</select>
		<div v-highlight >
			<pre>
				<code class="js aaa">
  我的字色会变, Hello World
				</code>
			</pre>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>更新 / {{ detailData.update }}</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span>{{ detailData.type }} &amp;&amp; {{ detailData.fooTitl }} &amp;&amp; Sass &amp;&amp; 换肤</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
  name: "Sass",
  data() {
    return {
			selectVal: '1'
		};
	},
	props: ['detailData'],
  methods: {
	  aaa() {
		  window.document.documentElement.setAttribute('data-theme', 'theme' + this.selectVal)
	  }
  },

};
</script>
<style lang="scss" scoped>
@import "./code.scss";
.aaa{
	@include font-color-theme(1)
}
</style>