<template>
	<div class="main-box">
		<div class="from text-center">
			<div class="box">
				<div class="title">登录系统</div>
				<div class="input">
					<input type="text" v-model="loginForm.username">
				</div>
				<div class="input">
					<input type="password" v-model="loginForm.password">
				</div>

				<button @click="login">立即登录</button>
				<div class="text">版本信息：V1.0.0</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "login",
	data() {
		return {
			codeUrl: '',
			loginForm: {
				password: 'admin123',
				username: 'zd',
			}
		}
	},
	methods: {
		login() {
			this.$router.push({path: this.redirect || "/"});
		}
	}
}
</script>

<style scoped lang="less">
.main-box {
	position: relative;

	.from {
		position: absolute;
		width: 700px;
		top: 20px;
		left: calc(50% - 350px);

		.title {
			font-size: 36px;
			font-weight: 800;
			letter-spacing: 2px;

			.logo {
				width: 50px;
				vertical-align: middle;
			}
		}

		.box {
			width: 40%;
			margin: 0 auto;
			margin-top: 200px;
			padding: 30px 15px;
			background: rgba(10, 98, 208, .58);
			border: 2px solid #0a62d0;
			border-radius: 3px;

			.title {
				font-weight: normal;
				margin-bottom: 30px;
				font-size: 26px;
			}

			.input {
				input {
					box-sizing: border-box;
					width: 100%;
					outline: none;
					border: 1px solid #0a62d0;
					margin-bottom: 25px;
					height: 35px;
					border-radius: 5px;
					padding: 0 10px;
					background: transparent;
					color: #FFFFFF;
				}
			}

			button {
				width: 100%;
				outline: none;
				background: #409EFF;
				font-size: 16px;
				border: none;
				height: 40px;
				border-radius: 5px;
				color: #FFFFFF;
				cursor: pointer;
			}

			.text {
				margin-top: 30px;
				font-size: 14px;
				color: #bfbfbf;
			}
		}
	}

	#v1 {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		height: auto;
		width: auto;
		/*加滤镜*/
		/*filter: blur(5px); //背景模糊设置*/
		/*-webkit-filter: grayscale(100%);*/
		/*filter:grayscale(10%); //背景灰度设置*/
		z-index: -11;

		source {
			min-width: 100%;
			min-height: 100%;
			height: auto;
			width: auto;
		}
	}
}

</style>