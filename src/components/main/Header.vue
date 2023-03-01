<template>
  <div id="Header">
    <div class="left">今日头条</div>
    <div class="right">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">分类</el-menu-item>
        <el-menu-item index="3">发布作品</el-menu-item>
      </el-menu>
      <div>
        <el-input placeholder="请输入新闻关键词" v-model="keywords" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="Searchkeywords(keywords)"></el-button>
        </el-input>
      </div>
      <div>
        <img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
        <div>
          <span class="name">{{getUserMessage.account}}</span>
          <el-button type="danger" class="exit" @click="exitLogin">退出登录</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default{
  data(){
    return{
      //判断导航栏内容
      activeIndex: '1',
      //搜索关键词
      keywords:"",
    }
  },
  methods:{
    //路由跳转
    handleSelect(key) {
      switch(key){
        case '1':this.$router.push("/home");break;
        case '2':this.$router.push("/economic");break;
		case '3':this.$router.push("/workslist");break;
      }
    },
    exitLogin(){
	  this.$store.state.Loginflag=false
	  this.$router.push("/")
	  localstorage.clear();
      // localStorage.removeItem('user');
    },
    //获取搜索新闻结果
    Searchkeywords(keywords){
      let info=[]
      if(keywords==""){
        this.$store.commit("SearchNews",keywords)
        this.$message({
          showClose: true,
          message:'请输入关键字',
          type: 'error',
          center: true,
          duration: 1500
        });
        return
      }
      for(var i=0;i<this.$store.state.News.length;i++){
        if(this.$store.state.News[i].NewsName.includes(keywords))
        {
          this.$store.state.News[i].Searchcount++
          info.push(this.$store.state.News[i])

        }
      }
      if(info==""){
        this.keywords=""
        this.$message({
          showClose: true,
          message:'无相关新闻',
          type: 'error',
          center: true,
          duration: 1500
        });
        return
      }
      this.$store.commit("SearchNews",info)
      this.$router.push("/search")
    }
  },
  computed:{
	  getUserMessage(){
		  return this.$store.getters.getUserMessage
	  }
  }
}
</script>

<style scoped>

#Header{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  height: 90px;
  background: #fff;
  z-index: 1000;
  box-shadow: 0px 2px 0px 0px #e5e5e5;
}
/deep/.el-menu-demo{
  margin-top: 0;
  margin-left: 500px;
  width: 300px;
  position: absolute;
}
/deep/.el-menu.el-menu--horizontal{
  border-bottom: 0px;
}
.left{
  position: absolute;
  margin-top: 15px;
  margin-left: 160px;
  display: block;
  font-family:方正舒体;
  font-size: 30px;
  width: 200px;
}
.right{
  position: relative;
}
/deep/.input-with-select{
  width: 300px;
  margin-left: 800px;
  margin-top: 15px;
  padding-left: 10px;
  position: absolute;
}
.avatar{
  width:40px;
  height:40px;
  border-radius:40px;
  position: absolute;
  margin-left: 1200px;
  margin-top:15px;
  cursor: pointer;
}
.name{
  width:40px;
  height:40px;
  color: blue;
  margin-left: 1250px;
  position: absolute;
  margin-top: 26px;
}
.exit{
  margin-left: 1380px;
  margin-top: 18px;
  position: absolute;
  display: flex;
}
.login{
  margin-left: 1200px;
  margin-top: 18px;
  position: relative;
}
.register{
  margin-left: 1300px;
  margin-top: 18px;
  position: absolute;
}

</style>
