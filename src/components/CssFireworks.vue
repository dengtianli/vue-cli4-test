<template>
	<div class="css1">
		<canvas id="myCavas"></canvas>
	</div>
</template>

<script>
export default {
	name: "CssFireworks",
	props: {},
	data() {
		return {
			canvas: null,
			context: null,
			radius: 0,
			rid: null,
			particles: [],
		};
	},
	mounted() {
		this.canvas = document.getElementById("myCavas");
		// console.log(this.canvas);
		this.context = this.canvas.getContext("2d");

		window.addEventListener("resize", this.resizeCanvas, false);
		this.resizeCanvas();
		document.addEventListener("mousedown", this.mouseDownHandler, false);

		// 用定时器随机放
		// setInterval(() => {
		// 	// console.log(e);
		// 	var x = 1400;
		// 	var y = 400;
		// 	// this.drawFireworks(x, y);
		// 	this.fire(x, y);
		// }, 5000);
	},
	methods: {
		resizeCanvas() {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
		},
		clearCanvas() {
			this.context.fillStyle = "#ffffff";
			this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		},
		mouseDownHandler(e) {
			// console.log(e);
			var x = e.clientX;
			var y = e.clientY;
			// this.drawFireworks(x, y);
			this.fire(x, y);
		},
		drawFireworks(sx, sy) {
			this.clearCanvas();
			var count = 10; //烟花粒子数量
			// var radius = 10; //烟花环绕半径

			for (var i = 0; i < count; i++) {
				var angle = (360 / count) * i; //烟花粒子角度
				var radians = (angle * Math.PI) / 180; //烟花粒子弧度
				// var p = particles[i];
				// p.vx = p.sx + Math.cos(p.radians) * p.radius;
				// p.vy = p.sy + Math.sin(p.radians) * p.radius;

				// p.radius += 1 + p.speed;

				// this.context.beginPath();
				// this.context.arc(p.vx, p.vy, p.size, 0, Math.PI * 2, false);
				// this.context.closePath();

				// this.context.fillStyle = "hsla(" + p.hue + ", 100%, " + p.brightness + "%, " + 100 + ")";
				// this.context.fill();

				var vx = sx + Math.cos(radians) * this.radius;
				var vy = sy + Math.sin(radians) * this.radius;

				var size = 2;
				this.context.beginPath();
				this.context.arc(vx, vy, size, 0, Math.PI * 2, false);
				this.context.closePath();
				this.context.fillStyle = "#ff0000";
				this.context.fill();
			}
		},
		drawFireworks2() {
			this.clearCanvas();

			for (var i = 0; i < this.particles.length; i++) {
				var p = this.particles[i];

				p.vx = p.sx + Math.cos(p.radians) * p.radius;
				p.vy = p.sy + Math.sin(p.radians) * p.radius;

				p.radius += 1 + p.speed;

				// var vx = Math.cos(p.radians) * p.radius;
				// var vy = Math.sin(p.radians) * p.radius + 0.4;

				// p.x += vx;
				// p.y += vy;

				// p.radius *= 1 - p.speed/100;

				// p.alpha -= 0.005;

				this.context.beginPath();

				this.context.arc(p.vx, p.vy, p.size, 0, Math.PI * 2, false);
				this.context.closePath();

				this.context.fillStyle = "hsla(" + p.hue + ", 100%, " + p.brightness + "%, " + 100 + ")";

				this.context.fill();
			}
		},

		fire(x, y) {
			this.radius = 0;
			this.createFireworks(x, y);
			// cancelAnimationFrame(this.rid);
			// this.tick(x, y);
			// setInterval(this.tick(x, y), 1);

			this.rid = setInterval(() => {
				if (this.radius >= 100) {
					clearInterval(this.rid);
				}
				this.tick(x, y);
			}, 30);
		},
		tick(x, y) {
			// this.context.globalCompositeOperation = "destination-out";
			// this.context.fillStyle = "rgba(0,0,0," + 10 / 100 + ")";
			// this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
			// this.context.globalCompositeOperation = "lighter";
			// this.drawFireworks(x, y); //绘制烟花
			this.drawFireworks2(x, y); //绘制烟花
			this.radius = this.radius + 1; //半径不断变大
			this.$forceUpdate();
			// this.rid = requestAnimationFrame(this.tick());
		},
		createFireworks(sx, sy) {
			this.particles = [];

			var hue = Math.floor(Math.random() * 51) + 150; //150到201的随机数
			var hueVariance = 30;
			var count = 100;

			for (var i = 0; i < count; i++) {
				var p = {};

				var angle = Math.floor(Math.random() * 360);
				p.radians = (angle * Math.PI) / 180;
				p.radius = 0;

				p.sx = sx;
				p.sy = sy;

				p.speed = Math.random() * 5 + 0.4;

				p.size = Math.floor(Math.random() * 3) + 1;

				p.hue = Math.floor(Math.random() * (hue + hueVariance - (hue - hueVariance))) + (hue - hueVariance);
				p.brightness = Math.floor(Math.random() * 31) + 50;
				p.alpha = (Math.floor(Math.random() * 61) + 40) / 100;

				this.particles.push(p);
			}
		},
	},
};
</script>

<style scoped lang="scss">
html,
body {
	width: 100%;
	height: 100%;
	display: flex;
}
.css1 {
	height: 600px;
	width: 100%;
	box-sizing: border-box;
}
</style>
