<template>
	<div class="body">

		
		<el-button type="warning" icon="el-icon-edit" @click="toAddWork">发表作品</el-button>
		<el-table
		    :data="getUserWorks.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
		    style="width: 100%">
			<el-table-column
			  label="序号"
			  type="index">
			</el-table-column>
			
			<el-table-column
			  label="图片">
			  <template slot-scope="scope">
			  	<el-popover placement="top-start" title="" trigger="hover">
			  		<img :src="scope.row.imgurl" alt="" style="width: 180px;height: 200px">
			  		<img slot="reference" :src="scope.row.imgurl | geturl(scope.row,scope.row.imgurl)"
			  			style="width: 90px;height: 106px">
			  	</el-popover>
			  </template>
			</el-table-column>
			
			<el-table-column
			  label="标题"
			  prop="title">
			</el-table-column>
			<el-table-column
			  label="内容">
			  <template slot-scope="scope">
				  <el-tooltip :content="scope.row.content" placement="top" effect="light" width='200'>
				  	<span>{{scope.row.content | longText}}</span>
				  </el-tooltip>
			  </template>
			</el-table-column>
			<el-table-column
			  label="Date">
			  <template slot-scope="scope">
				  <el-tooltip :content="scope.row.date" placement="top" effect="light" width='200'>
					<span>{{scope.row.date | dateFormat("")}}</span>
				  </el-tooltip>
			  </template>
			</el-table-column>
		    <el-table-column
		      align="right">
		      <template slot="header" slot-scope="scope">
		        <el-input
		          v-model="search"
		          size="mini"
		          placeholder="输入关键字搜索"/>
		      </template>
		      <template slot-scope="scope">
		        <el-button
		        	size="mini"
		        	@click="Edit(scope.$index, scope.row)">查看</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="Delete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		<el-pagination
		  background
		  @current-change="handleCurrentChange"
		  :current-page="currentPage"
		  layout="prev, pager, next"
		  :total="WorksLength"
		  :page-size="pagesize">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		
		data(){
			return{
				//getUserWorks:this.$store.getters.getUserWorks,
				search: '',
				dialogVisible: false,
				currentPage: 1,
				currentIndex:'',
				WorksLength:this.$store.getters.getWorksLength,
				pagesize:3
			}
		},
		methods:{
			//查看
			Edit(index, row) {
				var info={
					id:row.id,
					username:row.username,
					type:row.type,
					title:row.title,
					content:row.content,
					date:row.date,
					flag:1,
					imgurl:row.imgurl
				} 
				this.$store.commit({
					type:"saveCheckWork",
					data:info
				});
				this.$router.push('/checkwork');
			},
			Delete(index, row) {
				this.$store.commit("delUserWork",row.id)
				this.$message({
					showClose: true,
					message:'删除成功',
					type: 'success',
					center: true,
					duration: 1500
				});
			}, 
			handleClose(done) {
			        this.$confirm('确认关闭？')
			          .then(_ => {
			            done();
			          })
			          .catch(_ => {});
			      },	
			toAddWork(){
				this.$router.push('/addwork');
			},
			handleCurrentChange(val) {
				var worklist2=this.$store.getters.getUserWorks;
				//console.log(worklist2)
				//console.log(worklist2.slice(0,3))
			    this.currentPage= val
				var apage=(val-1)*this.pagesize;
				var bpage=val*this.pagesize;
				if(bpage>this.WorksLength){
					bpage=this.WorksLength
				}
				worklist2.slice(apage,bpage)
				console.log(worklist2.slice(apage,bpage))
				
				
			},
		},
		computed:{
			/* getUserWorks(){
				return this.$store.getters.getUserWorks;
			}, */
			getUserWorks(){
				var worklist2=this.$store.getters.getUserWorks;
				var apage=(this.currentPage-1)*this.pagesize;
				var bpage=this.currentPage*this.pagesize;
				if(bpage>this.WorksLength){
					bpage=this.WorksLength
				}
				worklist2.slice(apage,bpage)
				return worklist2.slice(apage,bpage);
			},
		},
		filters: {
			// 使文字显示少于10个字符，防止页面布局变动
			shortText(value) {
				if (!value)
					return "";
				if (value.length > 5) {
					return value.slice(0, 5) + "...";
				}
				return value;
			},
			longText(value) {
				if (!value)
					return "";
				if (value.length > 38) {
					return value.slice(0, 38) + "...";
				}
				return value;
			},
		
			// 防止图片内容不符
			geturl(url, n) {
				var url2 =
					"http://celiang.oss-cn-hangzhou.aliyuncs.com/measurement/2022-05/19/G0JSVphpS2MItH1652924237220519.jpg";
				var img = new Image();
				img.src = url;
				img.onload;
				setTimeout(() => {
					if (img.width < 10 || img.height < 10) {
						n.imgurl = url2;
					}
				}, 1500)
				return url;
			},
			//时间过滤器
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
		},
	}
</script>

<style scoped>
.body{
	width: 1200px;
}
</style>