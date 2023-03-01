<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
           background-color="#213342" text-color="#fff" active-text-color="white" >
    <el-menu-item index="2">
      <router-link :to="{name:'us'}">关于我们</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link :to="{name:'application'}">下载app</router-link>
    </el-menu-item>
  </el-menu>

</template>

<script>
export default {

  name: "GuideLine",

  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}

</script>

<style scoped>
ul{
	width: 1122px;
	margin-left: 251px;
}
</style>