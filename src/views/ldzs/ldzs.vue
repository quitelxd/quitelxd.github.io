<template>
	<div class="ldzs home">
		<el-row :gutter="20" class="maxHeight">
			<el-col :span="8" class="maxHeight">
				<Block :tabs="tabss" class="maxHeight">
					<div slot="content" class="maxHeight">
						<el-scrollbar class="maxHeight">
							<p style="color: red">组件参数</p>
							<p style="color: red">marquee Boolean '是否自动切换'</p>
							<p style="color: red">sleep Number '毫秒,自动切换间隔,默认3000毫秒'</p>
							<p style="color: red">tabs Array 'tab标签'</p>
							<p style="color: red">showLine Boolean '是否显示tab后的斜线,默认true'</p>
							<p style="color: red">@changefun 切换时的tab名称</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
							<p>看看我的css 和 封装的组件</p>
						</el-scrollbar>
					</div>
				</Block>
			</el-col>
			<el-col :span="16" class="maxHeight">
				<div class="btnBox">
					<el-button @click="toUtil">技能篇请移步</el-button>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>

export default {
	name: "Home",
	components: {},
	watch: {},
	data() {
		return {
			tabss: ["预警通告", "信息快报", "灾情专报"],
		};
	},
	computed: {},
	mounted() {
	},
	methods:{
		toUtil(){
			this.$router.push("/util")
		}
	}
};
</script>
<style lang="less" scoped>
.ldzs {
	.btnBox {
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
}
</style>
