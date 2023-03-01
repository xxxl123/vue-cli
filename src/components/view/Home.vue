<template>
	<div>
		<div class="main-content">
			<div class="left-content">
				<el-carousel :interval="5000" arrow="always" style="width: 980px;" height="230px">
					<el-carousel-item v-for="item in Pics" :key="item.id">
						<img :src="item.imgUrl" class="pic">
					</el-carousel-item>
				</el-carousel>
				<span style="padding:10px;font-size: 30px;font-family:隶书">推荐</span>
				<div class="show-monitor">
					<div class="feed-card-article-wrapper" v-for="(item,i) in list" :key="item.NewsId">
						<div class="feed-card-article single-cover">
							<div class="feed-card-article-r">
								<a href="" title="" @click.prevent="toNews(item.NewsId)">
									<img :src="item.NewsImage[0].imgUrl" alt="" style="height:110px;width:120px" >
								</a>
							</div>
							<div class="feed-card-article-l">
								<a href="" target="_blank" class="title" @click.prevent="toNews(item.NewsId)">
									{{item.NewsName}}
								</a>
								<div class="left-tools">
									<div class="feed-card-footer-cmp-author">
										<a href="">{{item.NewsAuthor}}</a>
										<a href="" style="margin-left: 10px;">{{item.NewsComment}}评论</a>
										<a href="" style="margin-left: 10px;">{{item.NewsTime}}</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="right-content">
				<div class="user-card login">
					<div class="show-login">
						<img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
						<div>
							<span class="name">{{getUserMessage.account}}</span>
						</div>
						<div class="relate-num">
							<a href="" @click.prevent="toworklist">
								<p class="num"><span>{{getWorkLength}}</span></p>
								<p class="word">作品</p>
							</a>
						</div>
					</div>
				</div>
				<div>
					<div class="test">
						<img src="../../assets/images/火.png" class="fire">
						<h2 class="titlehot">今日热榜</h2>
					</div>
					<div>
						<ol>
							<li  v-for="(item,i) in getSortNews.slice(0,9)" :key="i">
								<a class="article-item" href="">
									<span :class="'news-index num-'+i">{{i+1}}</span><p class="news-title">{{item.NewsName.slice(0,14)}}</p>
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:this.$store.state.News,
				searchlist:this.$store.state.SearchNewsList,
				Pics: [{
						imgUrl: require("../../assets/images/1.png"),
						id: 1
					},
					{
						imgUrl: require("../../assets/images/2.png"),
						id: 2
					},
					{
						imgUrl: require("../../assets/images/3.png"),
						id: 3
					},
					{
						imgUrl: require("../../assets/images/4.png"),
						id: 4
					},
					{
						imgUrl: require("../../assets/images/5.png"),
						id: 5
					}
				]
			}
		},
		methods:{
			//登录
			login(){
				this.$store.commit("Login",true)
				
				console.log(this.searchlist)
			},
			//跳转对应新闻页
			toNews(NewsId){
				console.log(NewsId)
				this.$router.push("/kinds")
			},
			//跳转对应作品
			toworklist(){
				this.$router.push("/workslist")
			}
		},
		computed:{
			//获取登录用户信息
			getUserMessage(){
					  return this.$store.getters.getUserMessage
			},
			//获取收藏数量
			getCollectLength(){
				return this.$store.getters.getCollectLength
			},
			//获取作品数量
			getWorkLength(){
				return this.$store.getters.getWorkLength
			},
			//排行榜
			getSortNews(){
				return this.$store.getters.getSortNews
			}
		}
	}
</script>
<style scoped>
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.pic {
		width: 980px;
		height: 230px;
	}

	.main-content {
		width: 1066px;
		display: flex;
	}

	.left-content {
		display: flex;
		flex-direction: column;
		padding-left: 20px;
	}

	.right-content {
		display: flex;
		flex-direction: column;
		padding-left: 20px;
	}

	.show-monitor {
		width: 980px;
		margin-top: 5px;
		margin-bottom: 50px;
	}

	.show-monitor div {
		margin: 10px 10px 10px 2px;
	}

	.show-login {
		width: 280px;
		height: 230px;
		display: inline-block;
		text-align: center;
		background-color: whitesmoke;
	}

	.login-info {
		font-size: 18px;
		line-height: 24px;
		font-weight: 500;
		color: #505050;
		padding: 60px 0 12px;
	}
	.titlehot{
		margin-top: 20px;
		padding-left: 32px;
		font-size: 30px;
		font-family:隶书;
		font-weight: 500;
		line-height: 28px;
		color: #222;
		cursor: default;
		position: relative;
	}
	.fire{
		width: 20px;
		height: 20px;
		margin-top: 25px;
		position: absolute;
	}
	.refresh{
		position: relative;
		border: none;
		font-size: 16px;
		font-weight: 500;
		color: #f04142;
		cursor: pointer;
		background: transparent;
		margin-left: 120px;
		margin-top: 22px;
	}
	.refreshimg{
		position: absolute;
		width: 20px;
		height: 20px;
		margin-left: 100px;
		margin-top: 25px;
	}
	.test{
		display: flex;
	}
	li{
		list-style: none;
	}
	.article-item {
	    display: flex;
	    align-items: center;
	    padding: 12px 0;
	    cursor: pointer;
	}
	a{
		text-decoration: none;
		color: #222;
		background-color: transparent;
	}
	.news-index {
	    margin-right: 8px;
	    width: 24px;
	    font-size: 20px;
	    font-weight: 700;
	    line-height: 24px;
	    font-family: ByteNumber-center;
	    color: #999;
	    text-align: center;
	}
	.num-0{
		color: #a82e2e;
	}
	.num-1{
		color: #f04142;
	}
	.num-2{
		color: #ff9a03;
	}
	.avatar{
		width:40px;
		height:40px;
		border-radius:40px;
		position: absolute;
		/* margin-left: 100px; */
		margin-top:10px;
		margin-right: 200px;
		cursor: pointer;
		position: relative;
	}
	.name{
		display: flex;
		width:40px;
		height:40px;
		color: black;
		margin-top: -35px;
		font-size: 20px;
		font-weight: 500;
		margin-left: 70px;
	}
	.relate-num{
		padding-left:40px;
		padding-right: 30px;
		padding-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.relate-num a{
		width: 100px;
		height: 100px;
		box-sizing: border-box;
		background: #fff;
		border-radius: 8px;
		color: #222;
		text-decoration: none;
		cursor: pointer;
	}
	.num {
	    line-height: 27px;
	    font-weight: 700;
	    color: #222;
	}
	.relate-num p {
	    text-align: center;
	}
	.word {
	    font-size: 14px;
	    line-height: 16px;
	    color: #505050;
	}
	.feed-card-article-r {
		float: right;
		margin-left: 20px;
	}
	.feed-card-article-l {
	    width: 496px;
	    box-sizing: border-box;
	    position: relative;
	    padding-bottom: 20px;
	    min-height: 120px;
	}
	.title {
	    width: 100%;
	    min-height: 100px;
	}
	.title:hover{
		color: red;
	}
	.feed-card-article .title {
	    display: inline-block;
	    font-size: 20px;
	    font-weight: 500;
	    word-break: break-all;
	}
	.left-tools {
	    float: left;
		display: flex;
	}
	.feed-card-footer-cmp-author a {
	    font-size: 14px;
	    color: #999;
		height: 10px;
	}
	.feed-card-article-wrapper{
		height:150px;
	}
</style>
