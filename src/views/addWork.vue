<template>
	<div class="body">
		<el-form ref="form"  :model="workslist" label-width="80px">
		  <el-form-item label="标题">
		    <el-input v-model="workslist.title"></el-input>
		  </el-form-item>
		  
			
			  <el-form-item label="文章属性">
				  <el-col :span="9">
					  <el-radio-group v-model="workslist.type">
					    <el-radio class="radio" label="财经"></el-radio>
					    <el-radio class="radio" label="军事"></el-radio>
						<br>
					  	<el-radio class="radio" label="法治"></el-radio>
					  	<el-radio class="radio" label="社会"></el-radio>
						<br>
						<el-radio class="radio" label="体育"></el-radio>
						<el-radio class="radio" label="科技"></el-radio>
						<br>
						<el-radio class="radio" label="娱乐"></el-radio>
						<el-radio class="radio" label="科技"></el-radio>
					  </el-radio-group>
				  </el-col>
				  
		
				<el-col :span="9" :offset='3'>
					<img :src="workslist.imgurl" id="myimg" style="width: 100px;height: 150px;" />
					<input type="file" id="myfile" style="display: none;" @change="setImgUrl" />
					<el-row>
						<!-- <span @click="delMyFile" class="inputbtn" >删除封面</span> -->
						<span @click="clickMyFile" class="inputbtn" >选择封面</span>
					</el-row>
				</el-col>
				
			  </el-form-item> 
			  
		  
		  <el-form-item label="内容">
		    <el-input type="textarea" v-model="workslist.content"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">立即创建</el-button>
		    <el-button>取消</el-button>
		  </el-form-item>
		</el-form>
	</div>
	
</template>

<script>
	export default {
		
		data(){
			return{
				WorksLength:this.$store.getters.getWorksLength,
				workslist:

					{id:"",
					username:"",
					type:"",
					title:"",
					content:"",
					imgurl:require('@/assets/images/subpicture.png')
					}
					//date:"2010-10-2",
					//flag:1,	//状态，0=删除，1=显示，2=禁止评论
					//},
					
			}
		},
		methods:{
			setImgUrl() {
				var oFReader = new FileReader();
				var file = document.getElementById('myfile').files[0];
				oFReader.readAsDataURL(file);
				var that = this;
				oFReader.onloadend = function(oFRevent) {
					var src = oFRevent.target.result;
					document.getElementById('myimg').src = src;
					that.workslist.imgurl = src;
				}
				//this.imgflag = true;
			},
			clickMyFile() {
				document.getElementById('myfile').click()
			},
			/* delMyFile() {
				this.imgflag = false;
				document.getElementById('myfile').value = ''
				document.getElementById('myimg').src = this.defaultImg
			}, */
			onSubmit(){
					//console.log(this.workslist.title);
					//console.log(this.workslist.type);
					const h = this.$createElement;
					var imgurl = document.getElementById('myimg').src;
					var username = JSON.parse(localStorage.getItem("username"));
					
					//console.log(new Date('2017-10-01 11: 53: 04'))
					
					if (this.workslist.title == '') {
						this.$message({
							showClose: true,
							message:'作品需要标题！',
							type: 'error',
							center: true,
							duration: 1500
						});
						return;
					}
					if (this.workslist.type == '') {
						this.$message({
							showClose: true,
							message:'文章需要一个分类！',
							type: 'error',
							center: true,
							duration: 1500
						});
						return;
					}
					if (this.workslist.content == '') {
						this.$message({
							showClose: true,
							message:'作品不能没有内容！',
							type: 'error',
							center: true,
							duration: 1500
						});
						return;
					}
					
					
					var info={
						id:this.WorksLength+1,
						username:username,
						type:this.workslist.type,
						title:this.workslist.title,
						content:this.workslist.content,
						date:Date.now(),
						flag:1,
						imgurl:imgurl
					}
					console.log(info)
					
					this.$store.commit({
						type:"addWork",
						data:info
					})
					
						/* bookStore.commit({
							type: 'addBook',
							data: this.book
						}); */
					
					
					this.$message({
						showClose: true,
						message:'发布成功',
						type: 'success',
						center: true,
						duration: 1500
					});
					this.$router.push('/workslist');
					
			},
		}
		
	}
</script>

<style scoped>

	.inputbtn {
		position: relative;
		display: inline-block;
		width: 100px;
		height: 30px;
		text-align: center;
		line-height: 24px;
		vertical-align: center;
		border: 1px solid #23c6c8;
		background-color: #23c6c8;
		color: #fff;
		border-radius: 3px;
		/* margin-left: 20px; */
	}

	.inputbtn:hover {
		border: 1px solid #23babc;
		border: 1px solid #23babc;
	}

	.inputbtn input {
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
	}
.body{
	width: 1000px;
	margin-left: 100px;
}
.radio{
	margin: 15px 30px;
}
</style>