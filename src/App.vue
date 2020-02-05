<template>
  <div id="app" class="theme">
		<!-- <canvas id="canvas" style="width: 100%;height: 100%;"></canvas> -->
    <router-view/>
    <!-- <div class="first-mark" v-if="isShow">
      今天是2019年12月31日, 节日快乐
    </div> -->
		<canvas id="canvas">Your Browser does not support Canvas, please upgrade</canvas>
  </div>
</template>
<script>
import {API_MODEL1_testData} from './api/apiModel/model_01.js'
export default {
  name: 'App',
  data() {
    return {
      isShow: true
    }
  },
  mounted () {
    API_MODEL1_testData().then(res => {
      console.log(res)
    })
// 			let canvas = document.querySelector('#canvas')
// let context = canvas.getContext('2d')
// let cw = canvas.width = window.innerWidth
// let ch = canvas.height = window.innerHeight

// class Boom {
//     // 爆炸物是没有确定的结束点坐标， 这个可以通过设定一定的阀值来限定
//     constructor(startX, startY){
//         this.startLocation = {x: startX, y: startY}
//         this.nowLocation = {x: startX, y: startY}
//         // 速度
//         this.speed = Math.random()*10+2
//         // 加速度
//         this.acceleration = 1
//         // 没有确定的结束点，所以没有固定的角度，可以随机角度扩散
//         this.angle = Math.random()*Math.PI*2
//         // 这里设置阀值为100
//         this.targetCount = 100
//         // 当前计算为1，用于判断是否会超出阀值
//         this.nowNum = 1
//         // 透明度
//         this.alpha = .5
//         // 重力系数
//         this.gravity = 0
//         this.decay = 0.015

//         // 线段集合
//         this.collection = new Array(2)

//         // 是否到达目标点
//         this.arrived = false
//     }

//     draw(){
//         context.beginPath()
//         try{ 
//           context.moveTo(this.collection[0][0], this.collection[0][1]) 
//         }catch(e){
//           context.moveTo(this.nowLocation.x, this.nowLocation.y) 
//         }
         
//         context.lineWidth = 1
//         context.lineCap = 'round'
//         context.lineTo(this.nowLocation.x, this.nowLocation.y)
//         // 设置由透明度减小产生的渐隐效果，看起来没这么突兀
//         context.strokeStyle = `rgba(200, 200, 200, ${this.alpha})`
//         context.stroke()
//     }

//     update(){
//         this.collection.shift()
//         this.collection.push([this.nowLocation.x, this.nowLocation.y])
//         this.speed *= this.acceleration

//         let vx = Math.cos(this.angle) * this.speed
//         // 加上重力系数，运动轨迹会趋向下
//         let vy = Math.sin(this.angle) * this.speed + this.gravity

//         // 当前计算大于阀值的时候的时候，开始进行渐隐处理
//         if(this.nowNum >= this.targetCount){
//             this.alpha -= this.decay
//         }else{
//             this.nowLocation.x += vx
//             this.nowLocation.y += vy
//             this.nowNum++
//         }

//         // 透明度为0的话，可以进行移除处理，释放空间
//         if(this.alpha <= 0){
//             this.arrived = true
//         }
//     }

//     init(){
//         this.draw()
//         this.update()
//     }
// }

// class Animate {
//     constructor(){
//         // 定义一个数组做为爆炸点的集合
//         this.booms = []
//     }

//     pushBoom(){
//         // 实例化爆炸效果，随机条数的射线扩散
//         for(let bi = Math.random()*10+20; bi>0; bi--){
//             this.booms.push(new Boom(cw/2, ch/2))
//         }
//     }

//     run() {
//         window.requestAnimationFrame(this.run.bind(this))
//         context.clearRect(0, 0, cw, ch)

//         let bnum = this.booms.length
//         while(bnum--){
//             // 触发动画
//             this.booms[bnum].init()
//             if(this.booms[bnum].arrived){
//                 // 到达目标透明度后，把炸点给移除，释放空间
//                 this.booms.splice(bnum, 1)
//             }
//         }

//         this.pushBoom()
//     }
// }

// let a = new Animate()
// a.run()
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
var dots=[];
(function(){

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const time=1;
const num=20;
 canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;
  
function dot(x,y,vx,vy){
  this.x=x;
  this.y=y;
  this.vx=vx;
  this.vy=vy;
  this.size=Math.ceil(Math.random()*3+2);
  this.ctx={};
}
dot.prototype.render = function(ctx) {
  ctx.save();
  this.ctx=ctx;
  this.ctx.beginPath();
  this.ctx.fillStyle='lightgray';
  this.ctx.arc(this.x-this.size/2,this.y-this.size/2,this.size,0,Math.PI*2);
  this.ctx.closePath();
  this.ctx.fill();
  ctx.restore();
};
dot.prototype.update = function() {
  this.ctx.clearRect(0,0,canvas.width,canvas.heihgt);
  this.x=this.x+this.vx*time;
  this.y=this.y+this.vy*time;
  //console.log(this.vx*time);
  this.vx = (this.x < canvas.width && this.x > 0) ? this.vx : (-this.vx);
  this.vy = (this.y < canvas.height && this.y > 0) ? this.vy : (-this.vy);
  this.render(this.ctx);
};

for(let i=0;i<num;i++){
  var x=Math.ceil(Math.random()*canvas.width);
  var y=Math.ceil(Math.random()*canvas.height);
  var vx=Math.ceil(Math.random()*2);
  var vy=Math.ceil(Math.random()*2);
  var d=new dot(x,y,vx,vy);
  d.render(ctx);
  dots.push(d);
}
requestAnimFrame(anim);
function anim(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<dots.length;i++){
      dots[i].update();
  }
  requestAnimFrame(anim);
}
}());
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
  z-index: 2099;
  background: rgba(255,255,255,.95);
}
#canvas{
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
}
</style>
