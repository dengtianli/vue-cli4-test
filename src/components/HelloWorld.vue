<template>
	<div>
		<div class="css1"></div>
		<div class="css2"></div>
		<!-- <div class="css3"></div> -->
		<div class="css4">
			<div class="conic"></div>
			<div class="conic conic-demo"></div>
		</div>
		<div class="css5">
			<div class="clip">hello</div>
			<div class="clip bg">示意图</div>
		</div>
		<div class="css6">hello</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String,
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
	--borderColor: #03a9f3;
	position: relative;
	width: 140px;
	height: 64px;
	margin: auto;
	border: 1px solid #03a9f3;
	cursor: pointer;
	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 20px;
		height: 20px;
		transition: 0.3s ease-in-out;
	}
	&::before {
		top: -5px;
		left: -5px;
		border-top: 1px solid var(--borderColor);
		border-left: 1px solid var(--borderColor);
	}
	&::after {
		right: -5px;
		bottom: -5px;
		border-bottom: 1px solid var(--borderColor);
		border-right: 1px solid var(--borderColor);
	}
	&:hover::before,
	&:hover::after {
		width: calc(100% + 9px);
		height: calc(100% + 9px);
	}
}
.css2 {
	width: 140px;
	height: 64px;
	margin: 100px auto;
	outline: 1px solid #333;
	outline-offset: -1px;
	&:hover {
		outline: none;
		background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
			linear-gradient(90deg, #333 50%, transparent 0) repeat-x, linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
			linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
		background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
		background-position: 0 0, 0 100%, 0 0, 100% 0;
		animation: linearGradientMove 0.3s infinite linear;
	}

	@keyframes linearGradientMove {
		100% {
			background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
		}
	}
}
.css3 {
	position: relative;
	z-index: 0;
	width: 400px;
	height: 300px;
	margin: auto;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	&::before {
		content: "";
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;

		background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300),
			linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);

		animation: rotate 4s linear infinite;
	}
	@keyframes rotate {
		100% {
			transform: rotate(1turn);
		}
	}
	&::after {
		content: "";
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: white;
		border-radius: 5px;
		animation: opacityChange 3s infinite alternate;
	}

	@keyframes opacityChange {
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.5;
		}
	}
}
.css4 {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 50vh;
	width: 50vw;
	background: #000;
}
.conic {
	position: relative;
	z-index: 0;
	width: 400px;
	height: 300px;
	margin: 20px;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	&::before {
		content: "";
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #1a232a;
		background-repeat: no-repeat;
		background-position: 0 0;
		background: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);

		animation: rotate 4s linear infinite;
	}
	@keyframes rotate {
		100% {
			transform: rotate(1turn);
		}
	}
	&::after {
		content: "";
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: #000;
		border-radius: 5px;
	}
}
.conic-demo::after {
	animation: opacityChange 3s infinite alternate;
}

@keyframes opacityChange {
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
}
.css5 {
	width: 340px;
	height: 300px;
	display: flex;
	margin: auto;
	.clip {
		position: relative;
		margin: auto;
		width: 160px;
		line-height: 160px;
		text-align: center;
		font-size: 24px;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border: 2px solid gold;
			transition: all 0.5s;
			animation: clippath 3s infinite linear;
		}
	}
	@keyframes clippath {
		0%,
		100% {
			clip-path: inset(0 0 95% 0);
		}
		25% {
			clip-path: inset(0 95% 0 0);
		}
		50% {
			clip-path: inset(95% 0 0 0);
		}
		75% {
			clip-path: inset(0 0 0 95%);
		}
	}
	.bg::before {
		background: rgba(255, 215, 0, 0.5);
	}
}
.css6 {
	position: relative;
	margin: auto;
	width: 120px;
	line-height: 64px;
	text-align: center;
	color: #fff;
	font-size: 20px;
	border: 2px solid gold;
	border-radius: 10px;
	background: gold;
	transition: all 0.3s;
	cursor: pointer;
	&::before,
	&::after {
		content: "";
		position: absolute;
		top: -10px;
		left: -10px;
		right: -10px;
		bottom: -10px;
		border: 2px solid gold;
		transition: all 0.5s;
		animation: clippath 3s infinite linear;
		border-radius: 10px;
	}

	&::after {
		animation: clippath 3s infinite -1.5s linear;
	}
	@keyframes clippath {
		0%,
		100% {
			clip-path: inset(0 0 98% 0);
		}

		25% {
			clip-path: inset(0 98% 0 0);
		}
		50% {
			clip-path: inset(98% 0 0 0);
		}
		75% {
			clip-path: inset(0 0 0 98%);
		}
	}
}
</style>
