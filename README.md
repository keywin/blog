# blog

> A blog project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 设计标准

项目 |PC | M站
---|---|--
区域标题 | 24px #000 mb50 | .38rem #000 mb.5
主标题 | 18px #333 mb15 | .32rem #333 mb.15rem
正文 | 14px/16px #666 lh1.8 | .28rem #666 lh1.8
描述性文字 | 12px/14px #777 | -
外边距 | 20px | .3rem
内边距 | 20px | .3rem
列表内部块上下间距 | 50px | -
正文行高 | 1.8 | -
border | #e9e9eb | -

## 层级标注

```js
// z-index

Aside 2001

Header 101

goBack 99

loading 2099
```

## 优化记录

- swiper.css cdn引入`index.html` 记录: 90.6k -> 72.7k

- 图片cdn(七牛)引入`/blog/index.vue` 记录: max | 5.13s -> 255ms

- 插件在对应组件中引入,避免全局引入`Detail_col.vue` 记录: vendor.xxx.js | 932kB -> 166KB

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
