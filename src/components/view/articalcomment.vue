<template>
	
	<div class="comment">
		<div class="el-card-messages" >
			<el-input v-model="name" size="mini" class="message-nick-name" type="text">
				<template slot="prepend">昵称：</template>
			</el-input>
			<el-input slot="prepend" v-model="content" type="textarea" :rows="2" class="message-text"
				placeholder="输入想评论的内容" maxlength="200" />
			<el-button type="primary" @click="toSubmit()">评论</el-button>
		</div>
		<!-- <div class="form-group">
			<label >评论人</label>
			<input class="form-control" type="text" v-model="name">
		</div>
		
		<div class="form-group">
			<label >评论内容</label>
			<input class="form-control" rows="" cols=""  v-model="content">
		</div>
		
		<div>
			<button class="btn"  type="button" @click="toSubmit()">提交评论</button>
		</div> -->
	</div>
</template>

<script>
	export default {
		data(){
			return{
				name:"",
				content:""
			}
		},
		methods:{
			toSubmit(){
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
  .el-input__inner {
  		font-family: '楷体';
  	}
	.el-card-messages {
		float: left;
		margin-top: 20px;
		width: 800px;
		font-family: "楷体";
	}
</style>