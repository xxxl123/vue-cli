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
							<li class="superdefaultli" @click="toScience()">
								<p>科技</p>
							</li>	
						</ul>
					</div>
				</div>
			</div>
			
		</div>
		
		<div class="show-monitor" v-for="(item,i) in list" :key="item.NewsId">
			<div class="feed-card-article-wrapper" v-if="item.NewsId==temp">
				<h1>{{item.NewsName}}</h1>
				<a>来源:{{item.NewsAuthor}} |{{item.NewsTime}}</a>
				<br><br>
				<span class="newscontent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.NewsContent}}</span>
			</div>
		</div>	
		
		<div class="container">
			<div>
				
				<ul class="list-unstyled">
					<li class="clearfix"  v-for="item in list2">
						<h4>{{item.name}}</h4>
						<span class="pull-left">{{item.content}}</span>
						<span class="pull-right">{{item.date | dateFormat("")}}</span>
					</li>
				</ul>
			</div>
		</div>
		<articalcomment @func="getInfo"></articalcomment>	
	</div>
</template>

<script>
	import articalcomment from './articalcomment.vue'
	export default{
		data() {
			return {
				list:this.$store.state.Society,
				temp:this.$store.state.temp,
				list2:""
			}
		},
		created(){
			this.getInfo();		
		},
		methods:{
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
			},
			getInfo(data){
				if(data!=null){
					//去localstorage仓库中读取数据
					var newList=JSON.parse(localStorage.getItem("commentList"));
					//将读取到的数据赋值给vue实例，页面渲染数据
					this.list2=newList;
					
				}
			}
		},
		components:{
			articalcomment
		},
		filters:{
			dateFormat:function(dateStr,type){
				//根据特定的时间得到时间对象
				var dt = new Date(dateStr);
				// yyyy-mm-dd hh:mm:ss
				var y=dt.getFullYear();
				var m=(dt.getMonth()+1).toString().padStart(2,"0");
				var d=dt.getDate().toString().padStart(2,"0");
				if(type=="yyyy-mm-dd"){
					return `${y}-${m}-${d}`;
				}else{
					//yyyy-mm-dd hh:mm:ss
					var H=dt.getHours().toString().padStart(2,"0");
					var M=dt.getMinutes().toString().padStart(2,"0");
					var S=dt.getSeconds().toString().padStart(2,"0");
					return `${y}-${m}-${d} ${H}:${M}:${S}`;
				}
				
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
	.feed-card-article-wrapper{
		padding-left: 100px;
	}
	h1,a{
		
		padding-bottom: 25px;
	}
	.newscontent{
		font-size: 18px;
		line-height: 32px;
	}
	
	
</style>