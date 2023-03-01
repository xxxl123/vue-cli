<template>
    <div>
        <div class="bg-gif">
            <img src="@/assets/images/R-C.gif"/>
        </div>
        <!--       标题-->
        <el-row style="margin-top: 30px;">
            <el-col class="title" :span="10" :offset="7"><i class="el-icon-monitor"></i>今 日 头 条</el-col>
        </el-row>
        <!--        主体-->
        <el-row style="margin-top: 30px">
            <el-col style="width: 1120px;height: 465px;border: 1px solid black" :offset="4">
                <el-col :span="12">
                    <img :src="url" width="750px" height="463px">
                </el-col>1
                <el-col :span="12">
                    <el-row>
                        <el-col :offset="4">
                            <h3 style="color: white">用户登录</h3>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 30px">
                        <el-col :span="12" :offset="10">
                            <el-input
                                placeholder="请输入账号"
                                prefix-icon="el-icon-user"
                                maxlength="10"
                                show-word-limit
                                v-model="account">
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 30px">
                        <el-col :span="12" :offset="10">
                            <el-input
                                placeholder="请输入密码"
                                prefix-icon="el-icon-edit"
                                maxlength="10"
                                show-word-limit
                                show-password="true"
                                v-model="password">
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="7" :offset="9" style="margin-top: 30px">
                            <router-link to="1" style="text-decoration: none;color: white">
                                <el-button type="danger">
                                    注册账号
                                </el-button>
                            </router-link>
                        </el-col>
                        <el-col :span="7" style="margin-top: 30px">

                            <el-button class="login" type="primary" style="width: 100px" @click="checkLogin">点击登录
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
        </el-row>
      <GuideLine></GuideLine>
    </div>
</template>

<script>
import GuideLine from "@/components/GuideLine.vue";
export default {
    name: "AppLogin",
  components: {
    GuideLine
  },
    data() {
        return {
            username: "",
            account: "",
            password: "",
            time: "",
            url: require('../assets/images/img.jpg')
        }
    },
    mounted() {
        this.username = "";
        this.password = "";
    },
    methods:{
        checkLogin() {
            this.$store.dispatch({
                type: "asyncCheckLogin",
                login: {
                    account: this.account,
                    password: this.password
                },
            });
            if (this.$store.state.token == 1) {
                this.$message({
                    message: "请输入账号或密码！",
                    type: "error",
                    duration: 2000
                })
                return;
            } else if (this.$store.state.token == 2) {
                this.$message({
                    message: "用户名或密码错误,请重新输入！",
                    type: "error",
                    duration: 2000
                })
                return;
            } else if (this.$store.state.token == 3) {
				
                this.$notify({
                    title: "登录成功！",
                    type: "success",
                    duration: 2000
                })
                this.$store.state.accountShowOrNot = false;
                this.$store.dispatch({
                    type: "asyncFindUserById",
                    user: {
                        account: this.account
                    },
                });
				
				
				localStorage.setItem("username",JSON.stringify(this.account))
				// if(this.account == 2116190001){
				// 	var username="张三";
				// 	localStorage.setItem("username",JSON.stringify(username));
				// }else{
				// 	var username="李四";
				// 	localStorage.setItem("username",JSON.stringify(username));
				// }
				
				var info={account:this.account}
				localStorage.setItem("user",JSON.stringify(info))
				this.$store.state.Loginflag=true
				this.$router.push("/home")
            }
        }
    }

}
</script>

<style scoped>
.title {
    font: normal 24px/45px "microsoft YaHei";
    color: white;
    padding: 0;

}
.bg-gif {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
.bg-gif img {
    width: 100%;
    height: 100%;
}
</style>
