<template>
	<div>
		<ul class="newShow" v-for="(item,i) in list" :key="i">
			<li>
				<div class="bookMation">
					<h2 @click="toeconews()">
						{{item.name}}
					</h2>
					<div>
						<img :src="item.imgUrl">
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
				list:this.$store.state.eco,
				view:this.$store.state.hotreview,
			}
		},
		methods:{
			toeconews(){
				this.$router.push({
					path:"/econews"
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
	}
	span{
		padding-right: 30px;
	}
	.newShow {
		width: 700px;
		display: block;
		overflow: hidden;
		float: left;
	}
	.newShow li {
		width: 700px;
		height: 225px;
		padding: 0 20px;
		margin-bottom: 14px;
		overflow: hidden;
		float: left;
	}

	.newShow li img {
		width: 175px;
		height: 130px;
		border: 1px solid #f0f0f0;
		margin-right: 14px;
		float: right;
		border-radius: 3px;
	}

	.newShow li .bookMation {
		width: 700px;
		height: 250px;
	}

	.newShow li .bookMation h2 {
		height: 30px;
		width: 700px;
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
		margin-top: 130px;
		font-family: "Microsoft Yahei", arial, sans-serif;
	}

</style>