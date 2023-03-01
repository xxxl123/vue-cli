<template>
	<div class="classification">
		<div class="content">
			<div class="genre">
				<div class="difgenre">
					<span class="left">类型</span>
					<div class="right">
						<ul>
							<li class="current superdefaultli" @click="active('',$event)">
								<p>全部</p>
							</li>
							<li class="superdefaultli">
								<p><router-link to="/economic">财经</router-link></p>
							</li>
							<li class="superdefaultli">
								<p><router-link to="/military">军事</router-link></p>
							</li>
							<li class="superdefaultli">
								<p><router-link to="/society">社会</router-link></p>
							</li>
							<li class="superdefaultli">
								<p><router-link to="/rule">法治</router-link></p>
							</li>
							<li class="superdefaultli">
								<p><router-link to="/sport">体育</router-link></p>
							</li>
							<li class="superdefaultli">
								<p><router-link to="/science">科技</router-link></p>
							</li>
							<!-- <li v-for="(item,index) in typelist" :key="index" @click="active(item.name,$event)" class="superdefaultli">
								<p>{{item.name}}</p>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
			<div class="show">
				<router-view></router-view>
				<!-- <ul class="newShow">
					<li v-for="(item,index) in list" :key="index">
						<img :src="item.imgurl" />
						<div class="bookMation">
							<h3 @click="send(item)">
								{{item.name}}
							</h3>
							<p class="author">
								{{item.author}}
							</p>
							<p class="introduce">
								{{item.introduction}}
							</p>
						</div>
					</li>
				</ul> -->
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">
	// import book from '../bookcenter/image/bookcenter.js'
	// import $ from 'jquery';

	export default {
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
			
		}
	}
		// methods: {
		// 	send(item) {
		// 		this.$router.push({
		// 			path: "/book",
		// 			query: item
		// 		})
			// active(item,event){
			// 	book.commit({
			// 		type:"selectType",
			// 		data:item
			// 	});     
			// 	var dom= document.getElementsByClassName('superdefaultli')
			// 	for(var i=0;i<dom.length;i++){
			// 		if(event.target.parentNode==dom[i]){
			// 	 		dom[i].classList.add('current')
			// 		}else{
			// 			dom[i].classList.remove('current')
			// 		}
			// 	}
			// }
		 // },
		// computed: {
		// 	list() {
		// 		return book.getters.IndexgetBookListBybooktype;
				
		// 	},
		// 	typelist(){
		// 		return book.getters.getBookType;
		// 	}
		// },
		// mounted() {
		// 	book.commit({
		// 		type:"selectType",
		// 		data:''
		// 	});    
		// }
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
		padding-top: 20px;
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

	.el-icon-plus {
		float: right;
		width: 9px;
		height: 6px;
		background-position: 0 0;
		margin-top: 5px;
		margin-left: 2px;
	}

	.el-icon-minus {
		float: right;
		width: 9px;
		height: 6px;
		background-position: 0 0;
		margin-top: 5px;
		margin-left: 2px;
	}

	.showTitle {
		width: 1000px;
		height: 41px;
		padding-top: 23px;
	}

	.showTitle .new,
	.showTitle .comment {
		float: left;
		width: 114px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 3px;
		background: #f5f5f5;
		font-size: 14px;
		display: inline-block;
	}

	.showTitle .current {
		background: #fff;
		height: 41px;
	}

	.showTitle a {
		display: block;
		overflow: hidden;
		text-decoration: none;
		outline: none;
	}

	.show {
		width: 1000px;
		overflow: hidden;
		background: #fff;
		/* padding: 10px 10px 0; */
	}



	
</style>
