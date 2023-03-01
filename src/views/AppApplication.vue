<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="0" style="margin-top:100px">
                <img :src="url1" width="227px" height="482px"/>
            </el-col>
            <el-col :span="12" :offset="0" style="margin-top:100px;">
                <el-row>
                    <img :src="url2" width="180px" height="60px"/>
                </el-row>
                <el-row style="margin-top: 100px">
                    <img :src="url3" width="180px" height="200px"/>
                </el-row>
            </el-col>

        </el-row>

    </div>
</template>

<script>
export default {
    data(){
        return{
            url1: require('../assets/images/pic1.png'),
            url2: require('../assets/images/pic-r-1.png'),
            url3: require('../assets/images/pic-r-2.png'),
        }
    }
}
</script>

<style scoped>
/deep/.el-row{
	width: 1000px;
}
</style>
