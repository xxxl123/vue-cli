<template>
    <div>
        <el-card style="width: 1000px;height: 400px;margin: 50px 250px;background-color: #80808040">
            <el-row style="text-align: left">
                {{ this.$store.state.passage1 }}
            </el-row>
            <el-row style="text-align: left;margin-top: 30px">
                {{ this.$store.state.passage2 }}
            </el-row>
            <el-row style="text-align: left;margin-top: 30px">
                {{ this.$store.state.passage3 }}
            </el-row>
            <el-row style="text-align: left;margin-top: 30px">
                {{ this.$store.state.passage4 }}
            </el-row>
            <el-row style="text-align: left;margin-top: 30px">
                {{ this.$store.state.passage5 }}
            </el-row>
        </el-card>
        <small>© 2023 今日头条 中国互联网举报中心京ICP证140141号京ICP备12025439号-3京公网安备 11000002002023号</small>
        <br>
        <small>网络文化经营许可证跟帖评论自律管理承诺书违法和不良信息举报电话：400-140-2108公司名称：北京抖音信息服务有限公司</small>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}

</script>

<style lang="scss" scoped>

</style>
