<template>
	<div>
		<div class="show-monitor">
			<div class="feed-card-article-wrapper" v-for="(item,i) in searchlist[0]" :key="item.NewsId">
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
</template>

<script>
	export default {
		data() {
			return {
				searchlist:this.$store.state.SearchNewsList
			}
		},
		methods:{
			//跳转对应新闻页
			toNews(NewsId){
				console.log(NewsId)
				this.$router.push("/kinds")
			}
		}
	}
</script>

<style scoped>
.show-monitor {
	width: 980px;
	margin-top: 5px;
	margin-bottom: 50px;
}
	
.show-monitor div {
	margin: 10px 10px 10px 2px;
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
		color: black;
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
	a{
		text-decoration: none;
	}
</style>