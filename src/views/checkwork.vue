<template>
	<div class="body">
		<div class="image">
			<img :src="$store.state.newworklist.imgurl" />
		</div>
		<div class="">
			<h1>{{$store.state.newworklist.title}}</h1>
			<div class="comment">
				<h4>{{$store.state.newworklist.content}}</h4>	
			</div>
			{{$store.state.newworklist.date | dateFormat("")}}
		</div>
		<div class="">
			
			 <el-divider><i class="el-icon-chat-line-square"></i></el-divider>
			<div id="">
				<ul>
					<li v-for="item in list">
						<h4>{{item.name}}</h4>
						<span class="pull-left">{{item.content}}</span>
						<span class="pull-right">{{item.date|dateFormat("")}}</span>>
						<a href="javascript:;" class="reply_btn">回复</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>



	export default {
		data(){
			return{
				list:[
					{name:"good",content:"hello，你好博主，我喜欢你这篇文章",date:Date.now()},
					{name:"在下彭于晏",content:"博主加油，继续做出优秀作品",date:Date.now()},
					{name:"王强",content:"写的真不错，赞！赞！赞！",date:Date.now()},
					{name:"唐行",content:"不错的文章，值得分享",date:Date.now()}
				],
			}
		},
		created(){
			$(function(){
			    //页面加载完毕后开始执行的事件
			    $(".reply_btn").click(function(){
			    $(".reply_textarea").remove();
			    $(this).parent().append("<div class='reply_textarea'><textarea name='' cols='40' rows='5'></textarea><br/><input type='submit' value='发表' /></div>");
			    });
			});
		},
		filters:{
			dateFormat:function(dateStr,type){
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
.body{
	background-color: #E9EEF3;
	width: 1000px;
	margin-left: 100px;
}
.container{
	margin-top:20px;
}

li h4{
	font-weight: 700;
	margin: 0 0 5 0;
}
.comment{
	margin-bottom: 20px;
}
/* .image{
	width: 500px;
	height: 400px;
} */
</style>