<template>
    <div>
        <div class="bg-gif">
            <img src="@/assets/images/R-C.gif"/>
        </div>
        <!--       标题-->
        <el-row style="margin-top: 30px;">
            <el-col class="title" :span="10" :offset="7"><i class="el-icon-monitor"></i>今 日 头 条</el-col>
        </el-row>
        <el-row style="margin-top: 30px">
            <el-col style="width: 1120px;height: 465px;border: 1px solid black" :offset="4">
                <el-col :span="12">
                    <img :src="url" width="750px" height="463px"/>
                </el-col>
                <el-col :span="12">
                    <el-row>
                        <el-col :offset="4">
                            <h3 style="color: white">用户注册</h3>
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
                                show-password
                                v-model="password">
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 30px">
                        <el-col :span="12" :offset="10">
                            <el-input
                                placeholder="请再次输入密码"
                                prefix-icon="el-icon-edit"
                                maxlength="10"
                                show-password
                                v-model="requirePassword">
                            </el-input>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="7" :offset="9" style="margin-top: 30px">
                            <router-link to="/2" style="text-decoration: none;color: white">
                                <el-button class="login" type="danger" style="width: 100px">
                                    返回登录
                                </el-button>
                            </router-link>
                        </el-col>
                        <el-col :span="7" style="margin-top: 30px">
                            <el-button type="primary" @click="checkRegister">
                                立即注册
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
        </el-row>

    </div>
</template>

<script>

export default {
    name: "AppRegister",
    data() {
        return {
            account: "",
            password: "",
            requirePassword: "",
            url: require('../assets/images/img2.jpg'),
            radio: '3',
            centerDialogVisible: false,
            adminPassword: "",
            adminCreateAccountToken: false,
        }
    },
    computed: {},
    methods: {
        checkRegister() {
            this.$store.dispatch({
                type: "asyncCheckRegister",
                register: {
                    account: this.account,
                    password: this.password,
                    requirePassword: this.requirePassword,
                },
            });
            if (this.$store.state.registerToken == 1) {
                this.$message({
                    message: "请输入用户名和密码！",
                    type: "error",
                    duration: 2000
                })
                return;
            }
            if (this.$store.state.registerToken == 2) {
                this.$message({
                    message: "请再次输入密码！",
                    type: "error",
                    duration: 2000
                })
                return;
            }
            if (this.$store.state.registerToken == 3) {
                this.$message({
                    message: "两次输入的密码不一致！",
                    type: "error",
                    duration: 2000
                })
                return;
            }
            if (this.$store.state.registerToken == 4) {
                this.account = this.$store.state.account;
                this.$notify({
                    title: "注册成功！欢迎登录",
                    type: "success",
                    duration: 2000
                });
                this.$router.push({
                    name: "login",
                    params: {},
                });
            }
        },
        createAdminAccount() {
            if (this.adminPassword != this.$store.state.adminPassword) {
                alert("管理员密码错误,请重新输入");
                return;
            } else {
                this.adminCreateAccountToken = true;
                alert("密码正确,系统将自动为您生成管理员账户");
                this.centerDialogVisible = false;
                this.$store.dispatch({
                    type: "asyncCheckRegister",
                    register: {
                        account: this.account,
                        password: this.password,
                        roleId: this.radio,
                        requirePassword: this.requirePassword,
                        adminCreateAccountToken: this.adminCreateAccountToken,
                    },
                });
                if (this.$store.state.registerToken == 1) {
                    this.$message({
                        message: "请输入用户名和密码！",
                        type: "error",
                        duration: 2000
                    })
                    return;
                }
                if (this.$store.state.registerToken == 2) {
                    this.$message({
                        message: "请再次输入密码！",
                        type: "error",
                        duration: 2000
                    })
                    return;
                }
                if (this.$store.state.registerToken == 3) {
                    this.$message({
                        message: "两次输入的密码不一致！",
                        type: "error",
                        duration: 2000
                    })
                    return;
                }
                this.$store.state.accountShowOrNot = true;
                this.account = this.$store.state.adminAccount;
                this.account = this.account - 1;
                this.$notify({
                    title: "注册成功！系统为您分配的账号为" + this.account,
                    type: "success",
                    duration: 2000
                });
                this.$store.dispatch({
                    type: "asyncFindUserById",
                    user: {
                        account: this.account,
                        roleId: this.radio
                    },
                });
                this.$router.push({
                    name: "login",
                    params: {account: this.account, password: this.password},
                });

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
