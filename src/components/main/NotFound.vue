<template>
	<div>
		<div class="container404">
			<div class="page404">
				<div class="f404">
					<span>4</span>
					<span>0</span>
					<span>4</span>
				</div>
				<div class="f404-des">
					<h1>您访问的页面不存在!^(*￣(oo)￣)^</h1>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.container404{
	background-color: yellow;
	font-family: arial,helvetica,sans-serif;
	font-size: 15px;
	color: #3c3c3c;
	padding: 150px;
}
.page404 .f404{
	text-align: center;
	font-size: 150px;
	font-weight: bold;
	line-height: 100px;
	letter-spacing: 5px;
	color: #fff;
	margin-bottom: 60px;
}
.page404 .f404 span{
	cursor: pointer;
	text-shadow: 0px 0px 2px #123456,
	0px 1px 1px #fff,
	0px 2px 1px #fff,
	0px 3px 1px #777,
	0px 4px 1px #fff,
	0px 5px 1px #fff,
	0px 6px 1px #fff,
	0px 7px 1px #fff,
	0px 8px 3px #fff,
	0px 9px 5px #000,
	0px 10px 7px #fff,
	0px 11px 9px #fff,
	0px 12px 11px #fff,
	0px 13px 15px #fff;
	
	-webkit-animation: all .1s linear;
	transition: all .1s linear;
}
.page404 .f404 span:hover{
	text-shadow: 0px 0px 2px #123456,
	0px 1px 1px #fff,
	0px 2px 1px #fff,
	0px 3px 1px #777,
	0px 4px 1px #fff,
	0px 5px 1px #fff,
	0px 6px 1px #fff,
	0px 7px 1px #fff,
	0px 8px 3px #fff,
	0px 9px 5px #000,
	0px 10px 7px #fff,
	0px 11px 9px #fff,
	0px 12px 11px #fff,
	0px 13px 15px #fff;
	-webkit-animation: all .1s linear;
	transition: all .1s linear;
}

.page404 .f404-des{
	text-align: center;
	color: #006666;
	font-family: cursive;
	font-size: 20px;
	text-shadow: 0 1px 0 #FFC520;
	letter-spacing: 1px;
	line-height: 20px;
}
</style>