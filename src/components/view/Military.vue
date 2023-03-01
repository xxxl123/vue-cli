<template>
	<div>
		<ul class="newShow" v-for="(item,i) in list" :key="i">
			<li>
				<div class="bookMation">
					<h2 @click="tomilinews()">
						{{item.name}}
					</h2>
					<div>
						<img :src="item.image[0].imgUrl">
						<img :src="item.image[1].imgUrl">
						<img :src="item.image[2].imgUrl">
						<img :src="item.image[3].imgUrl">
					</div>
						<p class="author">
							<span>{{item.mag}}</span> 
							<span>{{item.remark}}</span>
							<span>{{item.time}}</span>
						</p>
				</div>
			</li>
		</ul>
		<div class="hotreview">
			<h1 style="color: brown;">头条热榜</h1>
			<ul v-for="(item,i) in view" :key="i">
				<li class="tt">
					{{item.content}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:this.$store.state.mili,
				view:this.$store.state.hotreview,
			}
		},
		methods:{
			tomilinews(){
				this.$router.push({
					path:"/milinews"
				});
			}
		}
	}
</script>

<style scoped>
	.hotreview{
		margin-left: 800px;
		position: absolute;
		width: 200px;
	}
	.tt{
		font-size: 15px;
		width: 250px;
		height: 35px;
		float: left;
	}
	span{
		padding-right: 30px;
	}
	.newShow {
		display: block;
		overflow: hidden;
		float: left;
	}
	.newShow li {
		width: 750px;
		height: 225px;
		padding: 0 20px;
		margin-bottom: 14px;
		overflow: hidden;
		float: left;
	}

	.newShow li img {
		width: 145px;
		height: 130px;
		border: 1px solid #f0f0f0;
		margin-right: 14px;
	}

	.newShow li .bookMation {
		width: 750px;
		height: 250px;
	}

	.newShow li .bookMation h2 {
		height: 30px;
		width: 750px;
		margin-bottom: 10px;
		border-bottom: 1px solid #f0f0f0;
		font-size: 25px;
		color: #212121;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.newShow li .bookMation h2:hover {
		cursor: pointer;
		color: orangered;
	}

	.newShow li .bookMation .author {
		font-family: "Microsoft Yahei", arial, sans-serif;
	}

	.changepage {
		height: 36px;
		padding-top: 22px;
		text-align: center;
	}

	.changepage span {
		display: inline-block;
	}

	.changepage .up,
	.changepage .down {
		width: 80px;
		height: 34px;
		text-align: center;
	}

	.changepage a {
		float: left;
		line-height: 34px;
		background: #fff;
		border-radius: 3px;
		margin: 0 8px;
		border: 1px solid #fff;
	}

	.el-icon-arrow-left {
		float: left;
		width: 7px;
		height: 11px;
		background-position: 0 -38px;
		margin: 12px 0 0 14px;
	}

	.el-icon-arrow-right {
		background-position: 0 -50px;
		width: 7px;
		height: 11px;
		float: right;
		margin: 12px 14px 0 0;
	}
</style>