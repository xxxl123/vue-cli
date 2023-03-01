<template>
	<div>
		<div class="container">
		<el-container v-for="(e,i) in en" :key="i">
		  <el-header><h1>{{e.title}}</h1></el-header>
		  <el-main>
			  <img src="../../assets/images/eco/a.jpg" alt="">
			  <div>
				  <div style="text-align: left;">
					  {{e.head}}
				  </div>
				  <div  v-for="(item,i) in list" :key="i">
					  <h2>{{item.t}}</h2>
					  <div style="text-align: left;">{{item.c}}</div>
				  </div>
			</div>
		  </el-main>
		  
		   <el-footer>
			<div class="el-card-messages" >
			<el-input v-model="name" size="mini" class="message-nick-name" type="text">
				<template slot="prepend">昵称：</template>
			</el-input>
			<el-input slot="prepend" v-model="content" type="textarea" :rows="2" class="message-text"
				placeholder="输入想评论的内容" maxlength="200" />
			<el-button type="primary" @click="submitMessage()">评论</el-button>
		</div>
		
		<el-card class="el-card-d" shadow="always">
			<h3 style="text-align: left;">评论区</h3>
			<el-timeline infinite-scroll-disabled="disabled">
					<el-timeline-item v-for="(item,i) in pagemessages" :key="i" :timestamp="item.createDate" placement="top">
						<el-card class="el-card-m">
							<span class="el-card-m-content" style="text-align: left;">{{item.content}}</span>
							<br>
							<span class="el-card-m-nick-name">{{item.name}}提交于{{item.time}}</span>
						</el-card>
					</el-timeline-item> 
					<el-timeline-item v-for="t in list2" >
						<el-card class="el-card-m">
						<span class="el-card-m-content" style="text-align: left;">{{t.content}}</span>
						<br>
						<span class="el-card-m-nick-name">{{t.name}}提交于{{t.date | dateFormat("")}}</span>
					</el-card>
					</el-timeline-item>
					
			</el-timeline>
		</el-card>
		</el-footer>
		</el-container>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				en:this.$store.state.econews,
				list:this.$store.state.econewscontent,
				pagemessages:this.$store.state.econewsreview,
				name:"",
				content:"",
				list2:""
			} 
		},
		created(){
					this.getInfo();
					//alert("welcome!")
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
					return `${y}-${m}-${d}`;
				}
			}
		},
		computed: {
					getName() {
						return this.$store.state.name;
					}
				},
		methods:{
			getInfo(data){
				//从仓库中读取数据
				var newList=JSON.parse(localStorage.getItem("commentList")|| '[]');
				this.list2=newList;
			},
			submitMessage(){
				var info={name:this.name,content:this.content,date:Date.now()}
				//local storage 浏览器的本地仓库 用户可以把数据存在里面
				//getItem("数据名称") setItem("数据名称")  需要先将数据格式化
				
				//1.先从localstorage仓库中获取原有的数据 封装成数组						
				var list=JSON.parse(localStorage.getItem("commentList") || '[]');
				//2.再将新数据放入list中去
				list.unshift(info);
				//3.将更新过的list再重新保存到localstorage仓库中
				localStorage.setItem("commentList",JSON.stringify(list));
				this.name=this.content="";
				this.$emit("func",info);
			}
		}
	}
</script>

<style scoped>
.container{
		width: 800px;
		padding-left: 200px;
	}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 30px;
  }
   .el-footer{
	   text-align: center;
   }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }
  img{
	  width: 600px;
	  height: 450px;
	  padding-left: 20px;
  }
  span{
	  line-height: 5px;
  }
  .el-input__inner {
  		font-family: '楷体';
  	}
  
  	body {
  		font-family: "楷体";
  	}
  
  	.el-card-d {
  		float: left;
  		margin-top: 20px;
  		width: 100%;
  		max-height: 750px;
  		background: #EEEEEE;
  	}
  
  	.el-card-m {
  		height: 120px;
  		font-family: "楷体";
  	}
  
  	.el-card-m-content {
  		display: block;
  		font-weight: bold;
  
  	}
  
  	.el-card-m-nick-name {
  		display: block;
  		font-size: x-small;
  		margin-top: 15px;
  		color: gray;
  		font-size: 15px;
  		position: absolute;
  		bottom: 15px;
  		font-size: 17PX;
  		line-height: 50px;
  	}
  
  	.el-card-messages {
  		float: left;
  		margin-top: 20px;
  		width: 100%;
  		font-family: "楷体";
  	}
  
  	.message-nick-name {
  		width: 100%;
  		font-family: "楷体";
  		margin-top: 10px;
  		font-size: 14PX;
  	}
  
  	.message-text {
  		margin-top: 10px;
  		display: block;
  		width: 80%;
  		outline-style: none;
  		border: 1px solid #c0c4cc;
  		border-radius: 5px;
  		width: 100%;
  		height: 100%;
  		padding: 10px 15px;
  		box-sizing: border-box;
  		font-family: "楷体";
  		padding-right: 120px;
  		/* padding-bottom: 50px; */
  	}
  
  	.el-card-messages {
  		border-top: 2px solid #D4D0AB;
  		border-bottom: 1px solid gray;
  		padding-bottom: 10px;
  	}
</style>