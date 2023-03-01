<template>
	<div class="classification">
		<div class="content">
			<div class="genre">
				<div class="difgenre">
					<span class="left">类型</span>
					<div class="right">
						<ul>
							<li class="superdefaultli" @click="toKinds()">
								<p>全部</p>
							</li>
							<li class="superdefaultli" @click="toEco()">
								<p>财经</p>
							</li>
							<li class="superdefaultli" @click="toMil()">
								<p>军事</p>
							</li>
							<li class="superdefaultli" @click="toSociety()">
								<p>社会</p>
							</li>
							<li class="superdefaultli" @click="toRule()">
								<p>法治</p>
							</li>
							<li class="superdefaultli" @click.prevent="toSport()">
								<p>体育</p>
							</li>
							<li class="current superdefaultli" @click="toScience()">
								<p>科技</p>
							</li>						
						</ul>
					</div>
				</div>
			</div>
			
		</div>
		<div class="show-monitor">
			<div class="feed-card-article-wrapper" v-for="(item,i) in list" :key="item.NewsId">
				<div class="feed-card-article single-cover" style="height: 150px;">
					<div class="feed-card-article-l">
						<a @click="toSportNews(item.NewsId)" >
							<img :src="item.NewsImage[0].imgUrl" alt="" style="width: 70%;height: 70%;">
						</a>
					</div>
					<div class="feed-card-article-r">
						<el-link @click="toSportNews(item.NewsId)" target="_blank" class="title" style="margin: 1.12em 0;font-size: 1.1em;">
							{{item.NewsName}}
						</el-link>
						<br>
						<el-link @click="toSportNews(item.NewsId)">
							{{item.NewsContent | longText}}
						</el-link>
					</div>
				</div>
				<el-divider></el-divider>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:this.$store.state.scienceNews,
				Pics: [{
						imgUrl: require("../../assets/images/technology1.jpg"),
						id: 1
					},
					{
						imgUrl: require("../../assets/images/technology2.jpg"),
						id: 2
					},
					{
						imgUrl: require("../../assets/images/technology3.jpg"),
						id: 3
					}
				]
			}
		},
		methods:{
			toSportNews(i) {
				this.$store.commit("setTemp",i);
				/* this.$router.push({
					path: "/sportnews"
				}); */
				this.$router.push('/sciencenews');
			},
			toEco(){
				this.$router.push({
					path:"/economic"
				});
			},
			toMil(){
				this.$router.push({
					path:"/military"
				});
			},
			toSport(){
				this.$router.push({
					path:"/sport"
				});
			},
			toScience(){
				this.$router.push({
					path:"/science",
				});
			},
			toSociety(){
				this.$router.push({
					path:"/society"
				});
			},
			toRule(){
				this.$router.push({
					path:"/rule",
				});
			},
			toKinds(){
				this.$router.push({
					path:"/kinds",
				})
			}
		},
		filters:{
			longText(value) {
				if (!value)
					return "";
				if (value.length > 38) {
					return value.slice(0, 38) + "...";
				}
				return value;
			},
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none;
		outline: none;
		color: #9e9e9e;
		font-family: "Microsoft Yahei", arial, sans-serif;
	}
	
	i {
		font-style: normal;
		font-weight: normal;
	}
	
	*,
	body,
	ul,
	li,
	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
		padding: 0;
	}
	
	.classification .content {
		width: 1000px;
		overflow: hidden;
		margin: 0 auto;
		padding-top: 40px;
		color: #9e9e9e;
		font: 12px "Microsoft Yahei", arial, sans-serif;
		font-weight: normal;
	}
	
	.genre {
		padding: 18px 46px;
		background: #fff;
	}
	
	.difgenre {
		overflow: hidden;
	}
	
	.difgenre .left {
		float: left;
		width: 48px;
		height: 50px;
		line-height: 50px;
		color: #ccc;
		display: inline-block;
		font-size: 12px;
	}
	
	.difgenre .right {
		float: left;
		width: 848px;
		padding: 0 0 0 6px;
		border-bottom: 1px solid #f0f0f0;
		overflow: hidden;
	}
	
	.difgenre ul {
		width: 848px;
		float: left;
		padding: 6px 0;
		font-size: 12px;
	}
	
	.difgenre ul li {
		float: left;
		margin-right: 14px;
		padding: 8px 0;
		list-style: none;
		cursor: pointer;
	}
	
	.difgenre ul .current p {
		background: #9e9e9e;
		border-radius: 50px;
		color: #fff;
		border: 1px solid #9e9e9e;
		line-height: 18px;
	}
	
	.difgenre .right p {
		display: inline-block;
		height: 20px;
		line-height: 20px;
		padding: 0 9px;
		border: 1px solid #fff;
	}
	
	.difgenre .right .more {
		float: right;
		margin-top: 14px;
		display: inline-block;
	}
	
	.difgenre .right .clickMore {
		display: none;
	}
	
	.difgenre .right .more a {
		width: 38px;
		height: 20px;
		border: none;
	}
	
	.difgenre .right .more a i {
		float: left;
		font-size: 12px;
	}
	
	.show-monitor {
		width: 980px;
		margin-top: 5px;
		margin-bottom: 50px;
	}
	
	.show-monitor div {
		margin: 10px 10px 10px 2px;
	}
	
	.feed-card-article-l{
		width: 30%;
		float: left;
	}
	.feed-card-article-r{
		width: 65%;
		float: left;
	}
	
</style>